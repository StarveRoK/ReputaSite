import style from '@/styles/block_27.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block27() {
    return (
        <section className={style.cstBlock27section}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>

            <span className={style.cstBlock27features}>
                <span className={style.cstBlock27featuresBlue}>
                    Все чаты <br/>
                    с покупателями<br/>
                    в одном месте
                </span><br/>
                — без задержек <br/>
                и потерь
            </span>

            <span className={style.cstBlock27features2}>
                Единый интерфейс, мгновенная загрузка <br/>
                и уведомления, если вы не ответили <br/>
                в течение 5 минут — ни один клиент <br/>
                не останется без ответа
            </span>

            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>

            <div className={style.cstBlock27bigImage}>
                <img src="/images/Block27.png" alt="Block27" />
            </div>
        </section>
    )
}
