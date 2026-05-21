import style from '@/styles/block_32.module.css'
import { rich } from '@/lib/richText'
import Image from 'next/image'

const HISTORY_TITLE = '<blue>Как появилась</blue> REPUTA?'
const HISTORY_PARAGRAPHS = [
    'Направление по автоматизации работы с отзывами мы развиваем с 2023 года. Долгое время система была доступна только ограниченному кругу селлеров и распространялась по рекомендациям',
    'В 2025 году мы начали развивать направление репутационного менеджмента и сегодня объединяем экспертизу Reputa  и собственные IT-разработки в единую платформу для роста продаж и репутации на маркетплейсах',
    'Наша цель — помогать селлерам выстраивать системную работу с покупателями в условиях высокой конкуренции  и постоянных изменений рынка',
]

const RIGHT_IMAGE = { src: '/images/Block9.png', alt: 'block9', width: 560, height: 400 }

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock32titleBlue}>{c}</span>
    ),
}

export default function Block32() {
    return (
        <section className={style.cstBlock32section}>
            <div className={style.cstBlock32left}>
                <div className={style.cstBlock32leftTop}>
                    <div className={style.cstBlock32title}>
                        {rich(HISTORY_TITLE, titleTags)}
                    </div>
                    {HISTORY_PARAGRAPHS.map((p, i) => (
                        <span key={i} className={style.cstBlock32description}>{p}</span>
                    ))}
                </div>
            </div>
            <div className={style.cstBlock32right}>
                <div className={style.cstBlock32rightTop}>
                    <Image src={RIGHT_IMAGE.src} alt={RIGHT_IMAGE.alt} width={RIGHT_IMAGE.width} height={RIGHT_IMAGE.height} />
                </div>
            </div>
        </section>
    )
}
