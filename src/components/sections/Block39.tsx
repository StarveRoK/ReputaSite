import style from '@/styles/block_39.module.css'
import Block33svg1 from "@/components/ui/Block33svg1"
import { rich } from '@/lib/richText'

const TAG_LABEL = 'Полная <b>автоматизация</b>'
const TITLE = 'Reputa<blue> экономит <br/> до 95% времени</blue> менеджера'
const DESCRIPTION = '100 отзывов и вопросов<br/>в день <b>— это до 8 часов ручной работы</b>'
const SUB_DESCRIPTION = 'Reputa <blue>автоматически отвечает покупателям <br/> рекомендует товары </blue>и не забывает о допродажах'
const BEFORE_CARDS_TEXT = 'Вместо рутины ваш менеджер занимается<br/>тем, <b>что увеличивает продажи:</b>'

const CARDS = [
    'Улучшает <br/>карточки товаров',
    'Тестирует гипотезы',
    'Оптимизирует рекламу',
    'Анализирует конкурентов',
    'Развивает ассортимент',
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock39titleBlue}>{c}</span>
    ),
}

const subDescriptionTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock39subDescriptionBlue}>{c}</span>
    ),
}

export default function Block39() {
    return (
        <section className={style.cstBlock39section}>
            <div className={style.cstBlock39ownManager}>
                {rich(TAG_LABEL)}
            </div>
            <div className={style.cstBlock39title}>
                {rich(TITLE, titleTags)}
            </div>
            <div className={style.cstBlock39description}>
                {rich(DESCRIPTION)}
            </div>
            <div className={style.cstBlock39subDescription}>
                {rich(SUB_DESCRIPTION, subDescriptionTags)}
            </div>
            <div className={style.cstBlock39description}>
                {rich(BEFORE_CARDS_TEXT)}
            </div>
            <div className={style.cstBlock39cardContainer}>
                {CARDS.map((card, i) => (
                    <div key={i} className={style.cstBlock39card}>
                        <div className={style.cstBlock39cardTop}>
                            <div className={style.cstBlock39cardTopIcon}>
                                <Block33svg1/>
                            </div>
                            <div className={style.cstBlock39cardTopText}>
                                {rich(card)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
