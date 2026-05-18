import style from '@/styles/block_9.module.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton";

export default function Block9() {
    return (
        <section className={style.cstBlock9section}>
            <div className={style.cstBlock9titleContainer}>
                <div className={style.cstBlock9title}>
                    Попробуйте REPUTA<br />
                    <b>бесплатно 14 дней</b>
                </div>

                <div className={style.cstBlock9descriptionContainer}>
                    <div className={style.cstBlock9description}>
                        Простое подключение <b> за 5 минут</b>
                    </div>
                    <div className={style.cstBlock9description}>
                        Окупаемость за счёт <b> роста воронки и допродаж</b>
                    </div>
                    <div className={style.cstBlock9description}>
                        Работа по <b> проверенным сценариям</b>
                    </div>
                </div>


                <WhiteButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></WhiteButton>
            </div>

            <div className={style.cstBlock9titleImage}>
                <img src="/images/Block9.png" alt="Block9" className={style.cstBlock9phoneImage}/>
            </div>
        </section>
    )
}
