import style from '@/styles/block_29.module.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton";


export default function Block29() {
    return (
        <section className={style.cstBlock29section}>
            <span className={style.cstBlock29title}>
                <b>Не теряйте клиентов</b> <br />
                из-за пропущенных чатов
            </span>
            <span className={style.cstBlock29description}>
                Оставьте заявку — покажем, как выстроить<br/>
                работу с чатами и ускорить ответы
            </span>
            <WhiteButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></WhiteButton>

        </section>
    )
}
