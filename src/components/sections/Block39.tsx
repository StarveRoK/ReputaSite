import style from '@/styles/block_39.module.css'
import Block33svg1 from "@/components/ui/Block33svg1";


export default function Block39() {
    return (
        <section className={style.cstBlock39section}>
            <div className={style.cstBlock39ownManager}>
                Полная <b>автоматизация</b>
            </div>
            <div className={style.cstBlock39title}>
                Reputa
                <span className={style.cstBlock39titleBlue}> экономит <br/> до 95% времени</span> менеджера
            </div>
            <div className={style.cstBlock39description}>
                100 отзывов и вопросов<br/>
                в день <b>— это до 8 часов ручной работы</b>
            </div>
            <div className={style.cstBlock39subDescription}>
                Reputa <span className={style.cstBlock39subDescriptionBlue}>автоматически отвечает покупателям <br/> рекомендует товары </span>
                и не забывает о допродажах
            </div>
            <div className={style.cstBlock39description}>
                Вместо рутины ваш менеджер занимается<br/>
                тем, <b>что увеличивает продажи:</b>
            </div>
            <div className={style.cstBlock39cardContainer}>
                <div className={style.cstBlock39card}>
                    <div className={style.cstBlock39cardTop}>
                        <div className={style.cstBlock39cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock39cardTopText}>
                            Улучшает <br/>
                            карточки товаров
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock39card}>
                    <div className={style.cstBlock39cardTop}>
                        <div className={style.cstBlock39cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock39cardTopText}>
                            Тестирует гипотезы
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock39card}>
                    <div className={style.cstBlock39cardTop}>
                        <div className={style.cstBlock39cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock39cardTopText}>
                            Оптимизирует рекламу
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock39card}>
                    <div className={style.cstBlock39cardTop}>
                        <div className={style.cstBlock39cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock39cardTopText}>
                            Анализирует конкурентов
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock39card}>
                    <div className={style.cstBlock39cardTop}>
                        <div className={style.cstBlock39cardTopIcon}>
                            <Block33svg1/>
                        </div>
                        <div className={style.cstBlock39cardTopText}>
                            Развивает ассортимент
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
