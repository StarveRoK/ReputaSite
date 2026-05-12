import '@/styles/block_13.css'
import StarSVG from "@/components/ui/StarSVG";
import PlaySVG from "@/components/ui/PlaySVG";

export default function Block13() {
    return (
        <section className='cst-block-13-section'>
            <div className='cst-block-13-background'>
                <StarSVG/>
                <span className='cst-block-13-background-text'>
                    ИИ для
                    <b> селлеров ВБ</b>
                </span>
            </div>

            <span className="cst-block-13-features">
                Удаляем <br/>
                и исправляем<br/>
                <span className="cst-block-13-features-blue"> до 90% негативных<br/> отзывов</span>
            </span>

            <span className="cst-block-13-features-2">
                <ul>
                    <li>Для селлеров WB и OZON</li>
                    <li>С оплатой за результат</li>
                    <li>Без нарушения оферты</li>
                    <li>Первые результаты в течении 48 часов</li>
                </ul>
            </span>

            <button className='cst-block-13-btn'>
                Оставить заявку
                <PlaySVG />
            </button>

            <div className='cst-block-13-big-image'>
                <img src="/images/Block13.png" alt="Block13" />
            </div>
        </section>
    )
}