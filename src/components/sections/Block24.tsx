import style from '@/styles/block_24.module.css'
import Block24svg1 from "@/components/ui/Block24svg1";
import Block24svg2 from "@/components/ui/Block24svg2";
import Block24svg3 from "@/components/ui/Block24svg3";
import Block24svg4 from "@/components/ui/Block24svg4";

export default function Block24() {
    return (
        <section className={style.cstBlock24section}>
            <div className={style.cstBlock24title}>
                Что можно отправлять<br/>
                покупателям <span className={style.cstBlock24titleBlue}> через рассылки?</span>
            </div>

            <div className={style.cstBlock24Container}>
                <div className={style.cstBlock24leftBlock}>
                    <div className={style.cstBlock24card}>
                        <div className={style.cstBlock24icon}>
                            <Block24svg1/>
                        </div>
                        <div className={style.cstBlock24text}>
                            <span className={style.cstBlock24textTitle}>Скидки и акции</span>
                            <span className={style.cstBlock24textDescription}>
                                Возвращайте покупателей специальными<br/>
                                предложениями и увеличивайте повторные<br/>
                                продажи
                            </span>
                        </div>
                    </div>

                    <div className={style.cstBlock24card}>
                        <div className={style.cstBlock24icon}>
                            <Block24svg2/>
                        </div>
                        <div className={style.cstBlock24text}>
                            <span className={style.cstBlock24textTitle}>Новинки и другие товары</span>
                            <span className={style.cstBlock24textDescription}>
                                Рекомендуйте товары вашей линейки <br/>
                                и стимулируйте дополнительные покупки
                            </span>
                        </div>
                    </div>

                    <div className={style.cstBlock24card}>
                        <div className={style.cstBlock24icon}>
                            <Block24svg3/>
                        </div>
                        <div className={style.cstBlock24text}>
                            <span className={style.cstBlock24textTitle}>Сбой обратной связи</span>
                            <span className={style.cstBlock24textDescription}>
                                Получайте обратную связь от покупателей <br/>
                                для развития бренда и улучшения качества
                            </span>
                        </div>
                    </div>

                    <div className={style.cstBlock24card}>
                        <div className={style.cstBlock24icon}>
                            <Block24svg4/>
                        </div>
                        <div className={style.cstBlock24text}>
                            <span className={style.cstBlock24textTitle}>Напоминание о повторной покупке</span>
                            <span className={style.cstBlock24textDescription}>
                                Напоминайте клиентам о повторном заказе <br/>
                                товаров, которые требуют регулярного <br/>
                                обновления или расходуются со временем
                            </span>
                        </div>
                    </div>

                </div>
                <div className={style.cstBlock24rightBlock}>
                    <div className={style.cstBlock24imgDiv}>
                        <img src="/images/Block24Img1.png" alt="Block24Img1" className={style.cstBlock24img}/>
                    </div>
                    <div className={style.cstBlock24imgDiv}>
                        <img src="/images/Block24Img2.png" alt="Block24Img2" className={style.cstBlock24img}/>
                    </div>
                    <div className={style.cstBlock24imgDiv}>
                        <img src="/images/Block24Img3.png" alt="Block24Img3" className={style.cstBlock24img}/>
                    </div>
                    <div className={style.cstBlock24imgDiv}>
                        <img src="/images/Block24Img4.png" alt="Block24Img4" className={style.cstBlock24img}/>
                    </div>
                </div>
            </div>
        </section>
    )
}