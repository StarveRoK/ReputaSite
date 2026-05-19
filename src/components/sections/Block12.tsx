import style from '@/styles/block_12.module.css'
import { rich } from '@/lib/richText'

const TITLE = '<blue>Как работает</blue> платформа REPUTA?'

const ITEMS = [
    {
        number: '1',
        imageSrc: '/images/Block12Img1.png',
        imageAlt: 'Block12Img1',
        title: 'Ответ <br/><blue> за 1 секунду</blue>',
        description: 'ИИ мгновенно генерирует <br/>и публикует ответы без задержек',
    },
    {
        number: '2',
        imageSrc: '/images/Block12Img2.png',
        imageAlt: 'Block12Img2',
        title: 'Полная <br/><blue>автоматизация</blue>',
        description: 'Ответы публикуются без участия <br/>менеджеров — до 95% экономии времени <br/>на обработке отзывов и вопросов',
    },
    {
        number: '3',
        imageSrc: '/images/Block12Img3.png',
        imageAlt: 'Block12Img3',
        title: '<blue>Персонализация </blue>общения',
        description: 'AI обращается к покупателю по имени <br/>и отвечает в заданном стиле, повышая <br/>доверие и лояльность',
    },
    {
        number: '4',
        imageSrc: '/images/Block12Img4.png',
        imageAlt: 'Block12Img4',
        title: '<blue>Работает 24/7</blue><br/>и обрабатывает любой<br/>объем отзывов<br/><blue>без потери качества</blue>',
        description: '',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock12productDescriptionTitleBlue}>{c}</span>
    ),
}

const sectionTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock12titleBlue}>{c}</span>
    ),
}

export default function Block12() {
    return (
        <section className={style.cstBlock12section}>
            <span className={style.cstBlock12title}>
                {rich(TITLE, sectionTitleTags)}
            </span>
            <div className={style.cstBlock12productContainer}>
                {ITEMS.map((item) => (
                    <div key={item.number} className={style.cstBlock12productBlock}>
                        <div className={style.cstBlock12productIcon}>
                            <img src={item.imageSrc} alt={item.imageAlt} className={style.cstBlock12image}/>
                        </div>
                        <div className={style.cstBlock12productDescriptionContainer}>
                            <div className={style.cstBlock12productDescriptionNumber}>{item.number}</div>
                            <div className={style.cstBlock12productDescriptionTitle}>
                                {rich(item.title, titleTags)}
                            </div>
                            {item.description && (
                                <div className={style.cstBlock12productDescriptionDescription}>
                                    {rich(item.description)}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
