import style from '@/styles/hero.module.css'
import Benefit1 from "@/components/ui/Benefit1";
import Benefit2 from "@/components/ui/Benefit2";
import Benefit3 from "@/components/ui/Benefit3";
import Benefit4 from "@/components/ui/Benefit4";
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function HeroSection() {
    return (
        <section className={style.cstHeroSection}>
            <ForSellerButton hasStar={true}>Для селлеров</ForSellerButton>

            <span className={style.cstFeatures}>
                Управляем отзывами <br/>и репутацией
                <span className={style.cstFeaturesBlue}> для роста <br/>ваших продаж</span>
            </span>

            <span className={style.cstFeatures2}>
                Убираем негатив, автоматизируем ответы на отзывы, вопросы с помощью AI
            </span>

            <BlueButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></BlueButton>


            <div className={style.cstSocialProofContainer}>
                <div className={style.cstSocialProofIconsContainer}>
                    <img src="/images/social_proof_1.png" alt='social_proof_1' className={style.cstSocialProofImage}/>
                    <img src="/images/social_proof_2.png" alt='social_proof_2' className={style.cstSocialProofImage}/>
                    <img src="/images/social_proof_3.png" alt='social_proof_3' className={style.cstSocialProofImage}/>
                    <div className={style.cstSocialProofImageBackground}>700+</div>
                </div>
                <span className={style.cstSocialProofText}><b>Более 700 продавцов</b> <br/>уже растут с Reputa</span>
            </div>

            <div className={style.cstHeroBenefitContainer}>
                <div className={style.cstHeroBenefitBlock}>
                    <div className={style.cstHeroBenefitIcon}><Benefit1/></div>
                    <div className={style.cstHeroBenefitTextContainer}>
                        <span className={style.cstHeroBenefitTitle}>Безопасно</span>
                        <span className={style.cstHeroBenefitDescription}>Работаем в рамках <br/> правил площадки</span>
                    </div>
                </div>
                <div className={style.cstHeroBenefitBlock}>
                    <div className={style.cstHeroBenefitIcon}><Benefit2/></div>
                    <div className={style.cstHeroBenefitTextContainer}>
                        <span className={style.cstHeroBenefitTitle}>Конфиденциально</span>
                        <span className={style.cstHeroBenefitDescription}>Ваш магазин и данные <br/> под защитой</span>
                    </div>
                </div>
                <div className={style.cstHeroBenefitBlock}>
                    <div className={style.cstHeroBenefitIcon}><Benefit3/></div>
                    <div className={style.cstHeroBenefitTextContainer}>
                        <span className={style.cstHeroBenefitTitle}>Быстро</span>
                        <span
                            className={style.cstHeroBenefitDescription}>Оперативная реакция <br/> на каждый отзыв</span>
                    </div>
                </div>
                <div className={style.cstHeroBenefitBlock}>
                    <div className={style.cstHeroBenefitIcon}><Benefit4/></div>
                    <div className={style.cstHeroBenefitTextContainer}>
                        <span className={style.cstHeroBenefitTitle}>Результативно</span>
                        <span className={style.cstHeroBenefitDescription}>Выше рейтинг — <br/>больше продаж</span>
                    </div>
                </div>
            </div>
            <div className={style.cstHeroBigImage}>
                <img src="/images/hero_big_image.png" alt="hero_big_image"/>
            </div>
        </section>
    )
}
