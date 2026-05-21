import style from '@/styles/block_33.module.css'
import Block33svg1 from "@/components/ui/Block33svg1"
import Image from 'next/image'
import { rich } from '@/lib/richText'

const TAG_LABEL = 'Где мы <b>находимся?</b>'
const TITLE = 'Офис REPUTA в Москве'
const DESCRIPTION = 'Работаем с селлерами по всей России из офиса в Москве и развиваем экосистему для клиентов Reputa'
const SUB_DESCRIPTION = 'Проводим закрытые мероприятия для клиентов Reputa:'

const EVENTS = [
    { title: 'Мастермайнды', imageSrc: '/images/Block33Img1.png' },
    { title: 'Знакомства для селлеров', imageSrc: '/images/Block33Img2.png' },
    { title: 'Выступления спикеров', imageSrc: '/images/Block33Img3.png' },
    { title: 'Внутренние встречи', imageSrc: '/images/Block33Img4.png' },
]

export default function Block33() {
    return (
        <section className={style.cstBlock33section}>
            <div className={style.cstBlock33ownManager}>
                {rich(TAG_LABEL)}
            </div>
            <div className={style.cstBlock33title}>
                {rich(TITLE)}
            </div>
            <div className={style.cstBlock33description}>
                {rich(DESCRIPTION)}
            </div>
            <div className={style.cstBlock33subDescription}>
                {rich(SUB_DESCRIPTION)}
            </div>
            <div className={style.cstBlock33cardContainer}>
                <div className={style.cstBlock33cardRow}>
                    {EVENTS.map((event) => (
                        <div key={event.title} className={style.cstBlock33card}>
                            <div className={style.cstBlock33cardTop}>
                                <div className={style.cstBlock33cardTopIcon}>
                                    <Block33svg1 />
                                </div>
                                <div className={style.cstBlock33cardTopText}>
                                    {rich(event.title)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.cstBlock33cardRow}>
                    {EVENTS.map((event) => (
                        <div key={event.title} className={style.cstBlock33card}>
                            <div className={style.cstBlock33cardBot}>
                                <Image src={event.imageSrc} alt={event.title} fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
