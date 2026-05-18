import style from '@/styles/block_10.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block10() {
    return (
        <section className={style.cstBlock10section}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>

            <span className={style.cstBlock10features}>
                ИИ-ответы <br/>
                на отзывы и вопросы<br/>
                <span className={style.cstBlock10featuresBlue}> которые увеличивают <br/> продажи</span>
            </span>

            <span className={style.cstBlock10features2}>
                Отвечает за 1 секунду: закрывает вопросы <br/>
                покупателей, отрабатывает негатив <br/>
                и рекомендует ваши товары в положительных <br/>
                отзывах без участия менеджера
            </span>

            <BlueButton href="https://app.reputa.ru">Оставить заявку</BlueButton>

            <div className={style.cstBlock10bigImage}>
                <img src="/images/Block10.png" alt="Block10"/>
            </div>
        </section>
    )
}
