import style from '@/styles/block_32.module.css'
import Block32svg1 from "@/components/ui/Block32svg1"
import { rich } from '@/lib/richText'

const HISTORY_TITLE = '<blue>Как появилась</blue> REPUTA?'
const HISTORY_PARAGRAPHS = [
    'Направление по автоматизации работы с отзывами мы развиваем с 2023 года. Долгое время система была доступна только ограниченному кругу селлеров и распространялась по рекомендациям',
    'В 2025 году мы начали развивать направление репутационного менеджмента и сегодня объединяем экспертизу Reputa  и собственные IT-разработки в единую платформу для роста продаж и репутации на маркетплейсах',
    'Наша цель — помогать селлерам выстраивать системную работу с покупателями в условиях высокой конкуренции  и постоянных изменений рынка',
]

const MISSION_TITLE = '<blue>Миссия</blue> REPUTA'
const MISSION_PARAGRAPHS = [
    'Создавая Reputa, мы изначально смотрели шире рынка маркетплейсов',
    'Наша цель — сделать репутационный менеджмент и системную работу с покупателями важной частью современного бизнеса: от маркетплейсов до международных компаний и брендов',
]

const RIGHT_IMAGE = { src: '/images/Block9.png', alt: 'block9' }
const RIGHT_QUOTE = 'Сейчас мы развиваем AI-инструменты и автоматизацию для маркетплейсов'
const RIGHT_OUTLOOK = 'А в будущем планируем масштабировать платформу на международный рынок и другие сферы бизнеса, где репутация и коммуникация напрямую влияют на продажи.'

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock32titleBlue}>{c}</span>
    ),
}

export default function Block32() {
    return (
        <section className={style.cstBlock32section}>
            <div className={style.cstBlock32left}>
                <div className={style.cstBlock32leftTop}>
                    <div className={style.cstBlock32title}>
                        {rich(HISTORY_TITLE, titleTags)}
                    </div>
                    {HISTORY_PARAGRAPHS.map((p, i) => (
                        <span key={i} className={style.cstBlock32description}>{p}</span>
                    ))}
                </div>
                <div className={style.cstBlock32leftBot}>
                    <div className={style.cstBlock32title}>
                        {rich(MISSION_TITLE, titleTags)}
                    </div>
                    {MISSION_PARAGRAPHS.map((p, i) => (
                        <span
                            key={i}
                            className={`${style.cstBlock32description}${i === MISSION_PARAGRAPHS.length - 1 ? ` ${style.cstBlock32noMargin}` : ''}`}
                        >
                            {p}
                        </span>
                    ))}
                </div>
            </div>
            <div className={style.cstBlock32right}>
                <div className={style.cstBlock32rightTop}>
                    <img src={RIGHT_IMAGE.src} alt={RIGHT_IMAGE.alt}/>
                </div>
                <div className={style.cstBlock32rightBot}>
                    <div className={style.cstBlock32icon}>
                        <Block32svg1/>
                    </div>
                    <span className={style.cstBlock32description}>{RIGHT_QUOTE}</span>
                    <span className={`${style.cstBlock32description} ${style.cstBlock32noMargin}`}>{RIGHT_OUTLOOK}</span>
                </div>
            </div>
        </section>
    )
}
