import '@/styles/block_17.css'
import PlaySVG from "@/components/ui/PlaySVG";
import Block17svg1 from "@/components/ui/Block17svg1";
import Block17svg2 from "@/components/ui/Block17svg2";
import Block17svg3 from "@/components/ui/Block17svg3";

export default function Block17() {
    return (
        <section className='cst-block-17-section'>

            <div className='cst-block-17-title'>
                Почему REPUTA — <span className="cst-block-17-title-blue"> это безопасно?</span>
            </div>

            <div className='cst-block-17-card-container'>
                <div className='cst-block-17-card'>
                    <div className='cst-block-17-card-image'>
                        <Block17svg1 />
                    </div>
                    <div className='cst-block-17-card-title'>
                        Работа строго
                        <span className='cst-block-17-card-title-blue'> в рамках <br/></span>
                        правил маркетплейса
                    </div>
                    <div className='cst-block-17-card-description'>
                        Решаем вопросы через диалог <br/>
                        с покупателем и юридическое <br/>
                        обращения в поддержку
                    </div>
                </div>

                <div className='cst-block-17-card'>
                    <div className='cst-block-17-card-image'>
                        <Block17svg2 />
                    </div>
                    <div className='cst-block-17-card-title'>
                        Опыт на
                        <span className='cst-block-17-card-title-blue'> 550+ <br/></span>
                        кабинетах
                    </div>
                    <div className='cst-block-17-card-description'>
                        Отработанные алгоритмы <br/>
                        и скрипты на 350 000+ <br/>
                        негативных отзывов
                    </div>
                </div>

                <div className='cst-block-17-card-with-btn'>
                    <div className='cst-block-17-card'>
                    <div className='cst-block-17-card-image'>
                        <Block17svg3 />
                    </div>
                    <div className='cst-block-17-card-title'>
                        Работает <br />
                        <span className='cst-block-17-card-title-blue'>по договору</span>
                    </div>
                    <div className='cst-block-17-card-description'>
                        Оплата по факту выполненной <br />
                        работы, все договоренности <br />
                        закреплены юридически
                    </div>
                    </div>
                    <div className='cst-block-17-card-button'>
                        <b>700+ селлеров</b>
                        доверяют нам
                    </div>
                </div>
            </div>

        </section>
    )
}