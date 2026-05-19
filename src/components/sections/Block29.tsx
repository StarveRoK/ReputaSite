import style from '@/styles/block_29.module.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton"
import { rich } from '@/lib/richText'

const TITLE = '<b>Не теряйте клиентов</b> из-за пропущенных чатов'
const DESCRIPTION = 'Оставьте заявку — покажем, как выстроитьработу с чатами и ускорить ответы'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'

export default function Block29() {
    return (
        <section className={style.cstBlock29section}>
            <span className={style.cstBlock29title}>
                {rich(TITLE)}
            </span>
            <span className={style.cstBlock29description}>
                {rich(DESCRIPTION)}
            </span>
            <WhiteButton href={CTA_HREF} hideIcon={true} label={CTA_LABEL}/>
        </section>
    )
}
