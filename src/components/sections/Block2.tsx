import Image from 'next/image';
import style from '@/styles/block_2.module.css';
import LittleStarSVG from '@/components/ui/LittleStarSVG';
import BlueButton from '@/components/buttons/BlueButton/BlueButton';
import { ROUTES } from '@/lib/routes';
import { rich } from '@/lib/richText';

const TITLE = '4 инструмента REPUTA для роста продаж на маркетплейсах <blue>в одной подписке </blue>';
const CTA_LABEL = 'Попробовать бесплатно <b>14 дней</b>';
const MORE_LABEL = 'Подробнее об инструменте';

const PRODUCTS = [
    {
        img: '/images/Block2Img1.png',
        alt: 'Улучшение рейтинга',
        number: '1',
        title: 'Улучшение рейтинга и <blue> удаление негатива</blue>',
        description: 'Работаем в несколько этапов: жалобы, диалог с покупателями и юридические обращения в поддержку, чтобы безопасно убирать до 90% негативных отзывов',
        href: ROUTES.products.negativeReviews,
    },
    {
        img: '/images/Block2Img2.png',
        alt: 'Ответы на отзывы',
        number: '2',
        title: '<blue>Ответы на отзывы</blue> и вопросы',
        description: 'ИИ-бот обрабатывает положительные и негативные отзывы, отвечает на вопросы покупателей и рекомендует подходящие товары',
        href: ROUTES.products.reviews,
    },
    {
        img: '/images/Block2Img3.png',
        alt: 'Чаты с покупателями',
        number: '3',
        title: '<blue>Чаты</blue> с покупателями',
        description: 'Работа со всеми чатами в одном месте: быстро, работы',
        href: ROUTES.products.chats,
    },
    {
        img: '/images/Block2Img4.png',
        alt: 'Рассылки по базе покупателей',
        number: '4',
        title: '<blue>Рассылки</blue> по базе покупателей',
        description: 'Работа с базой покупателей: напоминание о товарах, акциях, стимулирование повторных покупок, сбор обратной связи',
        href: ROUTES.products.newsletter,
    },
];

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock2titleBlue}>{c}</span>
    ),
};

const productTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock2productDescriptionTitleBlue}>{c}</span>
    ),
};

export default function Block2() {
    return (
        <section className={style.cstBlock2section}>
            <div className={style.cstBlock2title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock2productContainer}>
                <div className={style.cstBlock2productLittleStar}>
                    <LittleStarSVG />
                </div>

                {PRODUCTS.map((product) => (
                    <div key={product.number} className={style.cstBlock2productBlock}>
                        <div className={style.cstBlock2productIcon}>
                            <Image
                                src={product.img}
                                alt={product.alt}
                                width={87}
                                height={87}
                                className={style.cstBlock2image}
                            />
                        </div>
                        <div className={style.cstBlock2productDescriptionContainer}>
                            <div className={style.cstBlock2productDescriptionNumber}>{product.number}</div>
                            <div className={style.cstBlock2productDescriptionTitle}>
                                {rich(product.title, productTitleTags)}
                            </div>
                            <div className={style.cstBlock2productDescriptionDescription}>
                                {rich(product.description)}
                            </div>
                            <a href={product.href} className={style.cstBlock2productDescriptionMore}>
                                {MORE_LABEL}
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <BlueButton href="https://app.reputa.ru" label={CTA_LABEL} />
        </section>
    );
}
