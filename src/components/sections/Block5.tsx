import style from '@/styles/block_5.module.css';
import { rich } from '@/lib/richText';

const TAG_LABEL = 'Ваш личный менеджер <b>24/7</b>';
const TITLE = 'От настройки  до автоматизации <blue> за 4 шага </blue>';

const STEPS = [
    { step: 'Шаг 1', description: 'Подключаем кабинет  через API' },
    { step: 'Шаг 2', description: 'Добавляете базу знаний,  настраиваете стиль  общения и допродажи' },
    { step: 'Шаг 3', description: 'Система анализирует  отзывы, вопросы  и чаты' },
    { step: 'Шаг 4', description: 'AI генерирует ответы  на основе вашей базы  знаний и отправляет  покупателям' },
];

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock5titleBlue}>{c}</span>
    ),
};

export default function Block5() {
    return (
        <section className={style.cstBlock5section}>
            <div className={style.cstBlock5ownManager}>
                {rich(TAG_LABEL)}
            </div>

            <div className={style.cstBlock5title}>
                {rich(TITLE, titleTags)}
            </div>

            <div className={style.cstBlock5cardContainer}>
                {STEPS.map((item) => (
                    <div key={item.step} className={style.cstBlock5card}>
                        <div className={style.cstBlock5step}>{item.step}</div>
                        <div className={style.cstBlock5img} />
                        <div className={style.cstBlock5descriptionContainer}>
                            <div className={style.cstBlock5stepMobile}>{item.step}</div>
                            <div className={style.cstBlock5description}>
                                {rich(item.description)}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
