import style from '@/styles/block_11.module.css'
import StarSVG from "@/components/ui/StarSVG"
import Block11svg1 from "@/components/ui/Block11svg1"
import { rich } from '@/lib/richText'

type B11Product = {
    src: string
    alt: string
    title: string
    rating: string
    link: string
}

type B11Card = {
    badge: string
    title: string
    description: string
    reviewer: { letter: string; name: string; stars: string; hasNegativeStar?: boolean; text: string }
    aiName: string
    aiReplies: string[]
    product?: B11Product
}

const CARDS: B11Card[] = [
    {
        badge: 'Рекомендации AI',
        title: '<blue>ИИ предлагает ваши <br/>товары</blue> в ответах<br/>на отзыв',
        description: 'увеличивая <br/>допродажи <blue>на 15%</blue>',
        reviewer: {
            letter: 'А',
            name: 'Анна',
            stars: '★★★★★',
            text: 'Хороший крем, быстро впитывается, но хотелось бы больше увлажнения',
        },
        aiName: 'Reputa AI',
        aiReplies: [
            'Анна, спасибо за отзыв! Рекомендуем обратить внимание на Увлажняющую сыворотку Reputa — она отлично дополнит крем и усилит эффект увлажнения',
        ],
        product: {
            src: '/images/Block11Img1.png',
            alt: 'Block11Img1.png',
            title: 'Увлажняющая сыворотка Reputa',
            rating: '★★★★★ 4.9',
            link: 'Перейти →',
        },
    },
    {
        badge: 'Работа с негативом',
        title: 'ИИ корректно <br/><blue>отвечает на негатив</blue>',
        description: 'и <blue>помогает сохранить <br/> лояльность </blue> даже <br/>недовольного покупателя',
        reviewer: {
            letter: 'И',
            name: 'Ирина',
            stars: '★★★★★',
            hasNegativeStar: true,
            text: 'Заказ пришёл с браком, упаковка была повреждена. Очень расстроена, больше заказывать не буду.',
        },
        aiName: 'Reputa AI',
        aiReplies: [
            'Ирина, здравствуйте! Нам очень жаль, что товар пришёл в таком состоянии. Понимаем ваше недовольство — это не тот опыт, который вы должны были получить',
            'Мы уже передали информацию в поддержку. Пожалуйста, напишите нам номер заказа, и мы поможем оформить замену товара или возврат средств',
        ],
    },
    {
        badge: 'Работа с вопросами',
        title: 'ИИ <blue>мгновенно  <br/>отвечает</blue> на вопросы',
        description: 'и помогает клиенту принять <br/>решение о покупке <br/><blue>без участия менеджера</blue>',
        reviewer: {
            letter: 'В',
            name: 'Виталий',
            stars: '',
            text: 'Подойдут ли эти наушники для тренировок и бега?',
        },
        aiName: 'Reputa AI',
        aiReplies: [
            'Здравствуйте, Виталий! Да, эти наушники подойдут для тренировок и бега: они хорошо держатся, защищены от влаги и обеспечивают стабильное соединение. Если вам важна длительная работа без подзарядки, это тоже хороший вариант для активного использования.',
        ],
        product: {
            src: '/images/Block11Img2.png',
            alt: 'Block11Img2.png',
            title: 'Беспроводные наушники Reputa Sport',
            rating: '★★★★★ 4.9',
            link: 'Перейти →',
        },
    },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock11titleBlue}>{c}</span>
    ),
}

const descriptionTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock11descriptionBlue}>{c}</span>
    ),
}

export default function Block11() {
    return (
        <section className={style.cstBlock11section}>
            {CARDS.map((card) => (
                <div key={card.badge} className={style.cstBlock11sectionContainer}>
                    <div className={style.cstBlock11sectionLeft}>
                        <div className={style.cstBlock11background}>
                            <StarSVG/>
                            <span className={style.cstBlock11backgroundText}>
                                {rich(card.badge)}
                            </span>
                        </div>
                        <span className={style.cstBlock11title}>
                            {rich(card.title, titleTags)}
                        </span>
                        <span className={style.cstBlock11description}>
                            {rich(card.description, descriptionTags)}
                        </span>
                    </div>
                    <div className={style.cstBlock11sectionRight}>
                        <div className={style.cstBlock11sectionRightName}>{card.reviewer.letter}</div>
                        <div className={style.cstBlock11sectionRightContainer}>
                            <div className={style.cstBlock11sectionNameTop}>
                                <div className={style.cstBlock11sectionRightNameMobile}>{card.reviewer.letter}</div>
                                <span className={style.cstBlock11sectionNameTopSpan}>{card.reviewer.name}</span>
                                {card.reviewer.stars && (
                                    <span className={style.cstBlock11sectionNameTopStar}>
                                        {card.reviewer.hasNegativeStar ? (
                                            <>★<span className={style.cstBlock11sectionNameTopStarBad}>★★★★</span></>
                                        ) : card.reviewer.stars}
                                    </span>
                                )}
                            </div>
                            <span className={style.cstBlock11sectionDescription}>
                                {card.reviewer.text}
                            </span>
                            <div className={style.cstBlock11sectionRightBot}>
                                <div className={style.cstBlock11sectionRightNameSub}>
                                    <Block11svg1/>
                                </div>
                                <div className={style.cstBlock11sectionRightContainerSub}>
                                    <div className={style.cstBlock11sectionRightNameSubContainer}>
                                        <div className={style.cstBlock11sectionRightNameSubMobile}><Block11svg1/></div>
                                        <span className={style.cstBlock11sectionNameTopAI}>{card.aiName}</span>
                                    </div>
                                    {card.aiReplies.map((reply, i) => (
                                        <span key={i} className={style.cstBlock11sectionDescriptionSub}>
                                            {reply}
                                        </span>
                                    ))}
                                    {card.product && (
                                        <div className={style.cstBlock11sectionItemContainer}>
                                            <div className={style.cstBlock11sectionItemImage}>
                                                <img src={card.product.src} alt={card.product.alt}/>
                                            </div>
                                            <div className={style.cstBlock11sectionItemDescription}>
                                                <span className={style.cstBlock11sectionItemTitle}>
                                                    {card.product.title}
                                                </span>
                                                <div className={style.cstBlock11sectionItemDescriptionDiv}>
                                                    <span className={style.cstBlock11sectionItemMark}>
                                                        {card.product.rating}
                                                    </span>
                                                    <span className={style.cstBlock11sectionItemLink}>{card.product.link}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
