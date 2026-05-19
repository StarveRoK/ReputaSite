import style from '@/styles/block_17.module.css'
import Block17svg1 from "@/components/ui/Block17svg1"
import Block17svg2 from "@/components/ui/Block17svg2"
import Block17svg3 from "@/components/ui/Block17svg3"
import { rich } from '@/lib/richText'

const TITLE = 'Почему REPUTA — <blue> это безопасно?</blue>'
const TRUST_BADGE = '<b>700+ селлеров</b>\nдоверяют нам'

const CARDS = [
    {
        Icon: Block17svg1,
        title: 'Работа строго<blue> в рамках <br/></blue>правил маркетплейса',
        description: 'Решаем вопросы через диалог <br/>с покупателем и юридическое <br/>обращения в поддержку',
    },
    {
        Icon: Block17svg2,
        title: 'Опыт на<blue> 550+ <br/></blue>кабинетах',
        description: 'Отработанные алгоритмы <br/>и скрипты на 350 000+ <br/>негативных отзывов',
    },
    {
        Icon: Block17svg3,
        title: 'Работает <br /><blue>по договору</blue>',
        description: 'Оплата по факту выполненной <br />работы, все договоренности <br />закреплены юридически',
        hasBadge: true,
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock17titleBlue}>{c}</span>
    ),
}

const cardTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock17cardTitleBlue}>{c}</span>
    ),
}

export default function Block17() {
    return (
        <section className={style.cstBlock17section}>
            <div className={style.cstBlock17title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock17cardContainer}>
                {CARDS.map((card) => {
                    const cardEl = (
                        <div key={card.title} className={style.cstBlock17card}>
                            <div className={style.cstBlock17cardImage}>
                                <card.Icon />
                            </div>
                            <div className={style.cstBlock17cardTitle}>
                                {rich(card.title, cardTitleTags)}
                            </div>
                            <div className={style.cstBlock17cardDescription}>
                                {rich(card.description)}
                            </div>
                        </div>
                    )
                    if (card.hasBadge) {
                        return (
                            <div key={card.title} className={style.cstBlock17cardWithBtn}>
                                {cardEl}
                                <div className={style.cstBlock17cardButton}>
                                    {rich(TRUST_BADGE)}
                                </div>
                            </div>
                        )
                    }
                    return cardEl
                })}
            </div>
        </section>
    )
}
