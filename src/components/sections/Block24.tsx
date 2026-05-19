import style from '@/styles/block_24.module.css'
import Block24svg1 from "@/components/ui/Block24svg1"
import Block24svg2 from "@/components/ui/Block24svg2"
import Block24svg3 from "@/components/ui/Block24svg3"
import Block24svg4 from "@/components/ui/Block24svg4"
import { rich } from '@/lib/richText'

const TITLE = 'Что можно отправлятьпокупателям <blue> через рассылки?</blue>'

const CARDS = [
    {
        Icon: Block24svg1,
        title: 'Скидки и акции',
        description: 'Возвращайте покупателей специальнымипредложениями и увеличивайте повторныепродажи',
    },
    {
        Icon: Block24svg2,
        title: 'Новинки и другие товары',
        description: 'Рекомендуйте товары вашей линейки и стимулируйте дополнительные покупки',
    },
    {
        Icon: Block24svg3,
        title: 'Сбой обратной связи',
        description: 'Получайте обратную связь от покупателей для развития бренда и улучшения качества',
    },
    {
        Icon: Block24svg4,
        title: 'Напоминание о повторной покупке',
        description: 'Напоминайте клиентам о повторном заказе товаров, которые требуют регулярного обновления или расходуются со временем',
    },
]

const IMAGES = [
    { src: '/images/Block24Img1.png', alt: 'Block24Img1' },
    { src: '/images/Block24Img2.png', alt: 'Block24Img2' },
    { src: '/images/Block24Img3.png', alt: 'Block24Img3' },
    { src: '/images/Block24Img4.png', alt: 'Block24Img4' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock24titleBlue}>{c}</span>
    ),
}

export default function Block24() {
    return (
        <section className={style.cstBlock24section}>
            <div className={style.cstBlock24title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock24Container}>
                <div className={style.cstBlock24leftBlock}>
                    {CARDS.map((card) => (
                        <div key={card.title} className={style.cstBlock24card}>
                            <div className={style.cstBlock24icon}>
                                <card.Icon/>
                            </div>
                            <div className={style.cstBlock24text}>
                                <span className={style.cstBlock24textTitle}>{card.title}</span>
                                <span className={style.cstBlock24textDescription}>
                                    {rich(card.description)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.cstBlock24rightBlock}>
                    {IMAGES.map((img) => (
                        <div key={img.alt} className={style.cstBlock24imgDiv}>
                            <img src={img.src} alt={img.alt} className={style.cstBlock24img}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
