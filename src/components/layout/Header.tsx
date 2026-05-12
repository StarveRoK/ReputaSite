import '@/styles/header.css'
import Logo from '@/components/ui/Logo'
import ArrowDownIcon from '@/components/ui/ArrowDownIcon'
import TelegramIcon from '@/components/ui/TelegramIcon'
import VkIcon from "@/components/ui/VkIcon";
import MaxIcon from "@/components/ui/MaxIcon";
import YouTubeIcon from "@/components/ui/YouTubeIcon";
import DzenIcon from "@/components/ui/DzenIcon";
import { ROUTES } from "@/lib/routes";

export default function Header() {
    return (
        <header>
            <a href={ROUTES.home} className="cst-center-div">
                <Logo />
            </a>
            <div className="cst-center-div cst-gap-header-div">
                <div className="cst-header-products">
                    <span className="cst-header-text">Продукты</span>
                    <div className='cst-product-arrow'>
                        <ArrowDownIcon />
                    </div>
                </div>
                <a href={ROUTES.pricing} className="cst-header-text">Цены</a>
                <a href={ROUTES.partners} className="cst-header-text">Партнёры</a>
                <a href={ROUTES.about} className="cst-header-text">О нас</a>
                <a href={ROUTES.blog} className="cst-header-text">Блог</a>
            </div>

            <div className="cst-header-links-icons">
                <a href={ROUTES.social.telegram}><TelegramIcon/></a>
                <a href={ROUTES.social.vk}><VkIcon/></a>
                <a href={ROUTES.social.max}><MaxIcon/></a>
                <a href={ROUTES.social.youtube}><YouTubeIcon/></a>
                <a href={ROUTES.social.dzen}><DzenIcon/></a>
            </div>

            <div className="cst-header-btn-container">
                <div className="cst-header-btn-login">
                    Войти
                </div>
                <div className="cst-header-btn-register">
                    Зарегистрироваться
                </div>
            </div>
        </header>
    )
}
