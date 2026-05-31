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
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
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

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMobileOpen])

    const closeMobile = () => setIsMobileOpen(false)

    return (
        <>
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

                <button
                    className={style.cstHeaderBtnBurger}
                    onClick={() => setIsMobileOpen(prev => !prev)}
                    aria-label="Меню"
                >
                    <Burger/>
                </button>
            </div>
        </header>

        <div className={`${style.cstMobileMenu} ${isMobileOpen ? style.cstMobileMenuOpen : ''}`}>
            <nav className={style.cstMobileNav}>
                <div
                    className={style.cstMobileNavItem}
                    onClick={() => setIsMobileProductsOpen(prev => !prev)}
                >
                    <span className={`${style.cstMobileNavLink} ${style.cstMobileNavLinkNoPad}`}>Продукты</span>
                    <div className={`${style.cstProductArrow} ${isMobileProductsOpen ? style.cstProductArrowOpen : ''}`}>
                        <ArrowDownIcon/>
                    </div>
                </div>

                <div className={`${style.cstMobileProducts} ${isMobileProductsOpen ? style.cstMobileProductsOpen : ''}`}>
                    <a onClick={closeMobile} href={ROUTES.products.negativeReviews} className={style.cstMobileProductLink}>
                        <HeaderProductIcon1/>
                        <span>Удаление негативных отзывов</span>
                    </a>
                    <a onClick={closeMobile} href={ROUTES.products.reviews} className={style.cstMobileProductLink}>
                        <HeaderProductIcon2/>
                        <span>Ответы на отзывы и вопросы</span>
                    </a>
                    <a onClick={closeMobile} href={ROUTES.products.newsletter} className={style.cstMobileProductLink}>
                        <HeaderProductIcon3/>
                        <span>Рассылки покупателям</span>
                    </a>
                    <a onClick={closeMobile} href={ROUTES.products.chats} className={style.cstMobileProductLink}>
                        <HeaderProductIcon4/>
                        <span>Чаты с покупателями</span>
                    </a>
                </div>

                <a onClick={closeMobile} href={ROUTES.pricing} className={style.cstMobileNavLink}>Цены</a>
                <a onClick={closeMobile} href={ROUTES.calculator} className={style.cstMobileNavLink}>Калькулятор</a>
                <a onClick={closeMobile} href={ROUTES.partners} className={style.cstMobileNavLink}>Партнёры</a>
                <a onClick={closeMobile} href={ROUTES.about} className={style.cstMobileNavLink}>О нас</a>
                <a onClick={closeMobile} href={ROUTES.blog} className={style.cstMobileNavLink}>Блог</a>
            </nav>

            <div className={style.cstMobileSocial}>
                <a target="_blank" href={ROUTES.social.telegram}><TelegramIcon/></a>
                <a target="_blank" href={ROUTES.social.vk}><VkIcon/></a>
                <a target="_blank" href={ROUTES.social.max}><MaxIcon/></a>
                <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon/></a>
                <a target="_blank" href={ROUTES.social.dzen}><DzenIcon/></a>
            </div>

            <div className={style.cstMobileButtons}>
                <LoginButton/>
                <RegisterButton/>
            </div>
        </div>
        </>
    )
}
