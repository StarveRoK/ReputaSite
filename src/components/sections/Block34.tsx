import style from '@/styles/block_34.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import { ROUTES } from "@/lib/routes"
import MaxIcon from "@/components/ui/MaxIcon"
import YouTubeIcon from "@/components/ui/YouTubeIcon"
import { rich } from '@/lib/richText'

const JOURNAL = {
    imageSrc: '/images/Block34Img1.png',
    imageAlt: 'Block34Img1',
    title: 'Первый журнал<blue>о репутации на маркетплейсах</blue>',
    description: 'Делимся кейсами, исследованиями, аналитикойи практическим опытом работы с отзывами, покупателями и репутацией брендов',
    ctaHref: '#',
    ctaLabel: '<b>Подписаться</b> на журнал',
}

const PODCAST = {
    imageSrc: '/images/Block34Img2.png',
    imageAlt: 'Block34Img2',
    title: 'Подкасты Reputa<blue>о маркетплейсах и репутации</blue>',
    description: 'Записываем интервью и подкасты с селлерами,экспертами и предпринимателями рынкамаркетплейсов',
}

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock34titleBlue}>{c}</span>
    ),
}

export default function Block34() {
    return (
        <section className={style.cstBlock34section}>
            <div className={style.cstBlock34block}>
                <div className={style.cstBlock34icon}>
                    <img src={JOURNAL.imageSrc} alt={JOURNAL.imageAlt}/>
                </div>
                <div className={style.cstBlock34title}>
                    {rich(JOURNAL.title, titleTags)}
                </div>
                <div className={style.cstBlock34description}>
                    {rich(JOURNAL.description)}
                </div>
                <BlueButton href={JOURNAL.ctaHref} label={JOURNAL.ctaLabel}/>
            </div>
            <div className={style.cstBlock34block}>
                <div className={style.cstBlock34icon}>
                    <img src={PODCAST.imageSrc} alt={PODCAST.imageAlt}/>
                </div>
                <div className={style.cstBlock34title}>
                    {rich(PODCAST.title, titleTags)}
                </div>
                <div className={style.cstBlock34description}>
                    {rich(PODCAST.description)}
                </div>
                <div className={style.cstBlock34iconsContainer}>
                    <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon/></a>
                    <a target="_blank" href={ROUTES.social.max}><MaxIcon/></a>
                </div>
            </div>
        </section>
    )
}
