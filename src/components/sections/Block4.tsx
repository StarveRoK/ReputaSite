import style from '@/styles/block_4.module.css';
import {rich} from '@/lib/richText';

const TITLE = 'Мы объединили<blue> лучшие </blue> <blue> инструменты </blue>в одном сервисе';

const ITEMS = [
    {
        number: '1',
        title: '<blue> Не переплачиваете </blue> за каждый ответ',
        description: 'Отвечайте на неограниченное  количество сообщений в рамках  одного тарифа — без доплат за объём',
    },
    {
        number: '2',
        title: '<blue>Экономьте до 3 часов в день</blue> на работе с кабинетами',
        description: 'Все кабинеты в одном интерфейсе.  Работайте с отзывами и чатами  без переключений — быстрее  и без потери сообщений',
    },
    {
        number: '3',
        title: 'Делайте <blue> до +30%</blue> <blue>повторных продаж</blue>',
        description: 'Безлимитные рассылки по вашим покупателям, которые оставили 5 звезд. Работайте со всей базой: возвращайте клиентов, рассказывайте о новинках, акциях, собирайте обратную связь',
    },
    {
        number: '4',
        title: '<blue>Делайте до 15% допродаж </blue> без участия менеджеров',
        description: 'AI автоматически отвечает на отзывы  покупателей и рекомендует товары  из вашего магазина',
    },
    {
        number: '5',
        title: 'Общайтесь с покупателем  <blue>ещё до покупки</blue> ',
        description: 'Помогайте покупателю разобраться в товаре  до заказа, это снизит риск неоправданных  ожиданий, возвратов и негативных отзывов',
    },
    {
        number: '6',
        title: 'Не пропускайте  <blue>ни одного сообщения </blue>',
        description: 'Получайте уведомления о каждом новом  сообщении от покупателя в чате в течении 5 минут.  Быстро реагируйте на запросы и не теряйте  их из-за долгих ответов или пропущенных чатов',
    },
];

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock4titleBlue}>{c}</span>
    ),
};

const itemTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock4productDescriptionTitleBlue}>{c}</span>
    ),
};

export default function Block4() {
    return (
        <section className={style.cstBlock4section}>
            <div className={style.cstBlock4title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock4productContainer}>
                {ITEMS.map((item) => (
                    <div key={item.number} className={style.cstBlock4productBlock}>
                        <div className={style.cstBlock4productDescriptionNumber}>{item.number}</div>
                        <div className={style.cstBlock4productDescriptionTitle}>
                            {rich(item.title, itemTitleTags)}
                        </div>
                        <div className={style.cstBlock4productDescriptionDescription}>
                            {rich(item.description)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
