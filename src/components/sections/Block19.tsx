import style from '@/styles/block_19.module.css'
import Block19svg1 from "@/components/ui/Block19svg1";
import Block19svg2 from "@/components/ui/Block19svg2";

export default function Block19() {
    return (
        <section className={style.cstBlock19section}>

            <div className={style.cstBlock19ownManager}>
                <b>Кейсы</b> REPUTA
            </div>

            <div className={style.cstBlock19title}>
                Работали с <span className={style.cstBlock19titleBlue}> 100+ нишами.</span> Посмотрите <br/>
                <span className={style.cstBlock19titleBlue}>рост рейтинга</span> наших клиентов
            </div>

            <div className={style.cstBlock19cardContainer}>
                <div className={`${style.cstBlock19cardArrow} ${style.arrowLeft}`}>
                    <Block19svg1/>
                </div>
                <div className={style.cstBlock19card}>
                    <img src="/images/Block19Img1.png" alt="Block19Img1"/>
                </div>
                <div className={style.cstBlock19card}>
                    <img src="/images/Block19Img2.png" alt="Block19Img2"/>
                </div>
                <div className={`${style.cstBlock19cardArrow} ${style.arrowRight}`}>
                    <Block19svg2/>
                </div>
            </div>
        </section>
    )
}
