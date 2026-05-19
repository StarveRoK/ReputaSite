import style from '@/styles/block_37.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = '<blue>1 подписка = полный безлимит</blue> на работу с отзывами, вопросами,чатами и рассылками'
const DESCRIPTION = 'Подключайте все инструменты Reputa в рамках одного тарифа и автоматизируйте коммуникацию с покупателями  без ограничений по объёму'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock37titleBlue}>{c}</span>
    ),
}

export default function Block37() {
    return (
        <section className={style.cstBlock37section}>
            <ForSellerButton hasStar={true}>{SELLER_BADGE}</ForSellerButton>
            <span className={style.cstBlock37title}>
                {rich(TITLE, titleTags)}
            </span>

            <span className={style.cstBlock37descriptions}>
                {rich(DESCRIPTION)}
            </span>

            <BlueButton href={CTA_HREF} label={CTA_LABEL}/>
        </section>
    )
}
