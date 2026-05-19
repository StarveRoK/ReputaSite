import style from '@/styles/hero.module.css'
import Benefit1 from "@/components/ui/Benefit1";
import Benefit2 from "@/components/ui/Benefit2";
import Benefit3 from "@/components/ui/Benefit3";
import Benefit4 from "@/components/ui/Benefit4";
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";
import { rich } from "@/lib/richText";

const TAG_LABEL = 'Для селлеров';

const HEADING = 'Управляем отзывами и репутацией% для роста ваших продаж%';

const SUBTITLE = 'Убираем негатив, автоматизируем ответы на отзывы, вопросы с помощью AI';

const CTA_HREF = 'https://app.reputa.ru';
const CTA_TEXT = 'Попробовать бесплатно <b>14 дней</b>';

const SOCIAL_PROOF_COUNT = '700+';
const SOCIAL_PROOF_TEXT = '<b>Более 700 продавцов</b> уже растут с Reputa';
const SOCIAL_PROOF_IMAGES = [
    { src: '/images/social_proof_1.png', alt: 'social_proof_1' },
    { src: '/images/social_proof_2.png', alt: 'social_proof_2' },
    { src: '/images/social_proof_3.png', alt: 'social_proof_3' },
];

const BENEFITS = [
    { Icon: Benefit1, title: 'Безопасно',       description: 'Работаем в рамках правил площадки' },
    { Icon: Benefit2, title: 'Конфиденциально', description: 'Ваш магазин и данные под защитой' },
    { Icon: Benefit3, title: 'Быстро',          description: 'Оперативная реакция на каждый отзыв' },
    { Icon: Benefit4, title: 'Результативно',   description: 'Выше рейтинг — больше продаж' },
];

const HERO_IMAGE = { src: '/images/hero_big_image.png', alt: 'hero_big_image' };

export default function HeroSection() {
    return (
        <section className={style.cstHeroSection}>
            <ForSellerButton hasStar={true}>{TAG_LABEL}</ForSellerButton>

            <span className={style.cstFeatures}>
                {rich(HEADING, undefined, {
                    '%': (c, k) => <span key={k} className={style.cstFeaturesBlue}>{c}</span>,
                })}
            </span>

            <span className={style.cstFeatures2}>{SUBTITLE}</span>

            <BlueButton href={CTA_HREF} label={CTA_TEXT} />

            <div className={style.cstSocialProofContainer}>
                <div className={style.cstSocialProofIconsContainer}>
                    {SOCIAL_PROOF_IMAGES.map((img) => (
                        <img key={img.src} src={img.src} alt={img.alt} className={style.cstSocialProofImage}/>
                    ))}
                    <div className={style.cstSocialProofImageBackground}>{SOCIAL_PROOF_COUNT}</div>
                </div>
                <span className={style.cstSocialProofText}>
                    {rich(SOCIAL_PROOF_TEXT)}
                </span>
            </div>
            <div className={style.cstHeroBigImage}>
                <img src={HERO_IMAGE.src} alt={HERO_IMAGE.alt}/>
            </div>
            <div className={style.cstHeroBenefitContainer}>
                {BENEFITS.map(({Icon, title, description}) => (
                    <div key={title} className={style.cstHeroBenefitBlock}>
                        <div className={style.cstHeroBenefitIcon}><Icon/></div>
                        <div className={style.cstHeroBenefitTextContainer}>
                            <span className={style.cstHeroBenefitTitle}>{title}</span>
                            <span className={style.cstHeroBenefitDescription}>{description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
