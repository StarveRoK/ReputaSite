import style from '@/styles/block_30.module.css'
import ReputaSVG from "@/components/ui/ReputaSVG";
import Block30svg1 from "@/components/ui/Block30svg1";
import Block30svg2 from "@/components/ui/Block30svg2";
import Block30svg3 from "@/components/ui/Block30svg3";

export default function Block30() {
    return (
        <section className={style.cstBlock30section}>

            <div className={style.cstBlock30ownManager}>
                <ReputaSVG />
            </div>

            <div className={style.cstBlock30title}>
                Помогаем селлерам <span className={style.cstBlock30titleBlue}>убирать до 90% <br/>
                негативных отзывов</span>, повышать рейтинг товаров <br/>
                и выстраивать <span className={style.cstBlock30titleBlue}>автоматизированную работу <br/>
                с отзывами, вопросами, чатами и рассылками</span>
            </div>

            <div className={style.cstBlock30cardContainer}>
                <div className={style.cstBlock30card}>
                    <div className={style.cstBlock30cardIcon}>
                        <Block30svg1/>
                    </div>
                    <div className={style.cstBlock30cardTitle}>
                        350 000+
                    </div>
                    <div className={style.cstBlock30cardDescription}>
                        обработанных негативных<br />
                        отзывов
                    </div>
                </div>

                <div className={style.cstBlock30card}>
                    <div className={style.cstBlock30cardIcon}>
                        <Block30svg2/>
                    </div>
                    <div className={style.cstBlock30cardTitle}>
                        500+
                    </div>
                    <div className={style.cstBlock30cardDescription}>
                        кабинетов в работе
                    </div>
                </div>

                <div className={style.cstBlock30card}>
                    <div className={style.cstBlock30cardIcon}>
                        <Block30svg3/>
                    </div>
                    <div className={style.cstBlock30cardTitle}>
                        100+
                    </div>
                    <div className={style.cstBlock30cardDescription}>
                        ниш на маркетплейсах
                    </div>
                </div>

            </div>
        </section>
    )
}
