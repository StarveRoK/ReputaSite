import style from '@/styles/block_26.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Начните работать со своей <b>базой покупателей</b>'
const TITLE = '<blue>Запустите первую рассылку бесплатно</blue> <br/>и начните делать повторные<br/>продажи <blue>без дополнительных<br/>затрат на рекламу</blue>'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock26featuresBlue}>{c}</span>
    ),
}

export default function Block26() {
    return (
        <section className={style.cstBlock26section}>
            <ForSellerButton hasStar={true}>{rich(SELLER_BADGE)}</ForSellerButton>
            <span className={style.cstBlock26features}>
                {rich(TITLE, titleTags)}
            </span>

            <BlueButton href={CTA_HREF} label={CTA_LABEL}/>
        </section>
    )
}
