import style from '@/styles/block_37.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block37() {
    return (
        <section className={style.cstBlock37section}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>
            <span className={style.cstBlock37title}>
                <span className={style.cstBlock37titleBlue}>1 подписка = полный безлимит</span> <br/>
                на работу с отзывами, вопросами,<br/>
                чатами и рассылками
            </span>

            <span className={style.cstBlock37descriptions}>
                Подключайте все инструменты Reputa в рамках одного <br/>
                тарифа и автоматизируйте коммуникацию с покупателями  <br/>
                без ограничений по объёму
            </span>

            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>

        </section>
    )
}
