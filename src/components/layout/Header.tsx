'use client'

import style from '@/styles/header.module.css'
import Logo from '@/components/ui/Logo'
import ArrowDownIcon from '@/components/ui/ArrowDownIcon'
import HeaderProductIcon1 from '@/components/ui/HeaderProductIcon1'
import HeaderProductIcon2 from '@/components/ui/HeaderProductIcon2'
import HeaderProductIcon3 from '@/components/ui/HeaderProductIcon3'
import HeaderProductIcon4 from '@/components/ui/HeaderProductIcon4'
import TelegramIcon from '@/components/ui/TelegramIcon'
import VkIcon from "@/components/ui/VkIcon";
import MaxIcon from "@/components/ui/MaxIcon";
import YouTubeIcon from "@/components/ui/YouTubeIcon";
import DzenIcon from "@/components/ui/DzenIcon";
import {ROUTES} from "@/lib/routes";
import RegisterButton from "@/components/buttons/RegisterButton/RegisterButton";
import LoginButton from "@/components/buttons/LoginButton/LoginButton";
import {useEffect, useRef, useState} from "react";
import Burger from "@/components/ui/Burger";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const productsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header>
            <div className={style.cstHeader}>
                <a href={ROUTES.home} className={style.cstCenterDiv}>
                    <Logo/>
                </a>
                <div className={`${style.cstCenterDiv} ${style.cstGapHeaderDiv}`}>
                    <div
                        ref={productsRef}
                        className={style.cstHeaderProducts}
                        onClick={() => setIsOpen(prev => !prev)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <span className={`${style.cstHeaderText} ${isOpen ? style.cstProductSpanOpen : ''}`}>Продукты</span>
                        <div className={`${style.cstProductArrow} ${isOpen ? style.cstProductArrowOpen : ''}`}>
                            <ArrowDownIcon/>
                        </div>

                        <div className={`${style.cstHeaderDropDown} ${isOpen ? style.cstHeaderDropDownOpen : ''}`}>
                            <div className={style.cstHeaderDropDownRow}>
                                <HeaderProductIcon1 />
                                <a className={style.cstHeaderDropDownLink} href={ROUTES.products.negativeReviews}>Удаление негативных отзывов</a>
                            </div>
                            <div className={style.cstHeaderDropDownRow}>
                                <HeaderProductIcon2 />
                                <a className={style.cstHeaderDropDownLink} href={ROUTES.products.reviews}>Ответы на отзывы и вопросы</a>
                            </div>
                            <div className={style.cstHeaderDropDownRow}>
                                <HeaderProductIcon3 />
                                <a className={style.cstHeaderDropDownLink} href={ROUTES.products.newsletter}>Рассылки покупателям</a>
                            </div>
                            <div className={style.cstHeaderDropDownRow}>
                                <HeaderProductIcon4 />
                                <a className={style.cstHeaderDropDownLink} href={ROUTES.products.chats}>Чаты с покупателями</a>
                            </div>
                        </div>

                    </div>
                    <a href={ROUTES.pricing} className={style.cstHeaderText}>Цены</a>
                    <a href={ROUTES.calculator} className={style.cstHeaderText}>Калькулятор</a>
                    <a href={ROUTES.partners} className={style.cstHeaderText}>Партнёры</a>
                    <a href={ROUTES.about} className={style.cstHeaderText}>О нас</a>
                    <a href={ROUTES.blog} className={style.cstHeaderText}>Блог</a>
                </div>

                <div className={style.cstHeaderLinksIcons}>
                    <a target="_blank" href={ROUTES.social.telegram}><TelegramIcon/></a>
                    <a target="_blank" href={ROUTES.social.vk}><VkIcon/></a>
                    <a target="_blank" href={ROUTES.social.max}><MaxIcon/></a>
                    <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon/></a>
                    <a target="_blank" href={ROUTES.social.dzen}><DzenIcon/></a>
                </div>

                <div className={style.cstHeaderBtnContainer}>
                    <LoginButton />
                    <RegisterButton />
                </div>

                <div className={style.cstHeaderBtnBurger}>
                    <Burger/>
                </div>
            </div>
        </header>
    )
}
