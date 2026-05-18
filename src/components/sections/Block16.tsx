import style from '@/styles/block_16.module.css'

export default function Block4() {
    return (
        <section className={style.cstBlock16section}>
            <div className={style.cstBlock16title}>
                Почему REPUTA — <span className={style.cstBlock16titleBlue}>это выгодно?</span>
            </div>

            <div className={style.cstBlock16productContainer}>
                <div className={style.cstBlock16productBlock}>
                    <div className={style.cstBlock16productDescriptionNumber}>1</div>
                    <div className={style.cstBlock16productDescriptionTitle}>
                        Оплата <span className={style.cstBlock16productDescriptionTitleBlue}> за результат </span>
                    </div>
                    <div className={style.cstBlock16productDescriptionDescription}>
                        Вы платите только за фактически <br />
                        удалённые или исправленные отзывы
                    </div>
                </div>
                <div className={style.cstBlock16productBlock}>
                    <div className={style.cstBlock16productDescriptionNumber}>2</div>
                    <div className={style.cstBlock16productDescriptionTitle}>
                        <span className={style.cstBlock16productDescriptionTitleBlue}>Не тратите время</span><br/>
                        на выстраивание системы
                    </div>
                    <div className={style.cstBlock16productDescriptionDescription}>
                        Не нужно разрабатывать скрипты, тестировать <br />
                        гипотезы и обучать сотрудников. У нас уже <br />
                        отработанные алгоритмы и процессы
                    </div>
                </div>
                <div className={style.cstBlock16productBlock}>
                    <div className={style.cstBlock16productDescriptionNumber}>3</div>
                    <div className={style.cstBlock16productDescriptionTitle}>
                        <span className={style.cstBlock16productDescriptionTitleBlue}>Экономия</span> на штате
                    </div>
                    <div className={style.cstBlock16productDescriptionDescription}>
                        Вам не нужно нанимать команду для работы <br />
                        с отзывами. Мы закрываем задачи, которые <br />
                        обычно требуют 3–4 менеджеров и юриста
                    </div>
                </div>
                <div className={style.cstBlock16productBlock}>
                    <div className={style.cstBlock16productDescriptionNumber}>4</div>
                    <div className={style.cstBlock16productDescriptionTitle}>
                        <span className={style.cstBlock16productDescriptionTitleBlue}>Не тратите время</span><br/>
                        на выстраивание системы
                    </div>
                    <div className={style.cstBlock16productDescriptionDescription}>
                        Отвечайте на неограниченное <br />
                        количество сообщений в рамках  <br />
                        одного тарифа — без доплат за объём
                    </div>
                </div>
                <div className={style.cstBlock16productBlock}>
                    <div className={style.cstBlock16productDescriptionNumber}>5</div>
                    <div className={style.cstBlock16productDescriptionTitle}>
                        <span className={style.cstBlock16productDescriptionTitleBlue}>Убрать дешевле,</span><br/>
                        чем перекрывать
                    </div>
                    <div className={style.cstBlock16productDescriptionDescription}>
                        Чтобы перекрыть один негативный отзыв, <br />
                        нужно до 20–30 выкупов с оценкой 5★. <br />
                        Работа с удалением и исправлением — более <br />
                        быстрый и экономически эффективный способ
                    </div>
                </div>
            </div>
        </section>
    )
}
