'use client'

import { useState, useMemo } from 'react'
import s from '@/styles/calculator.module.css'
import { ROUTES } from '@/lib/routes'

// ─── Конфиг цен из env (NEXT_PUBLIC_* инлайнятся при сборке) ─────────────────

const PRICE_TIER_1 = Number(process.env.NEXT_PUBLIC_REMOVAL_PRICE_TIER_1 ?? 1000)
const PRICE_TIER_2 = Number(process.env.NEXT_PUBLIC_REMOVAL_PRICE_TIER_2 ?? 900)
const PRICE_TIER_3 = Number(process.env.NEXT_PUBLIC_REMOVAL_PRICE_TIER_3 ?? 700)
const PRICE_TIER_4 = Number(process.env.NEXT_PUBLIC_REMOVAL_PRICE_TIER_4 ?? 600)
const PRICE_TIER_5 = Number(process.env.NEXT_PUBLIC_REMOVAL_PRICE_TIER_5 ?? 500)
const BUYOUT_PRICE = Number(process.env.NEXT_PUBLIC_BUYOUT_PRICE ?? 300)

// Коэффициенты перекрытия (сколько 5★ нужно, чтобы перекрыть 1 отзыв)
const BUYOUT_COEF: Record<number, number> = { 1: 27, 2: 20, 3: 15, 4: 5 }

// ─── Утилиты ────────────────────────────────────────────────────────────────

function getPricePerReview(totalNegatives: number): number {
    if (totalNegatives <= 50) return PRICE_TIER_1
    if (totalNegatives <= 300) return PRICE_TIER_2
    if (totalNegatives <= 1000) return PRICE_TIER_3
    if (totalNegatives <= 2000) return PRICE_TIER_4
    return PRICE_TIER_5
}

function calcCurrentRating(n1: number, n2: number, n3: number, n4: number, n5: number): number {
    const total = n1 + n2 + n3 + n4 + n5
    if (total === 0) return 0
    return (n1 * 1 + n2 * 2 + n3 * 3 + n4 * 4 + n5 * 5) / total
}

/** Возвращает, сколько 1★/2★/3★ нужно убрать для достижения targetRating.
 *  Жадная стратегия: сначала убираем 1★ (максимальный эффект), потом 2★, потом 3★. */
function calcRemovalsNeeded(
    n1: number, n2: number, n3: number, n4: number, n5: number,
    target: number
): { r1: number; r2: number; r3: number; reachable: boolean } {
    let S = n1 * 1 + n2 * 2 + n3 * 3 + n4 * 4 + n5 * 5
    let N = n1 + n2 + n3 + n4 + n5

    if (N === 0) return { r1: 0, r2: 0, r3: 0, reachable: false }
    if (S / N >= target) return { r1: 0, r2: 0, r3: 0, reachable: true }

    let r1 = 0, r2 = 0, r3 = 0

    // Убираем 1★
    if (n1 > 0 && target > 1) {
        const needed = Math.ceil((target * N - S) / (target - 1))
        r1 = Math.min(needed, n1)
        S -= r1 * 1
        N -= r1
    }

    // Убираем 2★, если цели ещё не достигли
    if (N > 0 && S / N < target && n2 > 0 && target > 2) {
        const needed = Math.ceil((target * N - S) / (target - 2))
        r2 = Math.min(needed, n2)
        S -= r2 * 2
        N -= r2
    }

    // Убираем 3★
    if (N > 0 && S / N < target && n3 > 0 && target > 3) {
        const needed = Math.ceil((target * N - S) / (target - 3))
        r3 = Math.min(needed, n3)
        S -= r3 * 3
        N -= r3
    }

    const reachable = N === 0 || S / N >= target
    return { r1, r2, r3, reachable }
}

function formatMoney(n: number): string {
    return new Intl.NumberFormat('ru-RU').format(n) + ' ₽'
}

function formatRating(n: number): string {
    return n.toFixed(2)
}

