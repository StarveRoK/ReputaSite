import Image from 'next/image';
import style from '@/styles/block_6.module.css';
import PhoneSVG from '@/components/ui/PhoneSVG';
import HeadphoneSVG from '@/components/ui/HeadphoneSVG';
import { ROUTES } from '@/lib/routes';
import { rich } from '@/lib/richText';

const TITLE = 'Остались <br/><blue>вопросы?</blue>';
const DESCRIPTION = 'Оставьте номер телефона — наш менеджер <br/>перезвонит в удобное для вас время';
const PHONE_PLACEHOLDER = '+7 (___) ___-__-__';
const BUTTON_LABEL = 'Перезвонить мне';
const AGREEMENT_TEXT = 'Соглашаюсь с условиями<br/><link>политики конфиденциальности</link>';

const HEADPHONES_IMAGE = { src: '/images/Block6Headphones.png', alt: 'Поддержка REPUTA' };

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock6titleBlue}>{c}</span>
    ),
};

const agreementTags = {
    link: (c: string | null, k: number) => (
        <a key={k} href={ROUTES.legal.privacyPolicy} className={style.cstBlock6agreementLink}>{c}</a>
    ),
};

export default function Block6() {
    return (
        <section className={style.cstBlock6section}>
            <div className={style.cstBlock6titleContainer}>
                <div className={style.cstBlock6title}>
                    {rich(TITLE, titleTags)}
                </div>
                <div className={style.cstBlock6description}>
                    {rich(DESCRIPTION)}
                </div>
            </div>

            <div className={style.cstBlock6inputContainer}>
                <div className={style.cstBlock6inputBlock}>
                    <PhoneSVG />
                    <input type="text" className={style.cstBlock6input} placeholder={PHONE_PLACEHOLDER} />
                </div>
                <button className={style.cstBlock6button}>
                    {BUTTON_LABEL}
                    <HeadphoneSVG />
                </button>
            </div>

            <div className={style.cstBlock6agreementContainer}>
                <input type="checkbox" className={style.cstBlock6agreementCheckbox} />
                <div className={style.cstBlock6agreementText}>
                    {rich(AGREEMENT_TEXT, agreementTags)}
                </div>
            </div>

            <div className={style.cstBlock6titleImages}>
                <Image
                    src={HEADPHONES_IMAGE.src}
                    alt={HEADPHONES_IMAGE.alt}
                    width={593}
                    height={420}
                    className={style.cstBlock6headphones}
                />
            </div>
        </section>
    );
}
