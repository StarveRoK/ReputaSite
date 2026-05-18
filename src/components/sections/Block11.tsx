import style from '@/styles/block_11.module.css'
import StarSVG from "@/components/ui/StarSVG";

export default function Block11() {
    return (
        <section className={style.cstBlock11section}>
            <div className={style.cstBlock11sectionContainer}>
                <div className={style.cstBlock11sectionLeft}>
                    <div className={style.cstBlock11background}>
                        <StarSVG/>
                        <span className={style.cstBlock11backgroundText}>
                            <b>Рекомендации</b> AI
                        </span>
                    </div>
                    <span className={style.cstBlock11title}>
                        <span className={style.cstBlock11titleBlue}>ИИ предлагает ваши <br/>
                        товары</span> в ответах<br/>
                        на отзыв
                    </span>
                    <span className={style.cstBlock11description}>
                        увеличивая <br/>
                        допродажи <span className={style.cstBlock11descriptionBlue}>на 15%</span>
                    </span>
                </div>
                <div className={style.cstBlock11sectionRight}>
                    <img src="/images/Block11_1.png" alt="Block11-1"/>
                </div>
            </div><div className={style.cstBlock11sectionContainer}>
                <div className={style.cstBlock11sectionLeft}>
                    <div className={style.cstBlock11background}>
                        <StarSVG/>
                        <span className={style.cstBlock11backgroundText}>
                            Работа с<b> негативом</b>
                        </span>
                    </div>
                    <span className={style.cstBlock11title}>
                        ИИ корректно <br />
                        <span className={style.cstBlock11titleBlue}>отвечает на негатив</span>
                    </span>
                    <span className={style.cstBlock11description}>
                        и <span className={style.cstBlock11descriptionBlue}>помогает сохранить <br/> лояльность</span>
                        даже <br/>
                        недовольного покупателя
                    </span>
                </div>
                <div className={style.cstBlock11sectionRight}>
                    <img src="/images/Block11_2.png" alt="Block11-2"/>
                </div>
            </div>
            <div className={style.cstBlock11sectionContainer}>
                <div className={style.cstBlock11sectionLeft}>
                    <div className={style.cstBlock11background}>
                        <StarSVG/>
                        <span className={style.cstBlock11backgroundText}>
                            Работа <b>с вопросами</b>
                        </span>
                    </div>
                    <span className={style.cstBlock11title}>
                        ИИ <span className={style.cstBlock11titleBlue}>мгновенно  <br/>
                        отвечает</span> на вопросы
                    </span>
                    <span className={style.cstBlock11description}>
                        и помогает клиенту принять <br/>
                        решение о покупке <br/>
                        <span className={style.cstBlock11descriptionBlue}>без участия менеджера</span>
                    </span>
                </div>
                <div className={style.cstBlock11sectionRight}>
                    <img src="/images/Block11_3.png" alt="Block11-3"/>
                </div>
            </div>
        </section>
    )
}
