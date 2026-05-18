import style from '@/styles/block_36.module.css'
import {ROUTES} from "@/lib/routes";


export default function Block36() {
    return (
        <section className={style.cstBlock36section}>
            <div className={style.cstBlock36title}>
                Почему селлеры<br/>
                <span className={style.cstBlock36titleBlue}>выбирают REPUTA?</span>
            </div>
            <div className={style.cstBlock36container}>
                <div className={style.cstBlock36card}>
                    <span className={style.cstBlock36cardBlue}>Официальная <br/>работа </span>
                    по договору
                </div>
                <div className={style.cstBlock36card}>
                    Подключение<br/>
                    <span className={style.cstBlock36cardBlue}>через API</span>
                </div>
                <div className={style.cstBlock36card}>
                    Собственные
                    <span className={style.cstBlock36cardBlue}> AI- и IT-разработки</span>
                </div>
                <div className={style.cstBlock36card}>
                    <span className={style.cstBlock36cardBlue}>Автоматизация<br/></span>
                    работы<br/>
                    с покупателями
                </div>
                <div className={style.cstBlock36card}>
                    <span className={style.cstBlock36cardBlue}>Постоянное развитие <br/> платформы </span>
                     и новых <br/>
                    инструментов
                </div>
            </div>
        </section>
    )
}
