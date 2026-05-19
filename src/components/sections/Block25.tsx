import style from '@/styles/block_25.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import Block25svg1 from "@/components/ui/Block25svg1"
import { rich } from '@/lib/richText'

const PRE_TITLE = 'Полная автоматизация рассылок <b>в один клик</b>'
const TITLE = 'Запускайте рассылки по базе покупателей с оценкой 5★, просто нажав кнопку «Отправить»'
const DESCRIPTION = 'От вас нужен только текст сообщения <b>— напишите свой, или адаптируйте готовые шаблоны Reputa</b> под вашу акцию, новинку или повторную продажу'
const IMAGE = { src: '/images/Block25.png', alt: 'Block25' }
const FLOAT_TITLE = 'Ваша рассылка:'
const FLOAT_DESCRIPTION = 'Как насчет зaказать новый набор?'
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Отправить'

export default function Block25() {
    return (
        <section className={style.cstBlock25section}>
            <div className={style.cstBlock25titleContainer}>
                <div className={style.cstBlock25preTitle}>
                    {rich(PRE_TITLE)}
                </div>
                <div className={style.cstBlock25title}>
                    {rich(TITLE)}
                </div>
                <div className={style.cstBlock25description}>
                    {rich(DESCRIPTION)}
                </div>
            </div>

            <div className={style.cstBlock25titleImages}>
                <img src={IMAGE.src} alt={IMAGE.alt}/>
                <div className={style.cstBlock25absContainerIn}>
                    <div className={style.cstBlock25absTop}>
                        <div className={style.cstBlock25absIcon}>
                            <Block25svg1 />
                        </div>
                        <div className={style.cstBlock25absTextContainer}>
                            <span className={style.cstBlock25absTitle}>{FLOAT_TITLE}</span>
                            <span className={style.cstBlock25absDescription}>
                                {rich(FLOAT_DESCRIPTION)}
                            </span>
                        </div>
                    </div>
                    <div className={style.cstBlock25Btn}>
                        <BlueButton href={CTA_HREF}>{CTA_LABEL}</BlueButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