/** Русское склонение */
function plural(n: number, one: string, few: string, many: string): string {
    const m10 = n % 10
    const m100 = n % 100
    if (m100 >= 11 && m100 <= 14) return many
    if (m10 === 1) return one
    if (m10 >= 2 && m10 <= 4) return few
    return many
}

/** Звёздочки: filled + empty */
function Stars({ filled, total = 5 }: { filled: number; total?: number }) {
    return (
        <span>
            <span className={s.star1}>{'★'.repeat(filled)}</span>
            <span className={s.starEmpty}>{'☆'.repeat(total - filled)}</span>
        </span>
    )
}

// ─── Модальное окно-инструкция ───────────────────────────────────────────────

function InstructionModal({ onClose }: { onClose: () => void }) {
    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.modal} onClick={e => e.stopPropagation()}>
                <button className={s.modalClose} onClick={onClose} aria-label="Закрыть">✕</button>
                <h2 className={s.modalTitle}>Как посмотреть оценки на Wildberries</h2>
                <div className={s.modalSteps}>
                    <div className={s.modalStep}>
                        <div className={s.modalStepNum}>1</div>
                        <p className={s.modalStepText}>
                            Войдите в личный кабинет продавца
                        </p>
                    </div>
                    <div className={s.modalStep}>
                        <div className={s.modalStepNum}>2</div>
                        <div className={s.modalStepText}>
                            <p>В левом меню откройте раздел:<br /><b>Аналитика → Оценка товара</b></p>
                            <p className={s.modalSubHeading}>Если хотите посмотреть конкретный артикул:</p>
                            <ul className={s.modalList}>
                                <li>нажмите <b>«Фильтр»</b>;</li>
                                <li>выберите <b>«Артикул»</b>;</li>
                                <li>поставьте галочку возле нужного артикула.</li>
                            </ul>
                            <p className={s.modalNote}>Можно выбрать один или несколько артикулов.</p>
                        </div>
                    </div>
                    <div className={s.modalStep}>
                        <div className={s.modalStepNum}>3</div>
                        <p className={s.modalStepText}>
                            Нажмите <b>«Применить»</b>
                        </p>
                    </div>
                    <div className={s.modalStep}>
                        <div className={s.modalStepNum}>4</div>
                        <p className={s.modalStepText}>
                            Справа появится блок <b>«Прирост оценок»</b>.
                            Внизу этого блока будет суммарное количество всех оценок, которое влияет на рейтинг.
                            Именно эти значения нужно ввести в калькулятор, чтобы узнать, сколько отзывов нужно убрать для роста рейтинга.
                        </p>
                    </div>
                </div>
                <button className={s.modalBtn} onClick={onClose}>Понятно, закрыть</button>
            </div>
        </div>
    )
}

// ─── Главный компонент ───────────────────────────────────────────────────────

type StarKey = 's1' | 's2' | 's3' | 's4' | 's5'

const TARGET_PRESETS = [
    { label: '4,8', value: '4.8' },
    { label: '4,9', value: '4.9' },
    { label: '5,0', value: '5.0' },
    { label: 'Другой вариант', value: 'custom' },
]

const STAR_LABELS: Record<StarKey, string> = {
    s1: '1 звезда',
    s2: '2 звезды',
    s3: '3 звезды',
    s4: '4 звезды',
    s5: '5 звёзд',
}

