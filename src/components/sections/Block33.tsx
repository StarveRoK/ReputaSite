import style from '@/styles/block_33.module.css'
import Block33svg1 from "@/components/ui/Block33svg1";


export default function Block33() {
    return (
        <section className={style.cstBlock33section}>
            <div className={style.cstBlock33ownManager}>
                Где мы <b>находимся?</b>
            </div>
            <div className={style.cstBlock33title}>
                <span className={style.cstBlock33titleBlue}>Офис REPUTA</span> в Москве
            </div>
            <div className={style.cstBlock33description}>
                Работаем с селлерами по всей России из офиса в Москве <br/>
                и развиваем экосистему для клиентов Reputa
            </div>
            <div className={style.cstBlock33subDescription}>
                Проводим закрытые мероприятия<br/>
                <span className={style.cstBlock33subDescriptionBlue}>для клиентов Reputa:</span>
            </div>
            <div className={style.cstBlock33cardContainer}>
                <div className={style.cstBlock33card}>
                    <div className={style.cstBlock33cardTop}>
                        <div className={style.cstBlock33cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock33cardTopText}>
                            Мастермайнды
                        </div>
                    </div>
                    <div className={style.cstBlock33cardBot}>
                        <img src="/images/Block33Img1.png" alt="Block33Img1.png"/>
                    </div>
                </div>
                <div className={style.cstBlock33card}>
                    <div className={style.cstBlock33cardTop}>
                        <div className={style.cstBlock33cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock33cardTopText}>
                            Знакомства <br/>
                            для селлеров
                        </div>
                    </div>
                    <div className={style.cstBlock33cardBot}>
                        <img src="/images/Block33Img2.png" alt="Block33Img2.png"/>
                    </div>
                </div>
                <div className={style.cstBlock33card}>
                    <div className={style.cstBlock33cardTop}>
                        <div className={style.cstBlock33cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock33cardTopText}>
                            Выступления <br/>
                            экспертов и спикеров
                        </div>
                    </div>
                    <div className={style.cstBlock33cardBot}>
                        <img src="/images/Block33Img3.png" alt="Block33Img3.png"/>
                    </div>
                </div>
                <div className={style.cstBlock33card}>
                    <div className={style.cstBlock33cardTop}>
                        <div className={style.cstBlock33cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock33cardTopText}>
                            Внутренние встречи<br/>
                            сообщества
                        </div>
                    </div>
                    <div className={style.cstBlock33cardBot}>
                        <img src="/images/Block33Img4.png" alt="Block33Img4.png"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
