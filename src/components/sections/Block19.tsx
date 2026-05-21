'use client'
import { useState } from 'react'
import style from '@/styles/block_19.module.css'
import Block19svg1 from "@/components/ui/Block19svg1"
import Block19svg2 from "@/components/ui/Block19svg2"
import { rich } from '@/lib/richText'

const TAG_LABEL = '<b>Кейсы</b> REPUTA'
const TITLE = 'Работали с <blue> 100+ нишами.</blue> Посмотрите <blue>рост рейтинга</blue> наших клиентов'

const CARDS = [
    { src: '/images/Block19Img1.png', alt: 'Block19Img1' },
    { src: '/images/Block19Img2.png', alt: 'Block19Img2' },
    { src: '/images/Block19Img3.png', alt: 'Block19Img3' },
    { src: '/images/Block19Img4.png', alt: 'Block19Img4' },
    { src: '/images/Block19Img5.png', alt: 'Block19Img5' },
    { src: '/images/Block19Img6.png', alt: 'Block19Img6' },
    { src: '/images/Block19Img7.png', alt: 'Block19Img7' },
    { src: '/images/Block19Img8.png', alt: 'Block19Img8' },
    { src: '/images/Block19Img9.png', alt: 'Block19Img9' },
    { src: '/images/Block19Img10.png', alt: 'Block19Img10' },
    { src: '/images/Block19Img11.png', alt: 'Block19Img11' },
]

const titleTags = {
    blue: (c: string | null, k: number) => (
        <span key={k} className={style.cstBlock19titleBlue}>{c}</span>
    ),
}

const VISIBLE = 2

export default function Block19() {
    const [index, setIndex] = useState(0)
    const maxIndex = CARDS.length - VISIBLE

    return (
        <section className={style.cstBlock19section}>
            <div className={style.cstBlock19ownManager}>
                {rich(TAG_LABEL)}
            </div>

            <div className={style.cstBlock19title}>
                {rich(TITLE, titleTags)}
            </div>

            {/* Desktop */}
            <div className={style.cstBlock19cardContainer}>
                <button
                    className={`${style.cstBlock19cardArrow} ${style.arrowLeft} ${index === 0 ? style.cstBlock19arrowDisabled : ''}`}
                    onClick={() => setIndex(i => Math.max(0, i - 1))}
                    disabled={index === 0}
                    aria-label="Назад"
                >
                    <Block19svg1/>
                </button>
                {CARDS.slice(index, index + VISIBLE).map((card) => (
                    <div key={card.src} className={style.cstBlock19card}>
                        <img src={card.src} alt={card.alt}/>
                    </div>
                ))}
                <button
                    className={`${style.cstBlock19cardArrow} ${style.arrowRight} ${index >= maxIndex ? style.cstBlock19arrowDisabled : ''}`}
                    onClick={() => setIndex(i => Math.min(maxIndex, i + 1))}
                    disabled={index >= maxIndex}
                    aria-label="Вперёд"
                >
                    <Block19svg2/>
                </button>
            </div>

            {/* Mobile slider */}
            <div className={style.cstBlock19mobileSlider}>
                <div className={style.cstBlock19mobileCard}>
                    <img src={CARDS[index].src} alt={CARDS[index].alt}/>
                </div>
                <div className={style.cstBlock19mobileControls}>
                    <button
                        className={`${style.cstBlock19mobileArrow} ${index === 0 ? style.cstBlock19arrowDisabled : ''}`}
                        onClick={() => setIndex(i => Math.max(0, i - 1))}
                        disabled={index === 0}
                        aria-label="Назад"
                    >
                        <Block19svg1/>
                    </button>
                    <button
                        className={`${style.cstBlock19mobileArrow} ${index === CARDS.length - 1 ? style.cstBlock19arrowDisabled : ''}`}
                        onClick={() => setIndex(i => Math.min(CARDS.length - 1, i + 1))}
                        disabled={index === CARDS.length - 1}
                        aria-label="Вперёд"
                    >
                        <Block19svg2/>
                    </button>
                </div>
            </div>
        </section>
    )
}
