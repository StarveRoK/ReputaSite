import style from '@/styles/block_32.module.css'
import Block32svg1 from "@/components/ui/Block32svg1";

export default function Block32() {
    return (
        <section className={style.cstBlock32section}>
            <div className={style.cstBlock32left}>
                <div className={style.cstBlock32leftTop}>
                    <div className={style.cstBlock32title}>
                        <span className={style.cstBlock32titleBlue}>Как появилась</span> REPUTA?
                    </div>
                    <span className={style.cstBlock32description}>
                        Направление по автоматизации работы с отзывами мы развиваем с 2023 года. Долгое время система была доступна только ограниченному кругу селлеров и распространялась по рекомендациям
                    </span>
                    <span className={style.cstBlock32description}>
                        В 2025 году мы начали развивать направление репутационного менеджмента и сегодня объединяем экспертизу Reputa  и собственные IT-разработки в единую платформу для роста продаж и репутации на маркетплейсах
                    </span>
                    <span className={style.cstBlock32description}>
                        Наша цель — помогать селлерам выстраивать системную работу с покупателями в условиях высокой конкуренции  и постоянных изменений рынка
                    </span>
                </div>
                <div className={style.cstBlock32leftBot}>
                    <div className={style.cstBlock32title}>
                        <span className={style.cstBlock32titleBlue}>Миссия</span> REPUTA
                    </div>
                    <span className={style.cstBlock32description}>
                        Создавая Reputa, мы изначально смотрели шире рынка маркетплейсов
                    </span>
                    <span className={`${style.cstBlock32description} ${style.cstBlock32noMargin}`}>
                        Наша цель — сделать репутационный менеджмент и системную работу с покупателями важной частью современного бизнеса: от маркетплейсов до международных компаний и брендов
                    </span>
                </div>
            </div>
            <div className={style.cstBlock32right}>
                <div className={style.cstBlock32rightTop}>
                    <img src="/images/Block9.png" alt="block9"/>
                </div>
                <div className={style.cstBlock32rightBot}>
                    <div className={style.cstBlock32icon}>
                        <Block32svg1/>
                    </div>
                    <span className={style.cstBlock32description}>
                        Сейчас мы развиваем AI-инструменты и автоматизацию для маркетплейсов
                    </span>
                    <span className={`${style.cstBlock32description} ${style.cstBlock32noMargin}`}>
                        А в будущем планируем масштабировать платформу на международный рынок и другие сферы бизнеса, где репутация и коммуникация напрямую влияют на продажи.
                    </span>
                </div>
            </div>
        </section>
    )
}
