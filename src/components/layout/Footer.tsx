import style from '@/styles/footer.module.css'
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
            <div className={style.cstFooterTopContainer}>
                <div className={style.cstFooterTopLeftContainer}>
                    <a href={ROUTES.home}>
                        <Logo/>
                    </a>
                    <div className={style.cstFooterIconsContainer}>
                        <a target="_blank" href={ROUTES.social.telegram}><TelegramIconBlue /></a>
                        <a target="_blank" href={ROUTES.social.vk}><VkIconBlue/></a>
                        <a target="_blank" href={ROUTES.social.max}><MaxIconBlue/></a>
                        <a target="_blank" href={ROUTES.social.youtube}><YouTubeIconBlue/></a>
                        <a target="_blank" href={ROUTES.social.dzen}><DzenIconBlue/></a>
                    </div>
                </div>
                <div className={style.cstFooterTopRightContainer}>
                    <div className={style.cstFooterLinksColumn}>
                        <span className={style.cstFooterLinksColumnTitle}>Продукты</span>
                        <a href={ROUTES.products.negativeReviews} className={style.cstFooterLinksColumnLink}>Удаление негативных отзывов</a>
                        <a href={ROUTES.products.reviews} className={style.cstFooterLinksColumnLink}>Отзывы и вопросы</a>
                        <a href={ROUTES.products.chats} className={style.cstFooterLinksColumnLink}>Чаты</a>
                        <a href={ROUTES.products.newsletter} className={style.cstFooterLinksColumnLink}>Рассылка</a>
                        <a href={ROUTES.pricing} className={style.cstFooterLinksColumnLink}>Цены</a>
                    </div>
                    <div className={style.cstFooterLinksColumn}>
                        <span className={style.cstFooterLinksColumnTitle}>Компания</span>
                        <a href={ROUTES.about} className={style.cstFooterLinksColumnLink}>О нас</a>
                        <a href={ROUTES.partners} className={style.cstFooterLinksColumnLink}>Партнёры</a>
                        <a href={ROUTES.blog} className={style.cstFooterLinksColumnLink}>Блог</a>
                    </div>
                    <div className={style.cstFooterLinksColumn}>
                        <span className={style.cstFooterLinksColumnInfo}>ИП: РОМАНОВ ЕГОР НИКОЛАЕВИЧ</span>
                        <span className={style.cstFooterLinksColumnInfo}>ИНН: 760210593072</span>
                        <span className={style.cstFooterLinksColumnInfo}>ОГРНИП: 325762700011721</span>
                        <span className={style.cstFooterLinksColumnInfo}>150043, РОССИЯ, ЯРОСЛАВСКАЯ ОБЛ, Г. ЯРОСЛАВЛЬ, УЛ. АВТОЗАВОДСКАЯ, Д 23, КВ 148</span>
                    </div>
                </div>
            </div>
            <div className={style.cstFooterBotContainer}>
                <div className={style.cstFooterBotLinksContainer}>
                    <a href={ROUTES.legal.privacyPolicy} className={style.cstFooterLinksColumnLinkBot}>Политика конфиденциальности</a>
                    <a href={ROUTES.legal.personalDataConsent} className={style.cstFooterLinksColumnLinkBot}>Согласие на обработку персональных данных</a>
                    <a href={ROUTES.legal.publicOffer} className={style.cstFooterLinksColumnLinkBot}>Публичная оферта</a>
                    <a href={ROUTES.legal.userAgreement} className={style.cstFooterLinksColumnLinkBot}>Пользовательское соглашение</a>
                    <a href={ROUTES.legal.cookiesPolicy} className={style.cstFooterLinksColumnLinkBot}>Политика cookies</a>
                    <a href={ROUTES.legal.advertisingConsent} className={style.cstFooterLinksColumnLinkBot}>Согласие на рекламную / информационную рассылку</a>
                    <a href={ROUTES.legal.personalDataConsentTemplate} className={style.cstFooterLinksColumnLinkBot}>Шаблон на обработку персональных данных</a>
                </div>
            </div>
        </footer>
    )
}
