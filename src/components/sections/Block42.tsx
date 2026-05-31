'use client'

import { useState } from 'react'
import style from '@/styles/block_42.module.css'
import DropDownIcon from '@/components/ui/DropDownIcon'
import { rich } from '@/lib/richText'

const TAG_LABEL = 'Они же <b>FAQ</b>'
const TITLE = 'Часто задаваемые <blue>вопросы</blue>'

const FAQS: { question: string; answer: string }[] = [
    {
        question: 'Сколько по времени занимает работа и когда ждать результат?',
        answer: 'Первые результаты уже в течение первой недели работы.\n' +
            'Общие сроки отработки максимального % негатива зависят от количества отзывов в работе:\n' +
            '• до 300 отзывов — в среднем до 3 недель;\n' +
            '• до 1000 отзывов — до 1,5-2 месяцев;\n' +
            'Работа с отзывами ведётся ежедневно, включая выходные',
    },
    {
        question: 'Как предоставляются отчёты по работе?',
        answer: 'Мы создаём отдельный чат, где ведётся вся отчётность. Отчёты отправляются в режиме реального времени с это всеми фото-подтверждениями.\n' +
            '\n' +
            'При больших объемах отзывов (от 1000) можем оформлять в таблицу',
    },
    {
        question: 'Какие доступы и подключения нужны для работы?',
        answer: 'Для WB:\n' +
            '• Доступ к отзывам и чату с покупателем, API-ключ с доступом к отзывам, чату с покупателем, контенту\n' +
            '\n' +
            'Для OZON:\n' +
            '• Доступ "менеджер склада" и "менеджер по товару", либо "технологический партнер", доступ к отправлению FBO\n' +
            '\n' +
            'Вы можете быть уверены в безопасности, так как наша команда работает исключительно в рамках задачи работы с отзывами.',
    },
    {
        question: 'Нужно подключать дополнительные опции?',
        answer: 'Для работы на WB нужно будет подключить «ЧАТ С ПОКУПАТЕЛЕМ». Минимально предлагаем подключить его на 7 дней. За это время мы откроем чаты с покупателями и сможем с ними работать уже без подписки. \n' +
            '\n' +
            'Для селлеров от 5000 негативных отзывов можем рассмотреть работу только по 1 и 3 этапу.',
    },
    {
        question: 'Как происходит работа? ',
        answer: '1 этап. Через подачу жалоб на отзывы.\n' +
            '\n' +
            'На этом этапе у нас есть свои секреты и скрипты, как указать причину и какой текст написать, чтобы получить максимальную конверсию удаления. \n' +
            'Успешность этого этапа до 15%\n' +
            '\n' +
            '2 этап. Через диалог c покупателем и договоренность удалить / изменить отзыв на 5 звезд.\n' +
            '\n' +
            'На этом этапе мы подключаем наш софт, который помогает работать с большим объемом, системно отправлять большие количества сообщений / делать серии касаний / выводить покупателей на диалог. \n' +
            'Успешность этого этапа до 50-70% \n' +
            '\n' +
            'Этап 3. Через официальное обращение нашими юристами в поддержку WB.\n' +
            '\n' +
            'На этом этапе наш отдел юристов составляет письма по каждому отзыву с обоснованием причины удаления отзыва. При необходимости делаем повторные обращения после отказа. Успешность этого этапа до 20%\n' +
            '\n' +
            'Работа в 3 этапа помогает нам добиться конверсии удаления до 90%. \n' +
            'Средняя конверсия по работе 70%*\n' +
            '\n' +
            '*при условии работы с 3 этапами',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock42titleBlue}>{c}</span>
    ),
}

export default function Block42() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className={style.cstBlock42section}>
            <div className={style.cstBlock42ownManager}>
                {rich(TAG_LABEL)}
            </div>
            <div className={style.cstBlock42title}>
                {rich(TITLE, titleTags)}
            </div>
            <div className={style.cstBlock42cardContainer}>
                {FAQS.map((faq, i) => {
                    const isOpen = openIndex === i
                    return (
                        <div
                            key={i}
                            className={`${style.cstBlock42card} ${isOpen ? style.cstBlock42cardActive : ''}`}
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                        >
                            <div className={style.cstBlock42top}>
                                <span className={`${style.cstBlock42question} ${isOpen ? style.cstBlock42questionActive : ''}`}>
                                    {rich(faq.question)}
                                </span>
                                <span className={style.cstBlock42dropdownIcon}>
                                    <DropDownIcon />
                                </span>
                            </div>
                            <div className={`${style.cstBlock42bot} ${isOpen ? style.cstBlock42botOpen : ''}`}>
                                {rich(faq.answer)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
