import style from '@/styles/block_17.module.css'
import PlaySVG from "@/components/ui/PlaySVG";
import Block17svg1 from "@/components/ui/Block17svg1";
import Block17svg2 from "@/components/ui/Block17svg2";
import Block17svg3 from "@/components/ui/Block17svg3";

export default function Block17() {
    return (
        <section className={style.cstBlock17section}>

            <div className={style.cstBlock17title}>
                Почему REPUTA — <span className={style.cstBlock17titleBlue}> это безопасно?</span>
            </div>

            <div className={style.cstBlock17cardContainer}>
                <div className={style.cstBlock17card}>
                    <div className={style.cstBlock17cardImage}>
                        <Block17svg1 />
                    </div>
                    <div className={style.cstBlock17cardTitle}>
                        Работа строго
                        <span className={style.cstBlock17cardTitleBlue}> в рамках <br/></span>
                        правил маркетплейса
                    </div>
                    <div className={style.cstBlock17cardDescription}>
                        Решаем вопросы через диалог <br/>
                        с покупателем и юридическое <br/>
                        обращения в поддержку
                    </div>
                </div>

                <div className={style.cstBlock17card}>
                    <div className={style.cstBlock17cardImage}>
                        <Block17svg2 />
                    </div>
                    <div className={style.cstBlock17cardTitle}>
                        Опыт на
                        <span className={style.cstBlock17cardTitleBlue}> 550+ <br/></span>
                        кабинетах
                    </div>
                    <div className={style.cstBlock17cardDescription}>
                        Отработанные алгоритмы <br/>
                        и скрипты на 350 000+ <br/>
                        негативных отзывов
                    </div>
                </div>

                <div className={style.cstBlock17cardWithBtn}>
                    <div className={style.cstBlock17card}>
                    <div className={style.cstBlock17cardImage}>
                        <Block17svg3 />
                    </div>
                    <div className={style.cstBlock17cardTitle}>
                        Работает <br />
                        <span className={style.cstBlock17cardTitleBlue}>по договору</span>
                    </div>
                    <div className={style.cstBlock17cardDescription}>
                        Оплата по факту выполненной <br />
                        работы, все договоренности <br />
                        закреплены юридически
                    </div>
                    </div>
                    <div className={style.cstBlock17cardButton}>
                        <b>700+ селлеров</b>
                        доверяют нам
                    </div>
                </div>
            </div>

        </section>
    )
}
