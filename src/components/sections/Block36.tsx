import style from '@/styles/block_36.module.css'
import { rich } from '@/lib/richText'

const TITLE = 'Почему селлеры<blue>выбирают REPUTA?</blue>'

const CARDS = [
    '<blue>Официальная работа </blue>по договору',
    'Подключение<blue>через API</blue>',
    'Собственные<blue> AI- и IT-разработки</blue>',
    '<blue>Автоматизация</blue>работыс покупателями',
    '<blue>Постоянное развитие  платформы </blue> и новых инструментов',
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock36titleBlue}>{c}</span>
    ),
}

const cardTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock36cardBlue}>{c}</span>
    ),
}

export default function Block36() {
    return (
        <section className={style.cstBlock36section}>
            <div className={style.cstBlock36title}>
                {rich(TITLE, titleTags)}
            </div>
            <div className={style.cstBlock36container}>
                {CARDS.map((card, i) => (
                    <div key={i} className={style.cstBlock36card}>
                        {rich(card, cardTags)}
                    </div>
                ))}
            </div>
        </section>
    )
}
