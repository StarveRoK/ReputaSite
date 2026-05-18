import style from '@/styles/block_31.module.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton";
import ForSellerButton from "@/components/buttons/ForSellerButton/ForSellerButton";

export default function Block31() {
    return (
        <section className={style.cstBlock31section}>
            <div className={style.cstBlock31titleContainer}>
                <ForSellerButton hasStar={true} white={true}>Для селлеров</ForSellerButton>
                <div className={style.cstBlock31title}>
                    REPUTA — лидеры<br/>
                    в репутационном<br/>
                    менеджменте<br/>
                    на маркетплейсах
                </div>

                <div className={style.cstBlock31descriptionContainer}>
                    <div className={style.cstBlock31description}>
                        Стартап года по версии <b>MPseller Awards 2025</b>
                    </div>
                    <div className={style.cstBlock31description}>
                        Участники и спикеры <b>профильных выставок, <br/>
                        форумов и конференций</b>
                    </div>
                </div>

                <WhiteButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></WhiteButton>
            </div>

            <div className={style.cstBlock31imgContainer}>
                <div className={style.cstBlock31imgCol}>
                    <img src="/images/Block31Img1.png" alt="Block31Img1"/>
                    <img src="/images/Block31Img3.png" alt="Block31Img3"/>
                    <img src="/images/Block31Img4.png" alt="Block31Img4"/>
                </div>
                <div className={style.cstBlock31imgCol}>
                    <img src="/images/Block31Img2.png" alt="Block31Img2"/>
                    <img src="/images/Block31Img5.png" alt="Block31Img5"/>
                </div>
            </div>
        </section>
    )
}
