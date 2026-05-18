import style from '@/styles/block_15.module.css'
import PlaySVG from "@/components/ui/PlaySVG";

export default function Block15() {
    return (
        <section className={style.cstBlock15section}>

            <div className={style.cstBlock15title}>
                Как работа с рейтингом <br/>
                и отзывами <span className={style.cstBlock15titleBlue}> влияет на продажи</span> <br/>
            </div>

            <div className={style.cstBlock15cardContainer}>
                <div className={style.cstBlock15card}>
                    <div className={style.cstBlock15cardImage}>
                        <img src="/images/Block15Img1.png" alt="Block15Img1"/>
                    </div>
                    <div className={style.cstBlock15cardTitle}>
                        <span className={style.cstBlock15cardTitleBlue}>До +70%</span><br/>
                        к продажам
                    </div>
                    <div className={style.cstBlock15cardDescription}>
                        По нашим кейсам улучшение <br/>
                        рейтинга и отзывов может давать <br/>
                        рост продаж до 70% за счёт CTR <br/>
                        воронки продаж карточки
                    </div>
                </div>

                <div className={style.cstBlock15card}>
                    <div className={style.cstBlock15cardImage}>
                        <img src="/images/Block15Img2.png" alt="Block15Img2"/>
                    </div>
                    <div className={style.cstBlock15cardTitle}>
                        + 0,1 балла <br/>
                        рейтинга <span className={style.cstBlock15cardTitleBlue}> влияет<br/>
                        на всю воронку
                    </span>
                    </div>
                    <div className={style.cstBlock15cardDescription}>
                        По нашим кейсам улучшение <br/>
                        рейтинга и отзывов может давать <br/>
                        рост продаж до 70% за счёт CTR <br/>
                        воронки продаж карточки
                    </div>
                </div>

                <div className={style.cstBlock15card}>
                    <div className={style.cstBlock15cardImage}>
                        <img src="/images/Block15Img3.png" alt="Block15Img3"/>
                    </div>
                    <div className={style.cstBlock15cardTitle}>
                        <span className={style.cstBlock15cardTitleBlue}>До +40%</span> к выбору <br/>
                        товара при равных <br/>
                        условиях
                    </div>
                    <div className={style.cstBlock15cardDescription}>
                        По нашим наблюдениям, <br/>
                        при схожей цене, сроках доставки <br/>
                        и характеристиках покупатели <br/>
                        чаще выбирают товар с более <br/>
                        высоким рейтингом
                    </div>
                </div>

            </div>
            <button className={style.cstBlock15btn}>
                Повысить рейтинг
                <PlaySVG/>
            </button>
        </section>
    )
}
