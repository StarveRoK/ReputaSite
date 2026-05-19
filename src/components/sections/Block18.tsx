import style from '@/styles/block_18.module.css'
import Block18svg1 from "@/components/ui/Block18svg1"
import { rich } from '@/lib/richText'

const TITLE = 'Когда нужно <blue> работать <br />с негативными отзывами?</blue>'
const FOOTER_TEXT = 'Сигналы, которые показывают, что репутация товара уже влияет на продажи'
const IMAGE = { src: '/images/Block18Img1.png', alt: 'Block18Img1' }

const LIST_ITEMS = [
    'В последних топ-20/30 отзывах есть негатив',
    'Рейтинг карточки ниже 4.7',
    'Рейтинг вашего товара ниже, чем у конкурентов в нише',
    'Проседает конверсия в заказ',
    'Негативные отзывы попадают в "важное из отзывов" и влияют на восприятие товара',
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock18featuresBlue}>{c}</span>
    ),
}

export default function Block18() {
    return (
        <section className={style.cstBlock18section}>
            <span className={style.cstBlock18features}>
                {rich(TITLE, titleTags)}
            </span>

            <div className={style.cstBlock18list}>
                {LIST_ITEMS.map((item, i) => (
                    <div key={i} className={style.cstBlock18row}>
                        <div className={style.cstBlock18colIcon}>
                            <Block18svg1/>
                        </div>
                        <div className={style.cstBlock18colText}>
                            {rich(item)}
                        </div>
                    </div>
                ))}
            </div>

            <span className={style.cstBlock18description}>
                {rich(FOOTER_TEXT)}
            </span>

            <div className={style.cstBlock18bigImage}>
                <img src={IMAGE.src} alt={IMAGE.alt}/>
            </div>
        </section>
    )
}
