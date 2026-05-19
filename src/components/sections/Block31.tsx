import style from '@/styles/block_31.module.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton"
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton"
import { rich } from '@/lib/richText'

const SELLER_BADGE = 'Для селлеров'
const TITLE = 'REPUTA — лидерыв репутационномменеджментена маркетплейсах'
const DESCRIPTIONS = [
    'Стартап года по версии <b>MPseller Awards 2025</b>',
    'Участники и спикеры <b>профильных выставок, форумов и конференций</b>',
]
const CTA_HREF = 'https://app.reputa.ru'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>'

const IMAGES_COL1 = [
    { src: '/images/Block31Img1.png', alt: 'Block31Img1' },
    { src: '/images/Block31Img3.png', alt: 'Block31Img3' },
    { src: '/images/Block31Img4.png', alt: 'Block31Img4' },
]
const IMAGES_COL2 = [
    { src: '/images/Block31Img2.png', alt: 'Block31Img2' },
    { src: '/images/Block31Img5.png', alt: 'Block31Img5' },
]

export default function Block31() {
    return (
        <section className={style.cstBlock31section}>
            <div className={style.cstBlock31titleContainer}>
                <ForSellerButton hasStar={true} white={true}>{SELLER_BADGE}</ForSellerButton>
                <div className={style.cstBlock31title}>
                    {rich(TITLE)}
                </div>

                <div className={style.cstBlock31descriptionContainer}>
                    {DESCRIPTIONS.map((desc, i) => (
                        <div key={i} className={style.cstBlock31description}>
                            {rich(desc)}
                        </div>
                    ))}
                </div>

                <WhiteButton href={CTA_HREF} label={CTA_LABEL}/>
            </div>

            <div className={style.cstBlock31imgContainer}>
                <div className={style.cstBlock31imgCol}>
                    {IMAGES_COL1.map((img) => (
                        <img key={img.alt} src={img.src} alt={img.alt}/>
                    ))}
                </div>
                <div className={style.cstBlock31imgCol}>
                    {IMAGES_COL2.map((img) => (
                        <img key={img.alt} src={img.src} alt={img.alt}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
