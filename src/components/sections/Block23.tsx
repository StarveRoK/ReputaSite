import Image from 'next/image'
import style from '@/styles/block_23.module.css'
import { rich } from '@/lib/richText'

const TITLE = '<blue>Безлимитные рассылки по вашей лояльной <br />аудитории,</blue> которая уже поставила 5★'

const ITEMS = [
    {
        number: '1',
        imageSrc: '/images/Block23Img1.png',
        imageAlt: 'Block23Img1',
        title: 'Продавать лояльно <br/>аудитории <blue> до 40% проще</blue><br/>чем новым клиентам',
        description: 'Покупатели, у которых уже был <br/>положительный опыт с вашим <br/>брендом, охотнее возвращаются <br/>за повторными заказами',
    },
    {
        number: '2',
        imageSrc: '/images/Block23Img2.png',
        imageAlt: 'Block23Img2',
        title: 'Экономия <br/><blue>до 40%</blue> рекламного<br/>бюджета',
        description: 'Повторные продажи по своей базе <br />помогают снижать зависимость от <br />постоянных вложений в рекламу',
    },
    {
        number: '3',
        imageSrc: '/images/Block23Img3.png',
        imageAlt: 'Block23Img3',
        title: 'Рост <blue> лояльности <br />и узнаваемости</blue><br />бренда',
        description: 'Регулярные касания через рассылки<br/>помогают покупателям чаще возвращаться именно к<br/>вашему магазину',
    },
    {
        number: '4',
        imageSrc: '/images/Block23Img4.png',
        imageAlt: 'Block23Img4',
        title: 'Повторные продажи<br/><blue>без дополнительных<br/>вложений</blue>',
        description: 'Работайте со своей базой покупателей <br/>и увеличивайте выручку без роста <br/>стоимости привлечения клиента',
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock23titleBlue}>{c}</span>
    ),
}

const itemTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock23productDescriptionTitleBlue}>{c}</span>
    ),
}

export default function Block23() {
    return (
        <section className={style.cstBlock23section}>
            <div className={style.cstBlock23title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock23productContainer}>
                {ITEMS.map((item) => (
                    <div key={item.number} className={style.cstBlock23productBlock}>
                        <div className={style.cstBlock23productIcon}>
                            <Image src={item.imageSrc} alt={item.imageAlt} className={style.cstBlock23image} width={80} height={80}/>
                        </div>
                        <div className={style.cstBlock23productDescriptionContainer}>
                            <div className={style.cstBlock23productDescriptionNumber}>{item.number}</div>
                            <div className={style.cstBlock23productDescriptionTitle}>
                                {rich(item.title, itemTitleTags)}
                            </div>
                            <div className={style.cstBlock23productDescriptionDescription}>
                                {rich(item.description)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
