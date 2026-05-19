import style from '@/styles/block_15.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import { rich } from '@/lib/richText'

const TITLE = 'Как работа с рейтингом и отзывами <blue> влияет на продажи</blue>'
const CTA_HREF = '#'
const CTA_LABEL = 'Повысить рейтинг'

const CARDS = [
    {
        imageSrc: '/images/Block15Img1.png',
        imageAlt: 'Block15Img1',
        title: '<blue>До +70%</blue>к продажам',
        description: 'По нашим кейсам улучшение рейтинга и отзывов может давать рост продаж до 70% за счёт CTR воронки продаж карточки',
    },
    {
        imageSrc: '/images/Block15Img2.png',
        imageAlt: 'Block15Img2',
        title: '+ 0,1 балла рейтинга <blue> влияетна всю воронку</blue>',
        description: 'По нашим кейсам улучшение рейтинга и отзывов может давать рост продаж до 70% за счёт CTR воронки продаж карточки',
    },
    {
        imageSrc: '/images/Block15Img3.png',
        imageAlt: 'Block15Img3',
        title: '<blue>До +40%</blue> к выбору товара при равных условиях',
        description: 'По нашим наблюдениям, при схожей цене, сроках доставки и характеристиках покупатели чаще выбирают товар с более высоким рейтингом',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock15titleBlue}>{c}</span>
    ),
}

const cardTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock15cardTitleBlue}>{c}</span>
    ),
}

export default function Block15() {
    return (
        <section className={style.cstBlock15section}>
            <div className={style.cstBlock15title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock15cardContainer}>
                {CARDS.map((card) => (
                    <div key={card.imageAlt} className={style.cstBlock15card}>
                        <div className={style.cstBlock15cardImage}>
                            <img src={card.imageSrc} alt={card.imageAlt}/>
                        </div>
                        <div className={style.cstBlock15cardTitle}>
                            {rich(card.title, cardTitleTags)}
                        </div>
                        <div className={style.cstBlock15cardDescription}>
                            {rich(card.description)}
                        </div>
                    </div>
                ))}
            </div>
            <BlueButton href={CTA_HREF}>{CTA_LABEL}</BlueButton>
        </section>
    )
}
