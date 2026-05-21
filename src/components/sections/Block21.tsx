import style from '@/styles/block_21.module.css'
import Block21svg1 from "@/components/ui/Block21svg1"
import { rich } from '@/lib/richText'

const TITLE = 'От заявки до результата <blue>за 6 шагов</blue>'

const STEPS = [
    { step: 'Шаг 1', text: 'Разбираем ситуацию<blue> на созвоне</blue>', hasArrow: true },
    { step: 'Шаг 2', text: 'Готовим<blue> стратегию и расчёт</blue>', hasArrow: true },
    { step: 'Шаг 3', text: 'Заключаем<blue> договор</blue>', hasArrow: false },
    { step: 'Шаг 4', text: 'Подключаем<blue> работу на кабинете</blue>', hasArrow: true },
    { step: 'Шаг 5', text: 'Обрабатываем<blue> негативные отзывы</blue>', hasArrow: true },
    { step: 'Шаг 6', text: 'Получаем<blue> результат</blue>', hasArrow: false },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock21titleBlue}>{c}</span>
    ),
}

const stepTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock21cardTextBlue}>{c}</span>
    ),
}

export default function Block21() {
    return (
        <section className={style.cstBlock21section}>
            <div className={style.cstBlock21title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock21cardContainer}>
                {STEPS.map((step) => (
                    <div
                        key={step.step}
                        className={`${style.cstBlock21card}${step.hasArrow ? ` ${style.cstBlock21cardArrowRight}` : ''}`}
                    >
                        <div className={style.cstBlock21cardStep}>{step.step}</div>
                        <div className={style.cstBlock21cardText}>
                            {rich(step.text, stepTags)}
                        </div>
                    </div>
                ))}
                <div className={style.cstBlock21cardSvgArrow}>
                    <Block21svg1 />
                </div>
            </div>
        </section>
    )
}
