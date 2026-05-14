import '@/styles/footer.css'
import Logo from '@/components/ui/Logo'
import TelegramIconBlue from "@/components/ui/TelegramIconBlue";
import VkIconBlue from "@/components/ui/VkIconBlue";
import MaxIconBlue from "@/components/ui/MaxIconBlue";
import YouTubeIconBlue from "@/components/ui/YouTubeIconBlue";
import DzenIconBlue from "@/components/ui/DzenIconBlue";
import { ROUTES } from "@/lib/routes";

export default function Footer() {
    return (
        <footer>
            <div className="cst-footer-top-container">
                <div className="cst-footer-top-left-container">
                    <a href={ROUTES.home}>
                        <Logo/>
                    </a>
                    <div className="cst-footer-icons-container">
                        <a href={ROUTES.social.telegram}><TelegramIconBlue /></a>
                        <a href={ROUTES.social.vk}><VkIconBlue/></a>
                        <a href={ROUTES.social.max}><MaxIconBlue/></a>
                        <a href={ROUTES.social.youtube}><YouTubeIconBlue/></a>
                        <a href={ROUTES.social.dzen}><DzenIconBlue/></a>
                    </div>
                </div>
                <div className="cst-footer-top-right-container">
                    <div className="cst-footer-links-column">
                        <span className='cst-footer-links-column-title'>Продукты</span>
                        <a href={ROUTES.products.negativeReviews} className='cst-footer-links-column-link'>Удаление негативных отзывов</a>
                        <a href={ROUTES.products.reviews} className='cst-footer-links-column-link'>Отзывы и вопросы</a>
                        <a href={ROUTES.products.chats} className='cst-footer-links-column-link'>Чаты</a>
                        <a href={ROUTES.products.newsletter} className='cst-footer-links-column-link'>Рассылка</a>
                        <a href={ROUTES.pricing} className='cst-footer-links-column-link'>Цены</a>
                    </div>
                    <div className="cst-footer-links-column">
                        <span className='cst-footer-links-column-title'>Компания</span>
                        <a href={ROUTES.about} className='cst-footer-links-column-link'>О нас</a>
                        <a href={ROUTES.partners} className='cst-footer-links-column-link'>Партнёры</a>
                        <a href={ROUTES.blog} className='cst-footer-links-column-link'>Блог</a>
                    </div>
                    <div className="cst-footer-links-column">
                        <span className='cst-footer-links-column-info'>ИП: РОМАНОВ ЕГОР НИКОЛАЕВИЧ</span>
                        <span className='cst-footer-links-column-info'>ИНН: 760210593072</span>
                        <span className='cst-footer-links-column-info'>ОГРНИП: 325762700011721</span>
                        <span className='cst-footer-links-column-info'>150043, РОССИЯ, ЯРОСЛАВСКАЯ ОБЛ, Г. ЯРОСЛАВЛЬ, УЛ. АВТОЗАВОДСКАЯ, Д 23, КВ 148</span>
                    </div>
                </div>
            </div>
            <div className="cst-footer-bot-container">
                <div className="cst-footer-bot-links-container">
                    <a href={ROUTES.legal.privacyPolicy} className='cst-footer-links-column-link-bot'>Политика конфиденциальности</a>
                    <a href={ROUTES.legal.personalDataConsent} className='cst-footer-links-column-link-bot'>Согласие на обработку персональных данных</a>
                    <a href={ROUTES.legal.publicOffer} className='cst-footer-links-column-link-bot'>Публичная оферта</a>
                    <a href={ROUTES.legal.userAgreement} className='cst-footer-links-column-link-bot'>Пользовательское соглашение</a>
                    <a href={ROUTES.legal.cookiesPolicy} className='cst-footer-links-column-link-bot'>Политика cookies</a>
                    <a href={ROUTES.legal.advertisingConsent} className='cst-footer-links-column-link-bot'>Согласие на рекламную / информационную рассылку</a>
                </div>
            </div>
        </footer>
    )
}
