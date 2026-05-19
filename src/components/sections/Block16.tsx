import style from '@/styles/block_16.module.css'
import { rich } from '@/lib/richText'

const TITLE = 'Почему REPUTA — <blue>это выгодно?</blue>'

const ITEMS = [
    {
        number: '1',
        title: 'Оплата <blue> за результат </blue>',
        description: 'Вы платите только за фактически <br />удалённые или исправленные отзывы',
    },
    {
        number: '2',
        title: '<blue>Не тратите время</blue><br/>на выстраивание системы',
        description: 'Не нужно разрабатывать скрипты, тестировать <br />гипотезы и обучать сотрудников. У нас уже <br />отработанные алгоритмы и процессы',
    },
    {
        number: '3',
        title: '<blue>Экономия</blue> на штате',
        description: 'Вам не нужно нанимать команду для работы <br />с отзывами. Мы закрываем задачи, которые <br />обычно требуют 3–4 менеджеров и юриста',
    },
    {
        number: '4',
        title: '<blue>Не тратите время</blue><br/>на выстраивание системы',
        description: 'Отвечайте на неограниченное <br />количество сообщений в рамках  <br />одного тарифа — без доплат за объём',
    },
    {
        number: '5',
        title: '<blue>Убрать дешевле,</blue><br/>чем перекрывать',
        description: 'Чтобы перекрыть один негативный отзыв, <br />нужно до 20–30 выкупов с оценкой 5★. <br />Работа с удалением и исправлением — более <br />быстрый и экономически эффективный способ',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock16titleBlue}>{c}</span>
    ),
}

const itemTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock16productDescriptionTitleBlue}>{c}</span>
    ),
}

export default function Block4() {
    return (
        <section className={style.cstBlock16section}>
            <div className={style.cstBlock16title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock16productContainer}>
                {ITEMS.map((item) => (
                    <div key={item.number} className={style.cstBlock16productBlock}>
                        <div className={style.cstBlock16productDescriptionNumber}>{item.number}</div>
                        <div className={style.cstBlock16productDescriptionTitle}>
                            {rich(item.title, itemTitleTags)}
                        </div>
                        <div className={style.cstBlock16productDescriptionDescription}>
                            {rich(item.description)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
