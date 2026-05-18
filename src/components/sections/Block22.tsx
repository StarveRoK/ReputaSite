import style from '@/styles/block_22.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block22() {
    return (
        <section className={style.cstBlock22section}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>

            <span className={style.cstBlock22features}>
                <span className={style.cstBlock22featuresBlue}> Возвращайте <br/> до 40% покупателей</span> <br />
                через рассылки <br/>
                по вашей базе
            </span>

            <span className={style.cstBlock22features2}>
                Сообщайте о скидках, новинках и акциях <br/>
                клиентам Wildberries и Ozon и увеличивайте <br/>
                повторные продажи без дополнительных <br/>
                затрат на рекламу
            </span>

            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>

            <div className={style.cstBlock22bigImage}>
                <img src="/images/Block22.png" alt="Block22" />
            </div>
        </section>
    )
}
