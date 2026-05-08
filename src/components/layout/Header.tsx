import '@/styles/header.css'
import Logo from '@/components/ui/Logo'
import ArrowDownIcon from '@/components/ui/ArrowDownIcon'
import TelegramIcon from '@/components/ui/TelegramIcon'

export default function Header() {
    return (
        <header>
            <div className="col-2 cst-center-div">
                <Logo />
            </div>
            <div className="col-7 cst-center-div cst-gap-header-div">
                <div className="cst-header-products">
                    <span className="cst-header-text">Продукты</span>
                    <div className='cst-product-arrow'>
                        <ArrowDownIcon />
                    </div>
                </div>
                <span className="cst-header-text">Цены</span>
                <span className="cst-header-text">О нас</span>
            </div>
            <div className="col-3 cst-center-div cst-gap-header-div">
                <div className="cst-header-btn">
                    Зарегистрироваться
                </div>
                <div>
                    <TelegramIcon />
                </div>
            </div>
        </header>
    )
}
