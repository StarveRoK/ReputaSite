import style from '@/styles/block_2.module.css'
import LittleStarSVG from "@/components/ui/LittleStarSVG";
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import {ROUTES} from "@/lib/routes";

export default function Block2() {
    return (
        <section className={style.cstBlock2section}>
            <div className={style.cstBlock2title}>
                4 инструмента REPUTA для роста продаж <br/>
                на маркетплейсах <span className={style.cstBlock2titleBlue}>в одной подписке </span>
            </div>

            <div className={style.cstBlock2productContainer}>
                <div className={style.cstBlock2productLittleStar}>
                    <LittleStarSVG />
                </div>

                <div className={style.cstBlock2productBlock}>
                    <div className={style.cstBlock2productIcon}>
                        <img src="/images/Block2Img1.png" alt='Block2Img1' className={style.cstBlock2image}/>
                    </div>
                    <div className={style.cstBlock2productDescriptionContainer}>
                        <div className={style.cstBlock2productDescriptionNumber}>1</div>
                        <div className={style.cstBlock2productDescriptionTitle}>
                            Улучшение рейтинга <br/>
                            и <span className={style.cstBlock2productDescriptionTitleBlue}> удаление негатива</span>
                        </div>
                        <div className={style.cstBlock2productDescriptionDescription}>
                            Работаем в несколько этапов: жалобы, <br/>
                            диалог спокупателями и юридические <br/>
                            обращения в поддержку, чтобы безопасно <br/>
                            убирать до 90% негативных отзывов
                        </div>
                        <a href={ROUTES.products.negativeReviews} className={style.cstBlock2productDescriptionMore}>Подробнее об инструменте</a>
                    </div>
                </div>
                <div className={style.cstBlock2productBlock}>
                    <div className={style.cstBlock2productIcon}>
                        <img src="/images/Block2Img2.png" alt='Block2Img2' className={style.cstBlock2image}/>
                    </div>
                    <div className={style.cstBlock2productDescriptionContainer}>
                        <div className={style.cstBlock2productDescriptionNumber}>2</div>
                        <div className={style.cstBlock2productDescriptionTitle}>
                            <span className={style.cstBlock2productDescriptionTitleBlue}>Ответы на отзывы</span><br/>
                            и вопросы
                        </div>
                        <div className={style.cstBlock2productDescriptionDescription}>
                            ИИ-бот обрабатывает положительные <br/>
                            и негативные отзывы, отвечает <br/>
                            на вопросы покупателей и рекомендует <br/>
                            подходящие товары
                        </div>
                        <a href={ROUTES.products.reviews} className={style.cstBlock2productDescriptionMore}>Подробнее об инструменте</a>
                    </div>
                </div>
                <div className={style.cstBlock2productBlock}>
                    <div className={style.cstBlock2productIcon}>
                        <img src="/images/Block2Img3.png" alt='Block2Img3' className={style.cstBlock2image}/>
                    </div>
                    <div className={style.cstBlock2productDescriptionContainer}>
                        <div className={style.cstBlock2productDescriptionNumber}>3</div>
                        <div className={style.cstBlock2productDescriptionTitle}>
                            <span className={style.cstBlock2productDescriptionTitleBlue}>Чаты</span> с покупателями
                        </div>
                        <div className={style.cstBlock2productDescriptionDescription}>
                            Работа со всеми чатами <br/>
                            в одном месте: быстро, работы
                        </div>
                        <a href={ROUTES.products.chats} className={style.cstBlock2productDescriptionMore}>Подробнее об инструменте</a>
                    </div>
                </div>
                <div className={style.cstBlock2productBlock}>
                    <div className={style.cstBlock2productIcon}>
                        <img src="/images/Block2Img4.png" alt='Block2Img4' className={style.cstBlock2image}/>
                    </div>
                    <div className={style.cstBlock2productDescriptionContainer}>
                        <div className={style.cstBlock2productDescriptionNumber}>4</div>
                        <div className={style.cstBlock2productDescriptionTitle}>
                            <span className={style.cstBlock2productDescriptionTitleBlue}>Рассылки</span> по базе <br/>
                            покупателей
                        </div>
                        <div className={style.cstBlock2productDescriptionDescription}>
                            Работа с базой покупателей: <br/>
                            напоминание о товарах, акциях, <br/>
                            стимулирование повторных покупок, <br/>
                            сбор обратной связи
                        </div>
                        <a href={ROUTES.products.newsletter} className={style.cstBlock2productDescriptionMore}>Подробнее об инструменте</a>
                    </div>
                </div>
            </div>
            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>
        </section>
    )
}