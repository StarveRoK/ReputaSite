import style from '@/styles/block_14.module.css'

export default function Block14() {
    return (
        <section className={style.cstBlock14section}>

            <div className={style.cstBlock14title}>
                Возвращаем <span className={style.cstBlock14titleBlue}> доверие</span> <br />
                покупателя и <span className={style.cstBlock14titleBlue}> рост продаж</span> <br />
            </div>

            <div className={style.cstBlock14cardContainer}>
                <div className={style.cstBlock14card}>
                    <div className={style.cstBlock14cardDescription}>
                        Превращаем<br />
                        4 звезды<br />
                        <span className={style.cstBlock14cardDescriptionBlue}>→ в 5 звезд</span>
                    </div>
                </div>

                <div className={style.cstBlock14card}>
                    <div className={style.cstBlock14cardDescription}>
                        Убираем <span className={style.cstBlock14cardDescriptionBlue}> до 90%<br />
                        негативных <br />
                        отзывов
                    </span>
                    </div>
                </div>

                <div className={style.cstBlock14card}>
                    <div className={style.cstBlock14cardDescription}>
                        Повышаем<br />
                        рейтинг карточек<br />
                        <span className={style.cstBlock14cardDescriptionBlue}>до 4.9-5.0</span>
                    </div>
                </div>

            </div>
        </section>
    )
}
