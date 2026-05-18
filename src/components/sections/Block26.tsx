import style from '@/styles/block_26.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block26() {
    return (
        <section className={style.cstBlock26section}>
            <ForSellerButton hasStar={true}>Начните работать со своей <b>базой покупателей</b></ForSellerButton>
            <span className={style.cstBlock26features}>
                <span className={style.cstBlock26featuresBlue}>Запустите первую рассылку бесплатно</span> <br/>
                и начните делать повторные<br/>
                продажи <span className={style.cstBlock26featuresBlue}>без дополнительных<br/>
                затрат на рекламу</span>
            </span>

            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>

        </section>
    )
}
