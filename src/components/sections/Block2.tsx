import '@/styles/block_2.css'
import PlaySVG from "@/components/ui/PlaySVG";
import LittleStarSVG from "@/components/ui/LittleStarSVG";

export default function Block2() {
    return (
        <section className='cst-block-2-section'>
            <div className='cst-block-2-title'>
                Продукты REPUTA для роста <br/>
                <span className="cst-block-2-title-blue">продаж на маркетплейсах</span>
            </div>

            <div className="cst-block-2-product-container">
                <div className="cst-block-2-product-little-star">
                    <LittleStarSVG />
                </div>

                <div className="cst-block-2-product-block">
                    <div className="cst-block-2-product-icon">
                        <img src="/images/Block2Img1.png" alt='Block2Img1' className="cst-block-2-image"/>
                    </div>
                    <div className="cst-block-2-product-description-container">
                        <div className="cst-block-2-product-description-number">1</div>
                        <div className="cst-block-2-product-description-title">
                            Улучшение рейтинга <br/>
                            и <span className="cst-block-2-product-description-title-blue"> удаление негатива</span>
                        </div>
                        <div className="cst-block-2-product-description-description">
                            Работаем в несколько этапов: жалобы, <br/>
                            диалог спокупателями и юридические <br/>
                            обращения в поддержку, чтобы безопасно <br/>
                            убирать до 90% негативных отзывов
                        </div>
                        <div className="cst-block-2-product-description-more">Подробнее</div>
                    </div>
                </div>
                <div className="cst-block-2-product-block">
                    <div className="cst-block-2-product-icon">
                        <img src="/images/Block2Img2.png" alt='Block2Img2' className="cst-block-2-image"/>
                    </div>
                    <div className="cst-block-2-product-description-container">
                        <div className="cst-block-2-product-description-number">2</div>
                        <div className="cst-block-2-product-description-title">
                            <span className="cst-block-2-product-description-title-blue">Ответы на отзывы</span><br/>
                            и вопросы
                        </div>
                        <div className="cst-block-2-product-description-description">
                            ИИ-бот обрабатывает положительные <br/>
                            и негативные отзывы, отвечает <br/>
                            на вопросы покупателей и рекомендует <br/>
                            подходящие товары
                        </div>
                        <div className="cst-block-2-product-description-more">Подробнее</div>
                    </div>
                </div>
                <div className="cst-block-2-product-block">
                    <div className="cst-block-2-product-icon">
                        <img src="/images/Block2Img3.png" alt='Block2Img3' className="cst-block-2-image"/>
                    </div>
                    <div className="cst-block-2-product-description-container">
                        <div className="cst-block-2-product-description-number">3</div>
                        <div className="cst-block-2-product-description-title">
                            <span className="cst-block-2-product-description-title-blue">Чаты</span> с покупателями
                        </div>
                        <div className="cst-block-2-product-description-description">
                            Работа со всеми чатами <br/>
                            в одном месте: быстро, работы
                        </div>
                        <div className="cst-block-2-product-description-more">Подробнее</div>
                    </div>
                </div>
                <div className="cst-block-2-product-block">
                    <div className="cst-block-2-product-icon">
                        <img src="/images/Block2Img4.png" alt='Block2Img4' className="cst-block-2-image"/>
                    </div>
                    <div className="cst-block-2-product-description-container">
                        <div className="cst-block-2-product-description-number">4</div>
                        <div className="cst-block-2-product-description-title">
                            <span className="cst-block-2-product-description-title-blue">Рассылки</span> по базе <br/>
                            покупателей
                        </div>
                        <div className="cst-block-2-product-description-description">
                            Работа с базой покупателей: <br/>
                            напоминание о товарах, акциях, <br/>
                            стимулирование повторных покупок, <br/>
                            сбор обратной связи
                        </div>
                        <div className="cst-block-2-product-description-more">Подробнее</div>
                    </div>
                </div>
            </div>
            <button className='cst-block-2-btn'>
                Попробовать бесплатно <b>14 дней</b>
                <PlaySVG/>
            </button>
        </section>
    )
}