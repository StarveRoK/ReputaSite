import '@/styles/block_15.css'
import PlaySVG from "@/components/ui/PlaySVG";

export default function Block15() {
    return (
        <section className='cst-block-15-section'>

            <div className='cst-block-15-title'>
                Как работа с рейтингом <br/>
                и отзывами <span className="cst-block-15-title-blue"> влияет на продажи</span> <br/>
            </div>

            <div className='cst-block-15-card-container'>
                <div className='cst-block-15-card'>
                    <div className='cst-block-15-card-image'>
                        <img src="/images/Block15Img1.png" alt="Block15Img1"/>
                    </div>
                    <div className='cst-block-15-card-title'>
                        <span className='cst-block-15-card-title-blue'>До +70%</span><br/>
                        к продажам
                    </div>
                    <div className='cst-block-15-card-description'>
                        По нашим кейсам улучшение <br/>
                        рейтинга и отзывов может давать <br/>
                        рост продаж до 70% за счёт CTR <br/>
                        воронки продаж карточки
                    </div>
                </div>

                <div className='cst-block-15-card'>
                    <div className='cst-block-15-card-image'>
                        <img src="/images/Block15Img2.png" alt="Block15Img2"/>
                    </div>
                    <div className='cst-block-15-card-title'>
                        + 0,1 балла <br/>
                        рейтинга <span className='cst-block-15-card-title-blue'> влияет<br/>
                        на всю воронку
                    </span>
                    </div>
                    <div className='cst-block-15-card-description'>
                        По нашим кейсам улучшение <br/>
                        рейтинга и отзывов может давать <br/>
                        рост продаж до 70% за счёт CTR <br/>
                        воронки продаж карточки
                    </div>
                </div>

                <div className='cst-block-15-card'>
                    <div className='cst-block-15-card-image'>
                        <img src="/images/Block15Img3.png" alt="Block15Img3"/>
                    </div>
                    <div className='cst-block-15-card-title'>
                        <span className='cst-block-15-card-title-blue'>До +40%</span> к выбору <br/>
                        товара при равных <br/>
                        условиях
                    </div>
                    <div className='cst-block-15-card-description'>
                        По нашим наблюдениям, <br/>
                        при схожей цене, сроках доставки <br/>
                        и характеристиках покупатели <br/>
                        чаще выбирают товар с более <br/>
                        высоким рейтингом
                    </div>
                </div>

            </div>
            <button className='cst-block-15-btn'>
                Повысить рейтинг
                <PlaySVG/>
            </button>
        </section>
    )
}