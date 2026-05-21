import style from '@/styles/block_41.module.css'
import Block32svg1 from "@/components/ui/Block32svg1"
import { rich } from '@/lib/richText'
import Block41svg1 from "@/components/ui/Block41svg1"

const MISSION_TITLE = '<blue>Миссия</blue> REPUTA'
const MISSION_PARAGRAPHS = [
    'Создавая Reputa, мы изначально смотрели шире рынка маркетплейсов',
    'Наша цель — сделать репутационный менеджмент и системную работу с покупателями важной частью современного бизнеса: от маркетплейсов до международных компаний и брендов',
]

const RIGHT_QUOTE = 'Сейчас мы развиваем AI-инструменты и автоматизацию для маркетплейсов'
const RIGHT_OUTLOOK = 'А в будущем планируем масштабировать платформу на международный рынок и другие сферы бизнеса, где репутация и коммуникация напрямую влияют на продажи.'

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock41titleBlue}>{c}</span>
    ),
}

export default function Block41() {
    return (
        <section className={style.cstBlock41section}>
            <div className={style.cstBlock41left}>
                <div className={style.cstBlock41leftBot}>
                    <div className={style.cstBlock41title}>
                        {rich(MISSION_TITLE, titleTags)}
                    </div>
                    <div className={style.cstBlock41missionDiv}>
                        <div className={style.cstBlock41missionIcon}>
                            <Block41svg1 />
                        </div>
                        <div className={style.cstBlock41missionText}>
                            {MISSION_PARAGRAPHS.map((p, i) => (
                                <span key={i}>{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.cstBlock41right}>
                <div className={style.cstBlock41rightBot}>
                    <div className={style.cstBlock41icon}>
                        <Block32svg1 />
                    </div>
                    <div className={style.cstBlock41missionText}>
                        <span className={style.cstBlock41description}>{RIGHT_QUOTE}</span>
                        <span className={`${style.cstBlock41description} ${style.cstBlock41noMargin}`}>{RIGHT_OUTLOOK}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
