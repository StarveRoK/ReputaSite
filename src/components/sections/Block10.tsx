import style from '@/styles/block_10.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = 'ИИ-ответы на отзывы и вопросы<blue> которые увеличивают  продажи</blue>'
const SUBTITLE = 'Отвечает за 1 секунду: закрывает вопросы покупателей, отрабатывает негатив и рекомендует ваши товары в положительных отзывах без участия менеджера'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Оставить заявку'
const IMAGE = { src: '/images/Block10.png', alt: 'Block10' }

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock10featuresBlue}>{c}</span>
    ),
}

export default function Block10() {
    return (
        <section className={style.cstBlock10section}>
            <ForSellerButton hasStar={true}>{SELLER_BADGE}</ForSellerButton>

            <span className={style.cstBlock10features}>
                {rich(TITLE, titleTags)}
            </span>

            <span className={style.cstBlock10features2}>
                {rich(SUBTITLE)}
            </span>

            <BlueButton href={CTA_HREF}>{CTA_LABEL}</BlueButton>

            <div className={style.cstBlock10bigImage}>
                <img src={IMAGE.src} alt={IMAGE.alt}/>
            </div>
        </section>
    )
}
