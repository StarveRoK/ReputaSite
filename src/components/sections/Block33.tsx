import style from '@/styles/block_33.module.css'
import Block33svg1 from "@/components/ui/Block33svg1"
import { rich } from '@/lib/richText'

const TAG_LABEL = 'Где мы <b>находимся?</b>'
const TITLE = '<blue>Офис REPUTA</blue> в Москве'
const DESCRIPTION = 'Работаем с селлерами по всей России из офиса в Москве <br/>и развиваем экосистему для клиентов Reputa'
const SUB_DESCRIPTION = 'Проводим закрытые мероприятия<br/><blue>для клиентов Reputa:</blue>'

const EVENTS = [
    { title: 'Мастермайнды', imageSrc: '/images/Block33Img1.png', imageAlt: 'Block33Img1.png' },
    { title: 'Знакомства <br/>для селлеров', imageSrc: '/images/Block33Img2.png', imageAlt: 'Block33Img2.png' },
    { title: 'Выступления <br/>экспертов и спикеров', imageSrc: '/images/Block33Img3.png', imageAlt: 'Block33Img3.png' },
    { title: 'Внутренние встречи<br/>сообщества', imageSrc: '/images/Block33Img4.png', imageAlt: 'Block33Img4.png' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock33titleBlue}>{c}</span>
    ),
}

const subDescriptionTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock33subDescriptionBlue}>{c}</span>
    ),
}

export default function Block33() {
    return (
        <section className={style.cstBlock33section}>
            <div className={style.cstBlock33ownManager}>
                {rich(TAG_LABEL)}
            </div>
            <div className={style.cstBlock33title}>
                {rich(TITLE, titleTags)}
            </div>
            <div className={style.cstBlock33description}>
                {rich(DESCRIPTION)}
            </div>
            <div className={style.cstBlock33subDescription}>
                {rich(SUB_DESCRIPTION, subDescriptionTags)}
            </div>
            <div className={style.cstBlock33cardContainer}>
                {EVENTS.map((event) => (
                    <div key={event.imageAlt} className={style.cstBlock33card}>
                        <div className={style.cstBlock33cardTop}>
                            <div className={style.cstBlock33cardTopIcon}>
                                <Block33svg1/>
                            </div>
                            <div className={style.cstBlock33cardTopText}>
                                {rich(event.title)}
                            </div>
                        </div>
                        <div className={style.cstBlock33cardBot}>
                            <img src={event.imageSrc} alt={event.imageAlt}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
