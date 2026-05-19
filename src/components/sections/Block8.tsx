'use client'

import { useState } from 'react'
import style from '@/styles/block_8.module.css'
import DropDownIcon from '@/components/ui/DropDownIcon'
import { rich } from '@/lib/richText'

const TAG_LABEL = 'Они же <b>FAQ</b>'
const TITLE = 'Часто задаваемые <br/><blue>вопросы</blue>'

const FAQS: { question: string; answer: string }[] = [
    {
        question: 'Можно ли исключить отдельные артикулы из работы системы?',
        answer: 'Да. Вы можете предоставить список артикулов, для которых нужно отключить автоответы на отзывы, вопросы, чаты или рассылки.',
    },
    {
        question: 'Как AI поймёт, что именно отвечать покупателям?',
        answer: 'При запуске система анализирует:<br/>• ваши предыдущие ответы на отзывы и вопросы;<br/>• карточки товаров;<br/>• описания и инфографику;<br/>• инструкции и FAQ по товарам;<br/>• дополнительные материалы, которые вы предоставите.<br/><br/>На основе этих данных AI формирует базу знаний и стиль общения, весь период обучения AI проходит 14 дней.<br/>В этот период вы можете корректировать ответы, а система будет учитывать вашу обратную связь и постепенно адаптироваться под ваш стиль общения.',
    },
    {
        question: 'Что делать, если у нас сложный или технический товар?',
        answer: 'Это не проблема.<br/><br/>Если у вас есть инструкции, техническая документация, FAQ или внутренние знания, мы загрузим их в систему. Даже для узкоспециализированных товаров AI сможет формировать точные ответы на основе вашей информации.',
    },
    {
        question: 'Можно ли проверять ответы перед публикацией?',
        answer: 'Да. Вы можете выбрать:<br/>• полностью автоматическую публикацию;<br/>• режим предварительного согласования;<br/>• смешанный формат работы.',
    },
    {
        question: 'Есть ли ограничения по количеству ответов?',
        answer: 'Нет. Во время подписки действует полный безлимит на отзывы, вопросы, чаты и рассылки.',
    },
    {
        question: 'Насколько безопасно использовать систему?',
        answer: 'Сервис подключается через API и работает в рамках официальных возможностей маркетплейсов. Вы полностью контролируете настройки и сценарии работы.',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock8titleBlue}>{c}</span>
    ),
}

export default function Block8() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className={style.cstBlock8section}>
            <div className={style.cstBlock8ownManager}>
                {rich(TAG_LABEL)}
            </div>
            <div className={style.cstBlock8title}>
                {rich(TITLE, titleTags)}
            </div>
            <div className={style.cstBlock8cardContainer}>
                {FAQS.map((faq, i) => {
                    const isOpen = openIndex === i
                    return (
                        <div
                            key={i}
                            className={`${style.cstBlock8card} ${isOpen ? style.cstBlock8cardActive : ''}`}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            <div className={style.cstBlock8top}>
                                <span className={`${style.cstBlock8question} ${isOpen ? style.cstBlock8questionActive : ''}`}>
                                    {rich(faq.question)}
                                </span>
                                <span className={style.cstBlock8dropdownIcon}>
                                    <DropDownIcon />
                                </span>
                            </div>
                            <div className={`${style.cstBlock8bot} ${isOpen ? style.cstBlock8botOpen : ''}`}>
                                {rich(faq.answer)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
