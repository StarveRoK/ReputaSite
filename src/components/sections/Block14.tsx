import style from '@/styles/block_14.module.css'
import { rich } from '@/lib/richText'

const TITLE = 'Возвращаем <blue> доверие</blue> покупателя и <blue> рост продаж</blue>'

const CARDS = [
    { text: 'Превращаем4 звезды<blue>→ в 5 звезд</blue>' },
    { text: 'Убираем <blue> до 90%негативных отзывов</blue>' },
    { text: 'Повышаемрейтинг карточек<blue>до 4.9-5.0</blue>' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock14titleBlue}>{c}</span>
    ),
}

const cardTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock14cardDescriptionBlue}>{c}</span>
    ),
}

export default function Block14() {
    return (
        <section className={style.cstBlock14section}>
            <div className={style.cstBlock14title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock14cardContainer}>
                {CARDS.map((card, i) => (
                    <div key={i} className={style.cstBlock14card}>
                        <div className={style.cstBlock14cardDescription}>
                            {rich(card.text, cardTags)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
