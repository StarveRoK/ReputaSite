import style from '@/styles/block_38.module.css'
import { rich } from '@/lib/richText'

const TITLE = 'Скидка <blue> при работе вдолгую</blue>'

const PLANS = [
    { period: '1 месяц', originalPrice: '', discount: '', price: '9.999 ₽' },
    { period: '3 месяца', originalPrice: '30.000 ₽', discount: '-10%', price: '26.990 ₽' },
    { period: '6 месяцев', originalPrice: '60.000 ₽', discount: '-19%', price: '49.990 ₽' },
    { period: '12 месяцев', originalPrice: '120.000 ₽', discount: '-25%', price: '89.990 ₽' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock38titleBlue}>{c}</span>
    ),
}

export default function Block38() {
    return (
        <section className={style.cstBlock38section}>
            <span className={style.cstBlock38title}>
                {rich(TITLE, titleTags)}
            </span>
            <div className={style.cstBlock38container}>
                {PLANS.map((plan) => (
                    <div key={plan.period} className={style.cstBlock38card}>
                        <div className={style.cstBlock38cardTop}>{plan.period}</div>
                        <div className={style.cstBlock38cardMid}>
                            <span className={style.cstBlock38cardMidOpacity}>{plan.originalPrice}</span>
                            <span className={style.cstBlock38cardMidText}>{plan.discount}</span>
                        </div>
                        <div className={style.cstBlock38cardBot}>{plan.price}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
