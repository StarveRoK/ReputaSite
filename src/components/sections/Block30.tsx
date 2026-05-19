import style from '@/styles/block_30.module.css'
import ReputaSVG from "@/components/ui/ReputaSVG"
import Block30svg1 from "@/components/ui/Block30svg1"
import Block30svg2 from "@/components/ui/Block30svg2"
import Block30svg3 from "@/components/ui/Block30svg3"
import { rich } from '@/lib/richText'

const DESCRIPTION = 'Помогаем селлерам <blue>убирать до 90% негативных отзывов</blue>, повышать рейтинг товаров и выстраивать <blue>автоматизированную работу с отзывами, вопросами, чатами и рассылками</blue>'

const STATS = [
    {
        Icon: Block30svg1,
        title: '350 000+',
        description: 'обработанных негативных<br />отзывов',
    },
    {
        Icon: Block30svg2,
        title: '500+',
        description: 'кабинетов в работе',
    },
    {
        Icon: Block30svg3,
        title: '100+',
        description: 'ниш на маркетплейсах',
    },
]

const descriptionTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock30titleBlue}>{c}</span>
    ),
}

export default function Block30() {
    return (
        <section className={style.cstBlock30section}>
            <div className={style.cstBlock30ownManager}>
                <ReputaSVG />
            </div>

            <div className={style.cstBlock30title}>
                {rich(DESCRIPTION, descriptionTags)}
            </div>

            <div className={style.cstBlock30cardContainer}>
                {STATS.map((stat) => (
                    <div key={stat.title} className={style.cstBlock30card}>
                        <div className={style.cstBlock30cardIcon}>
                            <stat.Icon/>
                        </div>
                        <div className={style.cstBlock30cardTitle}>
                            {stat.title}
                        </div>
                        <div className={style.cstBlock30cardDescription}>
                            {rich(stat.description)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
