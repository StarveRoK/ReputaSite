import style from '@/styles/block_40.module.css'
import { rich } from '@/lib/richText'

const TITLE = '<blue>Видео </blue> с конференций'

const VIDEO = [
    '',
    '',
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
                {VIDEO.map((link, i) => (
                    <div key={i} className={style.cstBlock40videoDiv}>
                        <video className={style.cstBlock40video} src={link} controls />
                    </div>
                ))}
            </div>
        </section>
    )
}
