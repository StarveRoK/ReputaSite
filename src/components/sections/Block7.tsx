import style from '@/styles/block_7.module.css'
import ReputaSVG from "@/components/ui/ReputaSVG";

export default function Block7() {
    return (
        <section className={style.cstBlock7section}>

            <div className={style.cstBlock7ownManager}>
                <ReputaSVG />
            </div>

            <div className={style.cstBlock7title}>
                Лидеры <span className={style.cstBlock7titleBlue}> в репутационном <br/> менеджменте </span>
                на маркетплейсах
            </div>

            <div className={style.cstBlock7cardContainer}>
                <div className={style.cstBlock7card}>
                    <div className={`${style.cstBlock7cardTitle} ${style.cstBlock7cardBlue} ${style.cstBlock7cardTitleBig}`}>
                        350 000
                    </div>
                    <div className={style.cstBlock7cardDescription}>
                        успешно отработанных<br /> негативных отзывов
                    </div>
                </div>

                <div className={style.cstBlock7card}>
                    <div className={style.cstBlock7cardTitle}>
                        <span className={style.cstBlock7cardBlue}>Стартап</span><br/>
                        года
                    </div>
                    <div className={style.cstBlock7cardDescription}>
                        по версии<br /> MP Sellers Awards
                    </div>
                </div>

                <div className={style.cstBlock7card}>
                    <div className={style.cstBlock7cardTitle}>
                        Участники<br />
                        <span className={style.cstBlock7cardBlue}>и спикеры</span>

                    </div>
                    <div className={style.cstBlock7cardDescription}>
                        на выставках, форумах<br /> и конференциях
                    </div>
                </div>

            </div>
        </section>
    )
}
