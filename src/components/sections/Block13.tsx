import style from '@/styles/block_13.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block13() {
    return (
        <section className={style.cstBlock13section}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>

            <span className={style.cstBlock13features}>
                Удаляем <br/>
                и исправляем<br/>
                <span className={style.cstBlock13featuresBlue}> до 90% негативных<br/> отзывов</span>
            </span>

            <span className={style.cstBlock13features2}>
                <ul>
                    <li>Для селлеров WB и OZON</li>
                    <li>С оплатой за результат</li>
                    <li>Без нарушения оферты</li>
                    <li>Первые результаты в течении 48 часов</li>
                </ul>
            </span>

            <BlueButton href="https://app.reputa.ru">Оставить заявку</BlueButton>

            <div className={style.cstBlock13bigImage}>
                <img src="/images/Block13.png" alt="Block13"/>
            </div>
        </section>
    )
}
