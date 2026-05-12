import '@/styles/block_18.css'
import Block18svg1 from "@/components/ui/Block18svg1";

export default function Block18() {
    return (
        <section className='cst-block-18-section'>
            <span className="cst-block-18-features">
                Когда нужно <span className="cst-block-18-features-blue"> работать <br />
                с негативными отзывами?
            </span>
            </span>

            <div className="cst-block-18-list">
                <div className="cst-block-18-row">
                    <div className="cst-block-18-col-icon">
                        <Block18svg1/>
                    </div>
                    <div className="cst-block-18-col-text">
                        В последних топ-20/30 отзывах есть негатив
                    </div>
                </div>
                <div className="cst-block-18-row">
                    <div className="cst-block-18-col-icon">
                        <Block18svg1/>
                    </div>
                    <div className="cst-block-18-col-text">
                        Рейтинг карточки ниже 4.7
                    </div>
                </div>
                <div className="cst-block-18-row">
                    <div className="cst-block-18-col-icon">
                        <Block18svg1/>
                    </div>
                    <div className="cst-block-18-col-text">
                        Рейтинг вашего товара ниже, <br/>
                        чем у конкурентов в нише
                    </div>
                </div>
                <div className="cst-block-18-row">
                    <div className="cst-block-18-col-icon">
                        <Block18svg1/>
                    </div>
                    <div className="cst-block-18-col-text">
                        Проседает конверсия в заказ
                    </div>
                </div>

                <div className="cst-block-18-row">
                    <div className="cst-block-18-col-icon">
                        <Block18svg1/>
                    </div>
                    <div className="cst-block-18-col-text">
                        Негативные отзывы попадают в “важное <br/>
                        из отзывов” и влияют на восприятие товара
                    </div>
                </div>
            </div>

            <span className="cst-block-18-description">
                Сигналы, которые показывают, что репутация <br/>
                товара уже влияет на продажи
            </span>

            <div className='cst-block-18-big-image'>
                <img src="/images/Block18Img1.png" alt="Block18Img1"/>
            </div>
        </section>
    )
}