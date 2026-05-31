import style from '@/styles/block_40.module.css'
import { rich } from '@/lib/richText'

const TITLE = '<blue>Видео </blue> с конференций'

const VIDEO = [
    { src: 'https://www.youtube.com/embed/FdWeFWMi1ew', title: 'Репута на Seller Expo Сочи 2026' },
    { src: 'https://www.youtube.com/embed/ZEwE1H5df2M', title: 'Репута на MarketGuru Conf 2026' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock40titleBlue}>{c}</span>
    ),
}

export default function Block40() {
    return (
        <section className={style.cstBlock40section}>
            <div className={style.cstBlock40title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock40cardContainer}>
                {VIDEO.map((video, i) => (
                    <div key={i} className={style.cstBlock40videoDiv}>
                        <iframe
                            className={style.cstBlock40video}
                            src={video.src}
                            title={video.title}
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
