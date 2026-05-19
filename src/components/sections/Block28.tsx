import Image from 'next/image'
import style from '@/styles/block_28.module.css'
import { rich } from '@/lib/richText'

const TITLE = '<blue>Как происходит </blue>работа с чатами?'

const ITEMS = [
    {
        number: '1',
        imageSrc: '/images/Block28Img1.png',
        imageAlt: 'Block28Img1',
        title: 'Все чаты с покупателями <blue>в одном месте</blue>',
        description: 'Работайте со всеми сообщениями в одном окне без зависаний и переключений между кабинетами — быстрее отвечаете и не теряете клиентов',
    },
    {
        number: '2',
        imageSrc: '/images/Block28Img2.png',
        imageAlt: 'Block28Img2',
        title: 'Помогайте покупателю <blue>до оформления заказа</blue>',
        description: 'Отвечайте на вопросы в чате ещё до покупки: помогайте выбрать товар, снижайте риск возвратов и негативных отзывов',
    },
    {
        number: '3',
        imageSrc: '/images/Block28Img3.png',
        imageAlt: 'Block28Img3',
        title: '<blue>Полная история</blue> общения с покупателями',
        description: 'Все диалоги сохраняются — вы видите переписку целиком, контролируете качество ответов и работу  менеджеров',
    },
    {
        number: '4',
        imageSrc: '/images/Block28Img4.png',
        imageAlt: 'Block28Img4',
        title: 'Не пропускайте <blue>ни одного сообщения</blue>',
        description: 'Если вы не ответили в течение 5 минут— система отправит уведомление.Вы контролируете каждый диалоги не теряете покупателей',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock28titleBlue}>{c}</span>
    ),
}

const itemTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock28productDescriptionTitleBlue}>{c}</span>
    ),
}

export default function Block28() {
    return (
        <section className={style.cstBlock28section}>
            <div className={style.cstBlock28title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock28productContainer}>
                {ITEMS.map((item) => (
                    <div key={item.number} className={style.cstBlock28productBlock}>
                        <div className={style.cstBlock28productIcon}>
                            <Image src={item.imageSrc} alt={item.imageAlt} className={style.cstBlock28image} width={80} height={80}/>
                        </div>
                        <div className={style.cstBlock28productDescriptionContainer}>
                            <div className={style.cstBlock28productDescriptionNumber}>{item.number}</div>
                            <div className={style.cstBlock28productDescriptionTitle}>
                                {rich(item.title, itemTitleTags)}
                            </div>
                            <div className={style.cstBlock28productDescriptionDescription}>
                                {rich(item.description)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
