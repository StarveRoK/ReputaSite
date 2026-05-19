import style from '@/styles/block_27.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = '<blue>Все чаты с покупателями в одном месте</blue>— без задержек и потерь'
const SUBTITLE = 'Единый интерфейс, мгновенная загрузка и уведомления, если вы не ответили в течение 5 минут — ни один клиент не останется без ответа'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'
const IMAGE = { src: '/images/Block27.png', alt: 'Block27' }

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock27featuresBlue}>{c}</span>
    ),
}

export default function Block27() {
    return (
        <section className={style.cstBlock27section}>
            <ForSellerButton hasStar={true}>{SELLER_BADGE}</ForSellerButton>

            <span className={style.cstBlock27features}>
                {rich(TITLE, titleTags)}
            </span>

            <span className={style.cstBlock27features2}>
                {rich(SUBTITLE)}
            </span>

            <BlueButton href={CTA_HREF} label={CTA_LABEL}/>

            <div className={style.cstBlock27bigImage}>
                <img src={IMAGE.src} alt={IMAGE.alt} />
            </div>
        </section>
    )
}
