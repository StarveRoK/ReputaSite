import Image from 'next/image';
import style from '@/styles/block_3.module.css';
import Block3GooglePlay from '@/components/ui/Block3GooglePlay';
import { rich } from '@/lib/richText';

const TITLE = '<b>Приложение</b>REPUTA на вашем устройстве';
const DESCRIPTION = 'Установите приложение через App Store и Google Play';

const APP_STORE_IMAGE = { src: '/images/Block3AppStore.png', alt: 'App Store' };
const PHONE_IMAGE = { src: '/images/Block3Phone.png', alt: 'Мобильное приложение REPUTA' };
const BACKGROUND_IMAGE = { src: '/images/Block3BackgroundPhone.png', alt: '' };

export default function Block3() {
    return (
        <section className={style.cstBlock3section}>
            <div className={style.cstBlock3titleContainer}>
                <div className={style.cstBlock3title}>
                    {rich(TITLE)}
                </div>
                <div className={style.cstBlock3description}>
                    {rich(DESCRIPTION)}
                </div>
            </div>
            <div className={style.cstBlock3titleApps}>
                <div className={style.cstBlock3titleContainerAppStore}>
                    <Image
                        src={APP_STORE_IMAGE.src}
                        alt={APP_STORE_IMAGE.alt}
                        width={137}
                        height={35}
                        className={style.cstBlock3titleAppStore}
                    />
                </div>
                <div className={style.cstBlock3titleContainerGooglePlay}>
                    <Block3GooglePlay />
                </div>
            </div>
            <div className={style.cstBlock3titleImages}>
                <Image
                    src={PHONE_IMAGE.src}
                    alt={PHONE_IMAGE.alt}
                    width={497}
                    height={480}
                    className={style.cstBlock3phoneImage}
                />
                <Image
                    src={BACKGROUND_IMAGE.src}
                    alt={BACKGROUND_IMAGE.alt}
                    width={559}
                    height={480}
                    className={style.cstBlock3backgroundPhoneImage}
                />
            </div>
        </section>
    );
}
