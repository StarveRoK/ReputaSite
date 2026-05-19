import style from '@/styles/block_22.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = '<blue> Возвращайте <br/> до 40% покупателей</blue> <br />через рассылки <br/>по вашей базе'
const SUBTITLE = 'Сообщайте о скидках, новинках и акциях <br/>клиентам Wildberries и Ozon и увеличивайте <br/>повторные продажи без дополнительных <br/>затрат на рекламу'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'
const IMAGE = { src: '/images/Block22.png', alt: 'Block22' }

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock22featuresBlue}>{c}</span>
    ),
}

export default function Block22() {
    return (
        <section className={style.cstBlock22section}>
            <ForSellerButton hasStar={true}>{SELLER_BADGE}</ForSellerButton>

            <span className={style.cstBlock22features}>
                {rich(TITLE, titleTags)}
            </span>

            <span className={style.cstBlock22features2}>
                {rich(SUBTITLE)}
            </span>

            <BlueButton href={CTA_HREF} label={CTA_LABEL}/>

            <div className={style.cstBlock22bigImage}>
                <img src={IMAGE.src} alt={IMAGE.alt} />
            </div>
        </section>
    )
}
