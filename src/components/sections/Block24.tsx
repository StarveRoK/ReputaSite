import style from '@/styles/block_24.module.css'
import Block24svg1 from "@/components/ui/Block24svg1"
import Block24svg2 from "@/components/ui/Block24svg2"
import Block24svg3 from "@/components/ui/Block24svg3"
import Block24svg4 from "@/components/ui/Block24svg4"
import Block24svg5 from "@/components/ui/Block24svg5"
import Block24svg6 from "@/components/ui/Block24svg6"
import Block24svg7 from "@/components/ui/Block24svg7"
import Block24svg8 from "@/components/ui/Block24svg8"
import {rich} from '@/lib/richText'

const TITLE = 'Что можно отправлять покупателям<blue> через рассылки?</blue>'

const CARDS = [
    {
        Icon: Block24svg1,
        title: 'Скидки и акции',
        description: 'Возвращайте покупателей специальными предложениями и увеличивайте повторные продажи',
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
    {src: '/images/Block24Img1.png', alt: 'Block24Img1'},
    {src: '/images/Block24Img2.png', alt: 'Block24Img2'},
    {src: '/images/Block24Img3.png', alt: 'Block24Img3'},
    {src: '/images/Block24Img4.png', alt: 'Block24Img4'},
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
                    <div className={style.cstBlock24rightCard}>
                        <div className={style.cstBlock24rightCardTitle}>
                            <div className={style.cstBlock24rightCardTitleIcon}>
                                <Block24svg5/>
                            </div>
                            <div className={style.cstBlock24rightCardTitleText}>
                                Пора пополнить запас
                            </div>
                        </div>
                        <div className={style.cstBlock24rightCardDescription}>
                            Ваши любимые товары заканчиваются. Закажите сейчас, пока они в наличии
                        </div>
                        <div className={style.cstBlock24rightCardBot}>
                            <div className={style.cstBlock24rightCardImage}>
                                <img src='/images/Block24Img1.png' alt="Block24Img1"/>
                            </div>
                            <div className={style.cstBlock24rightCardButton}>
                                Заказать снова
                            </div>
                        </div>
                    </div>

                    <div className={style.cstBlock24rightCard}>
                        <div className={style.cstBlock24rightCardTitle}>
                            <div className={style.cstBlock24rightCardTitleIcon}>
                                <Block24svg6/>
                            </div>
                            <div className={style.cstBlock24rightCardTitleText}>
                                Как вам заказ?
                            </div>
                        </div>
                        <div className={style.cstBlock24rightCardDescription}>
                            Оцените качество товаров и помогите нам стать лучше
                        </div>
                        <div className={style.cstBlock24rightCardBot}>
                            <div className={style.cstBlock24rightCardImage}>
                                <img src='/images/Block24Img2.png'
                                     alt="Block24Img2"
                                     className={style.cstBlock24rightCardImg2}
                                />
                            </div>
                            <div className={style.cstBlock24rightCardButton}>
                                Заказать снова
                            </div>
                        </div>
                    </div>


                    <div className={style.cstBlock24rightCard}>
                        <div className={style.cstBlock24rightCardTitle}>
                            <div className={style.cstBlock24rightCardTitleIcon}>
                                <Block24svg7/>
                            </div>
                            <div className={style.cstBlock24rightCardTitleText}>
                                Новинка: сыворотка Reputa Balance
                            </div>
                        </div>
                        <div className={`${style.cstBlock24rightCardDescription} ${style.cstBlock24rightCardDescription3}`}>
                            Лёгкая текстура и мощное увлажнение для вашей кожи
                        </div>
                        <div className={style.cstBlock24rightCardBot}>
                            <div className={style.cstBlock24rightCardImage}>
                                <img src='/images/Block24Img3.png'
                                     alt="Block24Img3"
                                     className={style.cstBlock24rightCardImg3}/>
                            </div>
                            <div className={`${style.cstBlock24rightCardButton} ${style.cstBlock24rightCardButton3}`}>
                                Смотреть
                            </div>
                        </div>
                    </div>


                    <div className={style.cstBlock24rightCard}>
                        <div className={style.cstBlock24rightCardTitle}>
                            <div className={style.cstBlock24rightCardTitleIcon}>
                                <Block24svg8/>
                            </div>
                            <div className={style.cstBlock24rightCardTitleText}>
                                Скидка 15%
                                на повторный заказ
                            </div>
                        </div>
                        <div className={`${style.cstBlock24rightCardDescription} ${style.cstBlock24rightCardDescription4}`}>
                            Для вас персональная скидка на любимые товары
                        </div>
                        <div className={style.cstBlock24rightCardBot}>
                            <div className={style.cstBlock24rightCardImage}>
                                <img src='/images/Block24Img4.png'
                                     alt="Block24Img4"
                                     className={style.cstBlock24rightCardImg4}
                                />
                            </div>
                            <div className={style.cstBlock24rightCardButton}>
                                Получить скидку
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
