import style from '@/styles/block_5.module.css'

export default function Block5() {
    return (
        <section className={style.cstBlock5section}>

            <div className={style.cstBlock5ownManager}>
                Ваш личный менеджер <b>24/7</b>
            </div>

            <div className={style.cstBlock5title}>
                От настройки <br />
                до автоматизации <span className={style.cstBlock5titleBlue}> за 4 шага </span>
            </div>

            <div className={style.cstBlock5cardContainer}>
                <div className={style.cstBlock5card}>
                    <div className={style.cstBlock5step}>
                        Шаг 1
                    </div>
                    <div className={style.cstBlock5img}></div>
                    <div className={style.cstBlock5description}>
                        Подключаем кабинет <br /> через API
                    </div>
                </div>
                <div className={style.cstBlock5card}>
                    <div className={style.cstBlock5step}>
                        Шаг 2
                    </div>
                    <div className={style.cstBlock5img}></div>
                    <div className={style.cstBlock5description}>
                        Добавляете базу знаний, <br />
                        настраиваете стиль <br />
                        общения и допродажи
                    </div>
                </div>
                <div className={style.cstBlock5card}>
                    <div className={style.cstBlock5step}>
                        Шаг 3
                    </div>
                    <div className={style.cstBlock5img}></div>
                    <div className={style.cstBlock5description}>
                        Система анализирует <br />
                        отзывы, вопросы <br />
                        и чаты
                    </div>
                </div>
                <div className={style.cstBlock5card}>
                    <div className={style.cstBlock5step}>
                        Шаг 4
                    </div>
                    <div className={style.cstBlock5img}></div>
                    <div className={style.cstBlock5description}>
                        AI генерирует ответы <br />
                        на основе вашей базы <br />
                        знаний и отправляет <br />
                        покупателям
                    </div>
                </div>
            </div>
        </section>
    )
}
