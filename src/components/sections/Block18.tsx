import style from '@/styles/block_18.module.css'
import Block18svg1 from "@/components/ui/Block18svg1";

export default function Block18() {
    return (
        <section className={style.cstBlock18section}>
            <span className={style.cstBlock18features}>
                Когда нужно <span className={style.cstBlock18featuresBlue}> работать <br />
                с негативными отзывами?
            </span>
            </span>

            <div className={style.cstBlock18list}>
                <div className={style.cstBlock18row}>
                    <div className={style.cstBlock18colIcon}>
                        <Block18svg1/>
                    </div>
                    <div className={style.cstBlock18colText}>
                        В последних топ-20/30 отзывах есть негатив
                    </div>
                </div>
                <div className={style.cstBlock18row}>
                    <div className={style.cstBlock18colIcon}>
                        <Block18svg1/>
                    </div>
                    <div className={style.cstBlock18colText}>
                        Рейтинг карточки ниже 4.7
                    </div>
                </div>
                <div className={style.cstBlock18row}>
                    <div className={style.cstBlock18colIcon}>
                        <Block18svg1/>
                    </div>
                    <div className={style.cstBlock18colText}>
                        Рейтинг вашего товара ниже, <br/>
                        чем у конкурентов в нише
                    </div>
                </div>
                <div className={style.cstBlock18row}>
                    <div className={style.cstBlock18colIcon}>
                        <Block18svg1/>
                    </div>
                    <div className={style.cstBlock18colText}>
                        Проседает конверсия в заказ
                    </div>
                </div>

                <div className={style.cstBlock18row}>
                    <div className={style.cstBlock18colIcon}>
                        <Block18svg1/>
                    </div>
                    <div className={style.cstBlock18colText}>
                        Негативные отзывы попадают в "важное <br/>
                        из отзывов" и влияют на восприятие товара
                    </div>
                </div>
            </div>

            <span className={style.cstBlock18description}>
                Сигналы, которые показывают, что репутация <br/>
                товара уже влияет на продажи
            </span>

            <div className={style.cstBlock18bigImage}>
                <img src="/images/Block18Img1.png" alt="Block18Img1"/>
            </div>
        </section>
    )
}
