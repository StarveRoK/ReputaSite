import style from '@/styles/block_13.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = 'Удаляем и исправляем<blue> до 90% негативных отзывов</blue>'
const LIST_ITEMS = [
    'Для селлеров WB и OZON',
    'С оплатой за результат',
    'Без нарушения оферты',
    'Первые результаты в течении 48 часов',
]
const CTA_HREF = 'https://t.me/reputamp'
const CTA_LABEL = 'Оставить заявку'
const IMAGE = { src: '/images/Block13.png', alt: 'Block13' }

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock13featuresBlue}>{c}</span>
    ),
}

export default function Block13() {
    return (
        <section className={style.cstBlock13section}>
            <ForSellerButton hasStar={true}>{SELLER_BADGE}</ForSellerButton>

            <span className={style.cstBlock13features}>
                {rich(TITLE, titleTags)}
            </span>

            <span className={style.cstBlock13features2}>
                <ul>
                    {LIST_ITEMS.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </span>

            <BlueButton href={CTA_HREF}>{CTA_LABEL}</BlueButton>

            <div className={style.cstBlock13bigImage}>
                <img src={IMAGE.src} alt={IMAGE.alt}/>
            </div>
        </section>
    )
}
