'use client'

import { useState } from 'react'
import style from '@/styles/block_8.module.css'
import DropDownIcon from '@/components/ui/DropDownIcon'

const faqs: { question: React.ReactNode; answer: string }[] = [
    {
        question: <><b>Зачем мне сервис</b>, если менеджер и так отвечает?</>,
        answer: 'Ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ ответ',
    },
]

export default function Block8() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className={style.cstBlock8section}>
            <div className={style.cstBlock8ownManager}>
                Они же <b>FAQ</b>
            </div>
            <div className={style.cstBlock8title}>
                Часто задаваемые <br/>
                <span className={style.cstBlock8titleBlue}>вопросы</span>
            </div>
            <div className={style.cstBlock8cardContainer}>
                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i
                    return (
                        <div
                            key={i}
                            className={`${style.cstBlock8card} ${isOpen ? style.cstBlock8cardActive : ''}`}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            <div className={style.cstBlock8top}>
                                <span className={`${style.cstBlock8question} ${isOpen ? style.cstBlock8questionActive : ''}`}>
                                    {faq.question}
                                </span>
                                <span className={style.cstBlock8dropdownIcon}>
                                    <DropDownIcon />
                                </span>
                            </div>
                            <div className={`${style.cstBlock8bot} ${isOpen ? style.cstBlock8botOpen : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
