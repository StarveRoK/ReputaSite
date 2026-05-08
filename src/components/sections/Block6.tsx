import '@/styles/block_6.css'
import PhoneSVG from "@/components/ui/PhoneSVG";
import HeadphoneSVG from "@/components/ui/HeadphoneSVG";

export default function Block6() {
    return (
        <section className='cst-block-6-section'>
            <div className='cst-block-6-title-container'>
                <div className='cst-block-6-title'>
                    Остались <br />
                    <span className='cst-block-6-title-blue'>вопросы?</span>
                </div>
                <div className='cst-block-6-description'>
                    Оставьте номер телефона — наш менеджер <br />
                    перезвонит в удобное для вас время
                </div>
            </div>

            <div className='cst-block-6-input-container'>
                <div className="cst-block-6-input-block">
                    <PhoneSVG />
                    <input type='text' className="cst-block-6-input" placeholder='+7 (___) ___-__-__'/>
                </div>
                <button className="cst-block-6-button">
                    Перезвонить мне
                    <HeadphoneSVG />
                </button>
            </div>

            <div className="cst-block-6-agreement-container">
                <input type='checkbox' className="cst-block-6-agreement-checkbox"/>
                <div className="cst-block-6-agreement-text">
                    Соглашаюсь с условиями<br/>
                    <a href="#" className="cst-block-6-agreement-link">политики конфиденциальности</a>
                </div>
            </div>

            <div className='cst-block-6-title-images'>
                <img src="/images/Block6Headphones.png" alt="Block6Headphones" className="cst-block-6-headphones"/>
            </div>
        </section>
    )
}