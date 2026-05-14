import '@/styles/hero.css'
import StarSVG from "@/components/ui/StarSVG";
import PlaySVG from "@/components/ui/PlaySVG";
import Benefit1 from "@/components/ui/Benefit1";
import Benefit2 from "@/components/ui/Benefit2";
import Benefit3 from "@/components/ui/Benefit3";
import Benefit4 from "@/components/ui/Benefit4";

export default function HeroSection() {
    return (
        <section className='cst-hero-section'>
            <div className='cst-background'>
                <StarSVG/>
                <span className='cst-background-text'>
                    ИИ для
                    <b> селлеров ВБ</b>
                </span>
            </div>

            <span className="cst-features">
                Управляем отзывами <br/>и репутацией
                <span className="cst-features-blue"> для роста <br/>ваших продаж</span>
            </span>

            <span className="cst-features-2">
                Убираем негатив, автоматизируем ответы на отзывы, вопросы с помощью AI
            </span>

            <button className='cst-hero-btn'>
                Попробовать бесплатно <b>14 дней</b>
                <PlaySVG />
            </button>

            <div className="cst-social-proof-container">
                <div className="cst-social-proof-icons-container">
                    <img src="/images/social_proof_1.png" alt='social_proof_1' className="cst-social-proof-image"/>
                    <img src="/images/social_proof_2.png" alt='social_proof_2' className="cst-social-proof-image"/>
                    <img src="/images/social_proof_3.png" alt='social_proof_3' className="cst-social-proof-image"/>
                    <div className="cst-social-proof-image-background">1000+</div>
                </div>
                <span className="cst-social-proof-text"><b>Более 1000 продавцов</b> <br/>уже растут с Reputa</span>
            </div>

            <div className="cst-hero-benefit-container">
                <div className="cst-hero-benefit-block">
                    <div className="cst-hero-benefit-icon"><Benefit1 /></div>
                    <div className="cst-hero-benefit-text-container">
                        <span className="cst-hero-benefit-title">Безопасно</span>
                        <span className="cst-hero-benefit-description">Работаем в рамках <br/> правил площадки</span>
                    </div>
                </div>
                <div className="cst-hero-benefit-block">
                    <div className="cst-hero-benefit-icon"><Benefit2 /></div>
                    <div className="cst-hero-benefit-text-container">
                        <span className="cst-hero-benefit-title">Конфиденциально</span>
                        <span className="cst-hero-benefit-description">Ваш магазин и данные <br/> под защитой</span>
                    </div>
                </div>
                <div className="cst-hero-benefit-block">
                    <div className="cst-hero-benefit-icon"><Benefit3 /></div>
                    <div className="cst-hero-benefit-text-container">
                        <span className="cst-hero-benefit-title">Быстро</span>
                        <span className="cst-hero-benefit-description">Оперативная реакция <br /> на каждый отзыв</span>
                    </div>
                </div>
                <div className="cst-hero-benefit-block">
                    <div className="cst-hero-benefit-icon"><Benefit4 /></div>
                    <div className="cst-hero-benefit-text-container">
                        <span className="cst-hero-benefit-title">Результативно</span>
                        <span className="cst-hero-benefit-description">Выше рейтинг — <br />больше продаж</span>
                    </div>
                </div>
            </div>
            <div className='cst-hero-big-image'>
                <img src="/images/hero_big_image.png" alt="hero_big_image" />
            </div>
        </section>
    )
}
