import '@/styles/block_5.css'

export default function Block5() {
    return (
        <section className='cst-block-5-section'>

            <div className="cst-block-5-own-manager">
                Ваш личный менеджер <b>24/7</b>
            </div>

            <div className='cst-block-5-title'>
                От настройки <br />
                до автоматизации <span className="cst-block-4-title-blue"> за 4 шага </span>
            </div>

            <div className='cst-block-5-card-container'>
                <div className='cst-block-5-card'>
                    <div className='cst-block-5-step'>
                        Шаг 1
                    </div>
                    <div className='cst-block-5-img'></div>
                    <div className='cst-block-5-description'>
                        Подключаем кабинет <br /> через API
                    </div>
                </div>
                <div className='cst-block-5-card'>
                    <div className='cst-block-5-step'>
                        Шаг 2
                    </div>
                    <div className='cst-block-5-img'></div>
                    <div className='cst-block-5-description'>
                        Добавляете базу знаний, <br />
                        настраиваете стиль <br />
                        общения и допродажи
                    </div>
                </div>
                <div className='cst-block-5-card'>
                    <div className='cst-block-5-step'>
                        Шаг 3
                    </div>
                    <div className='cst-block-5-img'></div>
                    <div className='cst-block-5-description'>
                        Система анализирует <br />
                        отзывы, вопросы <br />
                        и чаты
                    </div>
                </div>
                <div className='cst-block-5-card'>
                    <div className='cst-block-5-step'>
                        Шаг 4
                    </div>
                    <div className='cst-block-5-img'></div>
                    <div className='cst-block-5-description'>
                        AI генерирует ответы <br />
                        на основе вашей базы <br />
                        знаний и отправляет <br />
                        покупателям
                    </div>
                </div>
            </div>
        </section>
    )
}