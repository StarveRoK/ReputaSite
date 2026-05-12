import '@/styles/block_11.css'
import StarSVG from "@/components/ui/StarSVG";

export default function Block11() {
    return (
        <section className='cst-block-11-section'>
            <div className='cst-block-11-section-container'>
                <div className='cst-block-11-section-left'>
                    <div className='cst-block-11-background'>
                        <StarSVG/>
                        <span className='cst-block-11-background-text'>
                            <b>Рекомендации</b> AI
                        </span>
                    </div>
                    <span className="cst-block-11-title">
                        <span className="cst-block-11-title-blue">ИИ предлагает ваши <br/>
                        товары</span> в ответах<br/>
                        на отзыв
                    </span>
                    <span className="cst-block-11-description">
                        увеличивая <br/>
                        допродажи <span className="cst-block-11-description-blue">на 15%</span>
                    </span>
                </div>
                <div className='cst-block-11-section-right'>
                    <img src="/images/Block11_1.png" alt="Block11-1"/>
                </div>
            </div><div className='cst-block-11-section-container'>
                <div className='cst-block-11-section-left'>
                    <div className='cst-block-11-background'>
                        <StarSVG/>
                        <span className='cst-block-11-background-text'>
                            Работа с<b> негативом</b>
                        </span>
                    </div>
                    <span className="cst-block-11-title">
                        ИИ корректно <br />
                        <span className="cst-block-11-title-blue">отвечает на негатив</span>
                    </span>
                    <span className="cst-block-11-description">
                        и <span className="cst-block-11-description-blue">помогает сохранить <br/> лояльность</span>
                        даже <br/>
                        недовольного покупателя
                    </span>
                </div>
                <div className='cst-block-11-section-right'>
                    <img src="/images/Block11_2.png" alt="Block11-2"/>
                </div>
            </div>
            <div className='cst-block-11-section-container'>
                <div className='cst-block-11-section-left'>
                    <div className='cst-block-11-background'>
                        <StarSVG/>
                        <span className='cst-block-11-background-text'>
                            Работа <b>с вопросами</b>
                        </span>
                    </div>
                    <span className="cst-block-11-title">
                        ИИ <span className="cst-block-11-title-blue">мгновенно  <br/>
                        отвечает</span> на вопросы
                    </span>
                    <span className="cst-block-11-description">
                        и помогает клиенту принять <br/>
                        решение о покупке <br/>
                        <span className="cst-block-11-description-blue">без участия менеджера</span>
                    </span>
                </div>
                <div className='cst-block-11-section-right'>
                    <img src="/images/Block11_3.png" alt="Block11-3"/>
                </div>
            </div>
        </section>
    )
}