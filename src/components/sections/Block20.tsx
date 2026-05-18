'use client'
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import style from '@/styles/block_20.module.css'
import Block19svg1 from "@/components/ui/Block19svg1"
import Block19svg2 from "@/components/ui/Block19svg2"

const images = [
    { src: "/images/Block20Img1.png", alt: "Block20Img1" },
    { src: "/images/Block20Img2.png", alt: "Block20Img2" },
    { src: "/images/Block20Img3.png", alt: "Block20Img3" },
    { src: "/images/Block20Img4.png", alt: "Block20Img4" },
]

export default function Block20() {
    const [index, setIndex] = useState(0)
    const viewportRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    const go = useCallback((dir: 1 | -1) => {
        const next = index + dir
        if (next < 0 || next >= images.length) return
        const viewport = viewportRef.current
        const track = trackRef.current
        if (!viewport || !track) return
        const img = track.children[next] as HTMLElement
        if (img) viewport.scrollTo({ left: img.offsetLeft, behavior: 'smooth' })
        setIndex(next)
    }, [index])

    return (
        <section className={style.cstBlock20section}>
            <div className={style.cstBlock20ownManager}>
                <b>Отзывы</b>
            </div>

            <div className={style.cstBlock20title}>
                Что пишут <br/>
                <span className={style.cstBlock20titleBlue}>наши клиенты</span>
            </div>

            <div className={style.cstBlock20row}>
                <button
                    className={`${style.cstBlock20cardArrow} ${style.arrowLeft} ${index === 0 ? style.arrowDisabled : ''}`}
                    onClick={() => go(-1)}
                    disabled={index === 0}
                    aria-label="Назад"
                >
                    <Block19svg1 />
                </button>

                <div className={style.cstBlock20viewportWrapper}>
                    <div className={style.cstBlock20viewport} ref={viewportRef}>
                        <div className={style.cstBlock20track} ref={trackRef}>
                            {images.map((img) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={250}
                                    style={{ height: '250px', width: 'auto', flexShrink: 0, display: 'block' }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    className={`${style.cstBlock20cardArrow} ${style.arrowRight} ${index === images.length - 1 ? style.arrowDisabled : ''}`}
                    onClick={() => go(1)}
                    disabled={index === images.length - 1}
                    aria-label="Вперёд"
                >
                    <Block19svg2 />
                </button>
            </div>
        </section>
    )
}
