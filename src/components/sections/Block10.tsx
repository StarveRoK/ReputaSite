import '@/styles/block_10.css'
import StarSVG from "@/components/ui/StarSVG";
import PlaySVG from "@/components/ui/PlaySVG";

export default function Block10() {
    return (
        <section className='cst-block-10-section'>
            <div className='cst-block-10-background'>
                <StarSVG/>
                <span className='cst-block-10-background-text'>
                    Для селлеров
                    <b> WB и OZON</b>
                </span>
            </div>

            <span className="cst-block-10-features">
                ИИ-ответы <br/>
                на отзывы и вопросы<br/>
                <span className="cst-block-10-features-blue"> которые увеличивают <br/> продажи</span>
            </span>

            <span className="cst-block-10-features-2">
                Отвечает за 1 секунду: закрывает вопросы <br/>
                покупателей, отрабатывает негатив <br/>
                и рекомендует ваши товары в положительных <br/>
                отзывах без участия менеджера
            </span>

            <button className='cst-block-10-btn'>
                Оставить заявку
                <PlaySVG />
            </button>

            <div className='cst-block-10-big-image'>
                <img src="/images/Block10.png" alt="Block10" />
            </div>
        </section>
    )
}