import Image from 'next/image';
import style from '@/styles/block_9.module.css';
import WhiteButton from '@/components/buttons/WhiteButton/WhiteButton';
import { rich } from '@/lib/richText';

const TITLE = 'Попробуйте REPUTA<b> бесплатно 14 дней</b>';
const MOBILE_DESCRIPTION = 'Установите приложение через App Store и Google Play'
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>';
const CTA_HREF = 'https://app.reputa.ru';

const FEATURES = [
    'Простое подключение <b>за 5 минут</b>',
    'Окупаемость за счёт <b>роста воронки и допродаж</b>',
    'Работа по <b>проверенным сценариям</b>',
];

const SECTION_IMAGE = { src: '/images/Block9.png', alt: 'Интерфейс REPUTA' };

export default function Block9() {
    return (
        <section className={style.cstBlock9section}>
            <div className={style.cstBlock9titleContainer}>
                <div className={style.cstBlock9title}>
                    {rich(TITLE)}
                </div>
                <div className={style.cstBlock9mobileDescription}>
                    {rich(MOBILE_DESCRIPTION)}
                </div>

                <div className={style.cstBlock9descriptionContainer}>
                    {FEATURES.map((text) => (
                        <div key={text} className={style.cstBlock9description}>
                            {rich(text)}
                        </div>
                    ))}
                </div>

                <div className={style.cstBlock9desktopDiv}>
                    <WhiteButton href={CTA_HREF}>{rich(CTA_LABEL)}</WhiteButton>
                </div>

            </div>

            <div className={style.cstBlock9titleImage}>
                <Image
                    src={SECTION_IMAGE.src}
                    alt={SECTION_IMAGE.alt}
                    width={567}
                    height={480}
                    className={style.cstBlock9phoneImage}
                />
            </div>
        </section>
    );
}
