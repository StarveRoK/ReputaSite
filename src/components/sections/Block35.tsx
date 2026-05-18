import style from '@/styles/block_35.module.css'
import {ROUTES} from "@/lib/routes";
import MaxIcon from "@/components/ui/MaxIcon";
import YouTubeIcon from "@/components/ui/YouTubeIcon";
import TelegramIcon from "@/components/ui/TelegramIcon";
import VkIcon from "@/components/ui/VkIcon";
import DzenIcon from "@/components/ui/DzenIcon";


export default function Block35() {
    return (
        <section className={style.cstBlock35section}>
            <div className={style.cstBlock35title}>
                Следите за нами <span className={style.cstBlock35titleBlue}> в соц. сетях</span>
            </div>
            <div className={style.cstBlock35iconsContainer}>
                <a target="_blank" href={ROUTES.social.telegram}><TelegramIcon/></a>
                <a target="_blank" href={ROUTES.social.vk}><VkIcon/></a>
                <a target="_blank" href={ROUTES.social.max}><MaxIcon/></a>
                <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon/></a>
                <a target="_blank" href={ROUTES.social.dzen}><DzenIcon/></a>
            </div>
        </section>
    )
}
