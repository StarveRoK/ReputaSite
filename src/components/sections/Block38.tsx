import style from '@/styles/block_38.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";

export default function Block38() {
    return (
        <section className={style.cstBlock38section}>
            <span className={style.cstBlock38title}>
                Скидка <span className={style.cstBlock38titleBlue}> при работе вдолгую</span>
            </span>
            <div className={style.cstBlock38container}>
                <div className={style.cstBlock38card}>
                    <div className={style.cstBlock38cardTop}>1 месяц</div>
                    <div className={style.cstBlock38cardMid}>
                        <span className={style.cstBlock38cardMidOpacity}></span>
                        <span className={style.cstBlock38cardMidText}></span>
                    </div>
                    <div className={style.cstBlock38cardBot}>9.999 ₽</div>
                </div>
                <div className={style.cstBlock38card}>
                    <div className={style.cstBlock38cardTop}>3 месяца</div>
                    <div className={style.cstBlock38cardMid}>
                        <span className={style.cstBlock38cardMidOpacity}>30.000 ₽</span>
                        <span className={style.cstBlock38cardMidText}>-10%</span>
                    </div>
                    <div className={style.cstBlock38cardBot}>26.990 ₽</div>
                </div>
                <div className={style.cstBlock38card}>
                    <div className={style.cstBlock38cardTop}>6 месяцев</div>
                    <div className={style.cstBlock38cardMid}>
                        <span className={style.cstBlock38cardMidOpacity}>60.000 ₽</span>
                        <span className={style.cstBlock38cardMidText}>-19%</span>
                    </div>
                    <div className={style.cstBlock38cardBot}>49.990 ₽</div>
                </div>
                <div className={style.cstBlock38card}>
                    <div className={style.cstBlock38cardTop}>12 месяцев</div>
                    <div className={style.cstBlock38cardMid}>
                        <span className={style.cstBlock38cardMidOpacity}>120.000 ₽</span>
                        <span className={style.cstBlock38cardMidText}>-25%</span>
                    </div>
                    <div className={style.cstBlock38cardBot}>89.990 ₽</div>
                </div>
            </div>
        </section>
    )
}
