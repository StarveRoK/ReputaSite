import style from '@/styles/block_34.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import {ROUTES} from "@/lib/routes";
import MaxIcon from "@/components/ui/MaxIcon";
import YouTubeIcon from "@/components/ui/YouTubeIcon";


export default function Block34() {
    return (
        <section className={style.cstBlock34section}>
            <div className={style.cstBlock34block}>
                <div className={style.cstBlock34icon}>
                    <img src="/images/Block34Img1.png" alt="Block34Img1"/>
                </div>
                <div className={style.cstBlock34title}>
                    Первый журнал<br />
                    <span className={style.cstBlock34titleBlue}>о репутации на маркетплейсах</span>
                </div>
                <div className={style.cstBlock34description}>
                    Делимся кейсами, исследованиями, аналитикой<br/>
                    и практическим опытом работы с отзывами, <br/>
                    покупателями и репутацией брендов
                </div>
                <BlueButton href={'#'}><b>Подписаться</b> на журнал</BlueButton>
            </div>
            <div className={style.cstBlock34block}>
                <div className={style.cstBlock34icon}>
                    <img src="/images/Block34Img2.png" alt="Block34Img2"/>
                </div>
                <div className={style.cstBlock34title}>
                    Подкасты Reputa<br />
                    <span className={style.cstBlock34titleBlue}>о маркетплейсах и репутации</span>
                </div>
                <div className={style.cstBlock34description}>
                    Записываем интервью и подкасты с селлерами,<br/>
                    экспертами и предпринимателями рынка<br/>
                    маркетплейсов
                </div>
                <div className={style.cstBlock34iconsContainer}>
                    <a target="_blank" href={ROUTES.social.youtube}><YouTubeIcon/></a>
                    <a target="_blank" href={ROUTES.social.max}><MaxIcon/></a>
                </div>
            </div>
        </section>
    )
}
