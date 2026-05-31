import style from '@/styles/block_34.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton"
import { ROUTES } from "@/lib/routes"
import MaxIcon from "@/components/ui/MaxIcon"
import YouTubeIcon from "@/components/ui/YouTubeIcon"
import { rich } from '@/lib/richText'
import Image from 'next/image'

const JOURNAL = {
    illustrationSrc: '/images/Block34Img3.png',
    title: 'Первый журнал<blue> о репутации на маркетплейсах</blue>',
    description: 'Делимся кейсами, исследованиями, аналитикой и практическим опытом работы с отзывами, покупателями и репутацией брендов',
    ctaHref: 'https://t.me/Reputamp_Bot?start=start_line_002',
    ctaLabel: '<b>Подписаться</b> на журнал',
}

const PODCAST = {
    imageSrc: '/images/Block34Img2.png',
    title: 'Подкасты Reputa<blue> о маркетплейсах и репутации</blue>',
    description: 'Записываем интервью и подкасты с селлерами, экспертами и предпринимателями рынка маркетплейсов',
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
                <div className={style.cstBlock34title}>
                    {rich(JOURNAL.title, titleTags)}
                </div>
                <div className={style.cstBlock34description}>
                    {rich(JOURNAL.description)}
                </div>
                <BlueButton href={JOURNAL.ctaHref} label={JOURNAL.ctaLabel} />
            </div>
            <div className={style.cstBlock34imgDiv}>
                <Image src={JOURNAL.illustrationSrc} alt="Иллюстрация журнала" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={`${style.cstBlock34block} ${style.cstBlock34blockBottom}`}>
                <div className={style.cstBlock34blockTop}>
                    <div className={style.cstBlock34icon}>
                        <Image src={PODCAST.imageSrc} alt="Логотип подкаста" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={style.cstBlock34subTitle}>
                        {rich(PODCAST.title, titleTags)}
                    </div>
                </div>
                <div className={style.cstBlock34blockBot}>
                    <div className={style.cstBlock34iconsContainer}>
                        <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon /></a>
                        <a target="_blank" href={ROUTES.social.max}><MaxIcon /></a>
                    </div>
                    <div className={style.cstBlock34description}>
                        {rich(PODCAST.description)}
                    </div>
                </div>
            </div>
        </section>
    )
}
