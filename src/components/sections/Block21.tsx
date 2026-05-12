import '@/styles/block_21.css'
import Block19svg1 from "@/components/ui/Block19svg1";
import Block19svg2 from "@/components/ui/Block19svg2";
import Block21svg1 from "@/components/ui/Block21svg1";

export default function Block21() {
    return (
        <section className='cst-block-21-section'>

            <div className='cst-block-21-title'>
                От заявки <br />
                до результата <span className="cst-block-21-title-blue">за 6 шагов</span>
            </div>

            <div className='cst-block-21-card-container'>
                <div className='cst-block-21-card cst-block-21-card-arrow-right'>
                    <div className='cst-block-21-card-step'>
                        Шаг 1
                    </div>
                    <div className='cst-block-21-card-text'>
                        Разбираем ситуацию<br />
                        <span className="cst-block-21-card-text-blue">на созвоне</span>
                    </div>
                </div>
                <div className='cst-block-21-card cst-block-21-card-arrow-right'>
                    <div className='cst-block-21-card-step'>
                        Шаг 2
                    </div>
                    <div className='cst-block-21-card-text'>
                        Готовим
                        <span className="cst-block-21-card-text-blue"> стратегию <br /> и расчёт</span>
                    </div>
                </div>
                <div className='cst-block-21-card'>
                    <div className='cst-block-21-card-step'>
                        Шаг 3
                    </div>
                    <div className='cst-block-21-card-text'>
                        Заключаем<br/>
                        <span className="cst-block-21-card-text-blue">договор</span>
                    </div>
                </div>
                <div className='cst-block-21-card cst-block-21-card-arrow-right'>
                    <div className='cst-block-21-card-step'>
                        Шаг 4
                    </div>
                    <div className='cst-block-21-card-text'>
                        Подключаем
                        <span className="cst-block-21-card-text-blue"> работу <br />на кабинете</span>
                    </div>
                </div>
                <div className='cst-block-21-card cst-block-21-card-arrow-right'>
                    <div className='cst-block-21-card-step'>
                        Шаг 5
                    </div>
                    <div className='cst-block-21-card-text'>
                        Обрабатываем<br/>
                        <span className="cst-block-21-card-text-blue">негативные отзывы</span>
                    </div>
                </div>
                <div className='cst-block-21-card'>
                    <div className='cst-block-21-card-step'>
                        Шаг 6
                    </div>
                    <div className='cst-block-21-card-text'>
                        Получаем<br/>
                        <span className="cst-block-21-card-text-blue">результат</span>
                    </div>
                </div>
                <div className="cst-block-21-card-svg-arrow">
                    <Block21svg1 />
                </div>
            </div>
        </section>
    )
}