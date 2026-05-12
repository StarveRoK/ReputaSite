import '@/styles/block_12.css'
import PlaySVG from "@/components/ui/PlaySVG";
import LittleStarSVG from "@/components/ui/LittleStarSVG";

export default function Block12() {
    return (
        <section className='cst-block-12-section'>
            <div className="cst-block-12-product-container">

                <div className="cst-block-12-product-block">
                    <div className="cst-block-12-product-icon">
                        <img src="/images/Block12Img1.png" alt='Block12Img1' className="cst-block-12-image"/>
                    </div>
                    <div className="cst-block-12-product-description-container">
                        <div className="cst-block-12-product-description-number">1</div>
                        <div className="cst-block-12-product-description-title">
                            Ответ <br/>
                            <span className="cst-block-12-product-description-title-blue"> за 1 секунду</span>
                        </div>
                        <div className="cst-block-12-product-description-description">
                            ИИ мгновенно генерирует <br/>
                            и публикует ответы без задержек
                        </div>
                    </div>
                </div>
                <div className="cst-block-12-product-block">
                    <div className="cst-block-12-product-icon">
                        <img src="/images/Block12Img2.png" alt='Block12Img2' className="cst-block-12-image"/>
                    </div>
                    <div className="cst-block-12-product-description-container">
                        <div className="cst-block-12-product-description-number">2</div>
                        <div className="cst-block-12-product-description-title">
                            Полная <br/>
                            <span className="cst-block-12-product-description-title-blue">автоматизация</span>
                        </div>
                        <div className="cst-block-12-product-description-description">
                            Ответы публикуются без участия <br/>
                            менеджеров — до 95% экономии времени <br/>
                            на обработке отзывов и вопросов
                        </div>
                        
                    </div>
                </div>
                <div className="cst-block-12-product-block">
                    <div className="cst-block-12-product-icon">
                        <img src="/images/Block12Img3.png" alt='Block12Img3' className="cst-block-12-image"/>
                    </div>
                    <div className="cst-block-12-product-description-container">
                        <div className="cst-block-12-product-description-number">3</div>
                        <div className="cst-block-12-product-description-title">
                            <span className="cst-block-12-product-description-title-blue">Персонализация</span>
                            общения
                        </div>
                        <div className="cst-block-12-product-description-description">
                            AI обращается к покупателю по имени <br/>
                            и отвечает в заданном стиле, повышая <br/>
                            доверие и лояльность
                        </div>
                    </div>
                </div>
                <div className="cst-block-12-product-block">
                    <div className="cst-block-12-product-icon">
                        <img src="/images/Block12Img4.png" alt='Block12Img4' className="cst-block-12-image"/>
                    </div>
                    <div className="cst-block-12-product-description-container">
                        <div className="cst-block-12-product-description-number">4</div>
                        <div className="cst-block-12-product-description-title">
                            <span className="cst-block-12-product-description-title-blue">Работает 24/7</span><br/>
                            и обрабатывает любой<br/>
                            объем отзывов<br/>
                            <span className="cst-block-12-product-description-title-blue">Работает 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}