export default function Calculator() {
    const [stars, setStars] = useState<Record<StarKey, string>>({
        s1: '', s2: '', s3: '', s4: '', s5: '',
    })
    const [targetOption, setTargetOption] = useState('')
    const [customTarget, setCustomTarget] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [calculated, setCalculated] = useState(false)

    // ── Парсинг введённых значений ──────────────────────────────────────────

    const n = useMemo<Record<StarKey, number>>(() => ({
        s1: Math.max(0, parseInt(stars.s1) || 0),
        s2: Math.max(0, parseInt(stars.s2) || 0),
        s3: Math.max(0, parseInt(stars.s3) || 0),
        s4: Math.max(0, parseInt(stars.s4) || 0),
        s5: Math.max(0, parseInt(stars.s5) || 0),
    }), [stars])

    const totalCount = n.s1 + n.s2 + n.s3 + n.s4 + n.s5

    const targetRating = useMemo<number | null>(() => {
        if (!targetOption) return null
        if (targetOption === 'custom') {
            const val = parseFloat(customTarget.replace(',', '.'))
            if (isNaN(val)) return null
            return Math.min(5, Math.max(1.1, val))
        }
        return parseFloat(targetOption)
    }, [targetOption, customTarget])

    // ── Текущий рейтинг ──────────────────────────────────────────────────────

    const currentRating = useMemo(
        () => calcCurrentRating(n.s1, n.s2, n.s3, n.s4, n.s5),
        [n]
    )

    // ── Блок 4: сколько убрать ───────────────────────────────────────────────

    const removals = useMemo(() => {
        if (!targetRating || totalCount === 0) return { r1: 0, r2: 0, r3: 0, reachable: false }
        return calcRemovalsNeeded(n.s1, n.s2, n.s3, n.s4, n.s5, targetRating)
    }, [n, targetRating, totalCount])

    const alreadyAtTarget = targetRating !== null && totalCount > 0 && currentRating >= targetRating

    // ── Блок 5: Reputa ───────────────────────────────────────────────────────

    const totalNegatives = n.s1 + n.s2 + n.s3
    const canRemoveReputa = Math.round(totalNegatives * 0.6)

    // Пропорциональное распределение удаляемых по звёздам (для расчёта итогового рейтинга)
    const r1reputa = Math.round(n.s1 * 0.6)
    const r2reputa = Math.round(n.s2 * 0.6)
    const r3reputa = Math.round(n.s3 * 0.6)

    const pricePerReview = getPricePerReview(totalNegatives)
    const costReputa = canRemoveReputa * pricePerReview

    const finalRatingReputa = useMemo(() => {
        return calcCurrentRating(
            n.s1 - r1reputa,
            n.s2 - r2reputa,
            n.s3 - r3reputa,
            n.s4,
            n.s5,
        )
    }, [n, r1reputa, r2reputa, r3reputa])

    // ── Блок 6: выкупы ───────────────────────────────────────────────────────

    const totalBuyoutsNeeded =
        n.s1 * BUYOUT_COEF[1] +
        n.s2 * BUYOUT_COEF[2] +
        n.s3 * BUYOUT_COEF[3] +
        n.s4 * BUYOUT_COEF[4]
    const costBuyouts = totalBuyoutsNeeded * BUYOUT_PRICE

    const finalRatingBuyout = useMemo(() => {
        if (totalCount === 0) return 0
        const currentSum = n.s1 * 1 + n.s2 * 2 + n.s3 * 3 + n.s4 * 4 + n.s5 * 5
        return (currentSum + 5 * totalBuyoutsNeeded) / (totalCount + totalBuyoutsNeeded)
    }, [n, totalCount, totalBuyoutsNeeded])

    // ── Handlers ─────────────────────────────────────────────────────────────

    const canCalculate = totalCount > 0 && targetRating !== null

    function handleStarChange(key: StarKey, value: string) {
        setStars(prev => ({ ...prev, [key]: value }))
        setCalculated(false)
    }

    function handleTargetChange(val: string) {
        setTargetOption(val)
        setCalculated(false)
    }

    // ── Render ───────────────────────────────────────────────────────────────

    return (
        <div className={s.page}>
            {showModal && <InstructionModal onClose={() => setShowModal(false)} />}

            <div className={s.section}>

                {/* ── Шапка ─────────────────────────────────────────────────────── */}
                <div className={s.header}>
                    <div className={s.tag}>Бесплатный инструмент</div>
                    <h1 className={s.title}>Калькулятор рейтинга<br />на Wildberries</h1>
                    <p className={s.subtitle}>
                        Введите данные вашей карточки — калькулятор покажет текущий рейтинг,
                        что нужно сделать для его роста и сколько это стоит
                    </p>
                    <button className={s.instructionBtn} onClick={() => setShowModal(true)}>
                        <span className={s.questionMark}>?</span>
                        Как посмотреть оценки на ВБ?
                    </button>
                </div>

                {/* ── Ввод оценок ───────────────────────────────────────────────── */}
                <div className={s.card}>
                    <h2 className={s.cardTitle}>Введите количество оценок вашей карточки</h2>
                    <div className={s.inputsGrid}>
                        {(['s5', 's4', 's3', 's2', 's1'] as StarKey[]).map((key, i) => (
                            <div key={key} className={s.inputRow}>
                                <div className={s.inputRowLabel}>
                                    <span className={s.starsDisplay}>
                                        <Stars filled={5 - i} />
                                    </span>
                                    <span className={s.inputLabelText}>{STAR_LABELS[key]}</span>
                                </div>
                                <input
                                    type="number"
                                    min={0}
                                    value={stars[key]}
                                    onChange={e => handleStarChange(key, e.target.value)}
                                    placeholder="0"
                                    className={s.input}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Текущий рейтинг (показываем сразу) */}
                    {totalCount > 0 && (
                        <div className={s.currentRating}>
                            <span className={s.currentLabel}>Текущий рейтинг:</span>
                            <span className={s.currentValue}>{formatRating(currentRating)}</span>
                            <span className={s.currentStars}>
                                {'★'.repeat(Math.round(currentRating))}
                                {'☆'.repeat(5 - Math.round(currentRating))}
                            </span>
                            <span className={s.currentTotal}>
                                {totalCount.toLocaleString('ru-RU')}{' '}
                                {plural(totalCount, 'оценка', 'оценки', 'оценок')}
                            </span>
                        </div>
                    )}
                </div>

                {/* ── Целевой рейтинг ───────────────────────────────────────────── */}
                <div className={s.card}>
                    <h2 className={s.cardTitle}>На какой рейтинг хотите выйти?</h2>
                    <div className={s.targetOptions}>
                        {TARGET_PRESETS.map(opt => (
                            <button
                                key={opt.value}
                                className={`${s.targetBtn} ${targetOption === opt.value ? s.targetBtnActive : ''}`}
                                onClick={() => handleTargetChange(opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                    {targetOption === 'custom' && (
                        <div className={s.customInputWrap}>
                            <input
                                type="text"
                                className={`${s.input} ${s.customInput}`}
                                placeholder="Например: 4,75"
                                value={customTarget}
                                onChange={e => {
                                    setCustomTarget(e.target.value)
                                    setCalculated(false)
                                }}
                                autoFocus
                            />
                        </div>
                    )}
                </div>

                {/* ── Кнопка расчёта ────────────────────────────────────────────── */}
                <button
                    className={s.submitBtn}
                    onClick={() => canCalculate && setCalculated(true)}
                    disabled={!canCalculate}
                >
                    Рассчитать
                </button>

                {/* ═══════════════════════ РЕЗУЛЬТАТЫ ═══════════════════════════ */}
                {calculated && (
                    <>
                        {/* ── Блок 4: что нужно убрать ───────────────────────────── */}
                        {alreadyAtTarget ? (
                            <div className={`${s.card} ${s.successCard}`}>
                                <div className={s.successIcon}>🎉</div>
                                <h3 className={s.successTitle}>Ваш рейтинг уже достигает цели!</h3>
                                <p className={s.successText}>
                                    Текущий рейтинг {formatRating(currentRating)} ≥ цели {targetRating?.toString().replace('.', ',')}
                                </p>
                            </div>
                        ) : (
                            <div className={s.card}>
                                <h2 className={s.cardTitle}>
                                    Для выхода на рейтинг{' '}
                                    {targetRating?.toString().replace('.', ',')} вам необходимо убрать примерно:
                                </h2>
                                <div className={s.removalsList}>
                                    {removals.r1 > 0 && (
                                        <div className={`${s.removalRow} ${s.removalRow1}`}>
                                            <span className={s.removalStars}><Stars filled={1} /></span>
                                            <span className={s.removalCount}>{removals.r1}</span>
                                            <span className={s.removalLabel}>
                                                {plural(removals.r1, 'оценку', 'оценки', 'оценок')} 1★
                                            </span>
                                        </div>
                                    )}
                                    {removals.r2 > 0 && (
                                        <div className={`${s.removalRow} ${s.removalRow2}`}>
                                            <span className={s.removalStars}><Stars filled={2} /></span>
                                            <span className={s.removalCount}>{removals.r2}</span>
                                            <span className={s.removalLabel}>
                                                {plural(removals.r2, 'оценку', 'оценки', 'оценок')} 2★
                                            </span>
                                        </div>
                                    )}
                                    {removals.r3 > 0 && (
                                        <div className={`${s.removalRow} ${s.removalRow3}`}>
                                            <span className={s.removalStars}><Stars filled={3} /></span>
                                            <span className={s.removalCount}>{removals.r3}</span>
                                            <span className={s.removalLabel}>
                                                {plural(removals.r3, 'оценку', 'оценки', 'оценок')} 3★
                                            </span>
                                        </div>
                                    )}
                                    {removals.r1 === 0 && removals.r2 === 0 && removals.r3 === 0 && (
                                        <p className={s.noRemovals}>
                                            Даже удалив все отзывы 1–3★, цель недостижима только через удаление.
                                            Рекомендуем комбинировать удаление с наработкой новых положительных отзывов.
                                        </p>
                                    )}
                                    {!removals.reachable && (removals.r1 > 0 || removals.r2 > 0 || removals.r3 > 0) && (
                                        <p className={s.noRemovals} style={{ marginTop: 8 }}>
                                            ⚠️ Только за счёт удаления этих отзывов целевой рейтинг недостижим.
                                            Дополнительно потребуются новые отзывы на 5★.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ── Блок 5: Reputa ────────────────────────────────────────── */}
                        {totalNegatives > 0 && (
                            <div className={`${s.card} ${s.reputaCard}`}>
                                <div className={s.cardBadge}>С Reputa</div>
                                <h2 className={s.cardTitle}>Сколько отзывов можно убрать с Reputa</h2>

                                <div className={s.reputaStats}>
                                    <div className={s.reputaStat}>
                                        <span className={`${s.reputaBig} ${s.reputaBigBlue}`}>
                                            {canRemoveReputa}
                                        </span>
                                        <span className={s.reputaDesc}>отзывов уберём</span>
                                        <span className={s.reputaHint}>конверсия ~60%</span>
                                    </div>
                                    <div className={s.reputaStat}>
                                        <span className={s.reputaBig}>
                                            {totalCount > 0 ? formatRating(finalRatingReputa) : '—'}
                                        </span>
                                        <span className={s.reputaDesc}>рейтинг после работы</span>
                                    </div>
                                    <div className={s.reputaStat}>
                                        <span className={`${s.reputaBig} ${s.reputaBigBlue}`}>
                                            {formatMoney(costReputa)}
                                        </span>
                                        <span className={s.reputaDesc}>ориентировочная стоимость</span>
                                        <span className={s.reputaHint}>
                                            {pricePerReview.toLocaleString('ru-RU')} ₽ за отзыв
                                        </span>
                                    </div>
                                </div>

                                <p className={s.reputaExample}>
                                    С помощью Reputa вы сможете убрать примерно{' '}
                                    <b>{canRemoveReputa}</b>{' '}
                                    {plural(canRemoveReputa, 'негативный отзыв', 'негативных отзыва', 'негативных отзывов')}.
                                </p>
                                <p className={s.priceNote}>
                                    Стоимость рассчитана под работу над тем объёмом отзывов, которые вы указали.
                                    Если вас интересует работа с большим объёмом отзывов, можем обсудить индивидуальные условия.
                                </p>
                            </div>
                        )}

                        {/* ── Блок 6: выкупы ───────────────────────────────────────── */}
                        <div className={s.card}>
                            <div className={`${s.cardBadge} ${s.cardBadgeGray}`}>Альтернатива</div>
                            <h2 className={s.cardTitle}>Сколько потребуется выкупов для роста рейтинга</h2>

                            <div className={s.buyoutBreakdown}>
                                {n.s1 > 0 && (
                                    <div className={s.buyoutRow}>
                                        <span className={s.buyoutStars}><Stars filled={1} /></span>
                                        <span>
                                            {n.s1.toLocaleString('ru-RU')} × {BUYOUT_COEF[1]} ={' '}
                                            <b>{(n.s1 * BUYOUT_COEF[1]).toLocaleString('ru-RU')}</b>{' '}
                                            {plural(n.s1 * BUYOUT_COEF[1], 'выкуп', 'выкупа', 'выкупов')} на 5★
                                        </span>
                                    </div>
                                )}
                                {n.s2 > 0 && (
                                    <div className={s.buyoutRow}>
                                        <span className={s.buyoutStars}><Stars filled={2} /></span>
                                        <span>
                                            {n.s2.toLocaleString('ru-RU')} × {BUYOUT_COEF[2]} ={' '}
                                            <b>{(n.s2 * BUYOUT_COEF[2]).toLocaleString('ru-RU')}</b>{' '}
                                            {plural(n.s2 * BUYOUT_COEF[2], 'выкуп', 'выкупа', 'выкупов')} на 5★
                                        </span>
                                    </div>
                                )}
                                {n.s3 > 0 && (
                                    <div className={s.buyoutRow}>
                                        <span className={s.buyoutStars}><Stars filled={3} /></span>
                                        <span>
                                            {n.s3.toLocaleString('ru-RU')} × {BUYOUT_COEF[3]} ={' '}
                                            <b>{(n.s3 * BUYOUT_COEF[3]).toLocaleString('ru-RU')}</b>{' '}
                                            {plural(n.s3 * BUYOUT_COEF[3], 'выкуп', 'выкупа', 'выкупов')} на 5★
                                        </span>
                                    </div>
                                )}
                                {n.s4 > 0 && (
                                    <div className={s.buyoutRow}>
                                        <span className={s.buyoutStars}><Stars filled={4} /></span>
                                        <span>
                                            {n.s4.toLocaleString('ru-RU')} × {BUYOUT_COEF[4]} ={' '}
                                            <b>{(n.s4 * BUYOUT_COEF[4]).toLocaleString('ru-RU')}</b>{' '}
                                            {plural(n.s4 * BUYOUT_COEF[4], 'выкуп', 'выкупа', 'выкупов')} на 5★
                                        </span>
                                    </div>
                                )}
                                {totalBuyoutsNeeded === 0 && (
                                    <p className={s.noRemovals}>Нет отзывов 1–4★ — выкупы не требуются.</p>
                                )}
                            </div>

                            {totalBuyoutsNeeded > 0 && (
                                <div className={s.buyoutTotal}>
                                    <span>
                                        Итого выкупов:{' '}
                                        <b>{totalBuyoutsNeeded.toLocaleString('ru-RU')}</b>
                                    </span>
                                    <span>
                                        Стоимость:{' '}
                                        <b>{formatMoney(costBuyouts)}</b>
                                    </span>
                                    <span className={s.buyoutHint}>
                                        {BUYOUT_PRICE.toLocaleString('ru-RU')} ₽ за выкуп
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* ── Блок 7: визуальное сравнение ─────────────────────────── */}
                        {totalNegatives > 0 && totalBuyoutsNeeded > 0 && (
                            <>
                                <h2 className={s.comparisonTitle}>Сравнение вариантов</h2>
                                <div className={s.comparisonGrid}>

                                    {/* Вариант 1 — Reputa */}
                                    <div className={`${s.compareCard} ${s.compareCardReputa}`}>
                                        <div className={s.compareBadge}>Вариант 1</div>
                                        <h3 className={s.compareTitle}>
                                            Удаление отзывов<br />через Reputa
                                        </h3>
                                        <div className={s.compareStat}>
                                            <span className={s.compareNum}>{canRemoveReputa}</span>
                                            <span className={s.compareDesc}>
                                                {plural(canRemoveReputa, 'отзыв удалим', 'отзыва удалим', 'отзывов удалим')}
                                            </span>
                                        </div>
                                        <div className={s.compareStat}>
                                            <span className={s.compareNum}>{formatRating(finalRatingReputa)}</span>
                                            <span className={s.compareDesc}>итоговый рейтинг</span>
                                        </div>
                                        <div className={s.comparePriceBlock}>
                                            <span className={s.comparePrice}>{formatMoney(costReputa)}</span>
                                        </div>
                                        <div className={s.comparePoints}>
                                            <span className={s.comparePointGood}>✓ Реальное снижение негатива</span>
                                            <span className={s.comparePointGood}>✓ Без риска блокировок</span>
                                            <span className={s.comparePointGood}>✓ Результат за 2–4 недели</span>
                                        </div>
                                    </div>

                                    {/* Вариант 2 — выкупы */}
                                    <div className={`${s.compareCard} ${s.compareCardBuyout}`}>
                                        <div className={`${s.compareBadge} ${s.compareBadgeGray}`}>Вариант 2</div>
                                        <h3 className={s.compareTitle}>
                                            Перекрытие<br />выкупами
                                        </h3>
                                        <div className={s.compareStat}>
                                            <span className={s.compareNum}>
                                                {totalBuyoutsNeeded.toLocaleString('ru-RU')}
                                            </span>
                                            <span className={s.compareDesc}>
                                                {plural(totalBuyoutsNeeded, 'выкуп нужен', 'выкупа нужно', 'выкупов нужно')}
                                            </span>
                                        </div>
                                        <div className={s.compareStat}>
                                            <span className={s.compareNum}>{formatRating(finalRatingBuyout)}</span>
                                            <span className={s.compareDesc}>итоговый рейтинг</span>
                                        </div>
                                        <div className={`${s.comparePriceBlock} ${s.comparePriceBlockExpensive}`}>
                                            <span className={s.comparePrice}>{formatMoney(costBuyouts)}</span>
                                            {costBuyouts > costReputa && costReputa > 0 && (
                                                <span className={s.compareOverprice}>
                                                    в {(costBuyouts / costReputa).toFixed(1)}× дороже
                                                </span>
                                            )}
                                        </div>
                                        <div className={s.comparePoints}>
                                            <span className={s.comparePointBad}>✗ Риск блокировки аккаунта</span>
                                            <span className={s.comparePointBad}>✗ Тысячи выкупов, месяцы работы</span>
                                            <span className={s.comparePointBad}>✗ Значительно дороже</span>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}

                        {/* ── CTA ───────────────────────────────────────────────────── */}
                        <div className={s.cta}>
                            <h2 className={s.ctaTitle}>Хотите убрать негативные отзывы?</h2>
                            <p className={s.ctaText}>
                                Наш менеджер проанализирует вашу карточку и предложит оптимальный план
                            </p>
                            <a
                                href={ROUTES.social.telegramManager}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={s.ctaBtn}
                            >
                                ✈ Написать менеджеру
                            </a>
                        </div>

                    </>
                )}

            </div>
        </div>
    )
}
