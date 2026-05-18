import style from '@/styles/block_4.module.css'

export default function Block4() {
    return (
        <section className={style.cstBlock4section}>
            <div className={style.cstBlock4title}>
                Мы объединили
                <span className={style.cstBlock4titleBlue}> лучшие <br/> инструменты </span>
                в одном сервисе
            </div>

            <div className={style.cstBlock4productContainer}>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>1</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        <span className={style.cstBlock4productDescriptionTitleBlue}> Не переплачиваете </span> <br/>
                        за каждый ответ
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        Отвечайте на неограниченное <br/>
                        количество сообщений в рамках <br/>
                        одного тарифа — без доплат за объём
                    </div>
                </div>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>2</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        <span
                            className={style.cstBlock4productDescriptionTitleBlue}>Экономьте до 3 часов в день</span><br/>
                        на работе с кабинетами
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        Все кабинеты в одном интерфейсе. <br/>
                        Работайте с отзывами и чатами <br/>
                        без переключений — быстрее <br/>
                        и без потери сообщений
                    </div>
                </div>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>3</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        Делайте <span className={style.cstBlock4productDescriptionTitleBlue}> до +30% <br/>повторных продаж</span>
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        Безлимитные рассылки по вашим покупателям,<br/>
                        которые оставили 5 звезд. Работайте со всей базой:<br/>
                        возвращайте клиентов, рассказывайте о новинках,<br/>
                        акциях, собирайте обратную связь
                    </div>
                </div>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>4</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        <span
                            className={style.cstBlock4productDescriptionTitleBlue}>Делайте до 15% допродаж </span><br/>
                        без участия менеджеров
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        AI автоматически отвечает на отзывы <br/>
                        покупателей и рекомендует товары <br/>
                        из вашего магазина
                    </div>
                </div>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>5</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        Общайтесь с покупателем <br/>
                        <span className={style.cstBlock4productDescriptionTitleBlue}>ещё до покупки</span><br/>
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        Помогайте покупателю разобраться в товаре <br/>
                        до заказа, это снизит риск неоправданных <br/>
                        ожиданий, возвратов и негативных отзывов
                    </div>
                </div>
                <div className={style.cstBlock4productBlock}>
                    <div className={style.cstBlock4productDescriptionNumber}>6</div>
                    <div className={style.cstBlock4productDescriptionTitle}>
                        Не пропускайте <br/>
                        <span className={style.cstBlock4productDescriptionTitleBlue}>ни одного сообщения </span>
                    </div>
                    <div className={style.cstBlock4productDescriptionDescription}>
                        Получайте уведомления о каждом новом <br/>
                        сообщении от покупателя в чате в течении 5 минут. <br/>
                        Быстро реагируйте на запросы и не теряйте <br/>
                        их из-за долгих ответов или пропущенных чатов
                    </div>
                </div>
            </div>

        </section>
    )
}
