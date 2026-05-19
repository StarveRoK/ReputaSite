import style from '@/styles/block_7.module.css';
import ReputaSVG from '@/components/ui/ReputaSVG';
import { rich } from '@/lib/richText';

const TITLE = 'Лидеры <blue> в репутационном </blue> <blue> менеджменте </blue>на маркетплейсах';

const STATS = [
    {
        title: '<blue>350 000</blue>',
        big: true,
        description: 'успешно отработанных негативных отзывов',
    },
    {
        title: '<blue>Стартап</blue> года',
        big: false,
        description: 'по версии MP Sellers Awards',
    },
    {
        title: 'Участники <blue>и спикеры</blue>',
        big: false,
        description: 'на выставках, форумах и конференциях',
    },
];

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock7titleBlue}>{c}</span>
    ),
};

const cardTitleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock7cardBlue}>{c}</span>
    ),
};

export default function Block7() {
    return (
        <section className={style.cstBlock7section}>
            <div className={style.cstBlock7ownManager}>
                <ReputaSVG />
            </div>

            <div className={style.cstBlock7title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock7cardContainer}>
                {STATS.map((item) => (
                    <div key={item.description} className={style.cstBlock7card}>
                        <div className={`${style.cstBlock7cardTitle}${item.big ? ` ${style.cstBlock7cardTitleBig}` : ''}`}>
                            {rich(item.title, cardTitleTags)}
                        </div>
                        <div className={style.cstBlock7cardDescription}>
                            {rich(item.description)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
