import style from '@/styles/block_21.module.css'
import Block19svg1 from "@/components/ui/Block19svg1";
import Block19svg2 from "@/components/ui/Block19svg2";
import Block21svg1 from "@/components/ui/Block21svg1";

export default function Block21() {
    return (
        <section className={style.cstBlock21section}>

            <div className={style.cstBlock21title}>
                От заявки <br />
                до результата <span className={style.cstBlock21titleBlue}>за 6 шагов</span>
            </div>

            <div className={style.cstBlock21cardContainer}>
                <div className={`${style.cstBlock21card} ${style.cstBlock21cardArrowRight}`}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 1
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Разбираем <br />
                        ситуацию <br/>
                        <span className={style.cstBlock21cardTextBlue}>на созвоне</span>
                    </div>
                </div>
                <div className={`${style.cstBlock21card} ${style.cstBlock21cardArrowRight}`}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 2
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Готовим<br/>
                        <span className={style.cstBlock21cardTextBlue}> стратегию <br/>
                        и расчёт</span>
                    </div>
                </div>
                <div className={style.cstBlock21card}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 3
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Заключаем<br/>
                        <span className={style.cstBlock21cardTextBlue}>договор</span>
                    </div>
                </div>
                <div className={`${style.cstBlock21card} ${style.cstBlock21cardArrowRight}`}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 4
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Подключаем<br/>
                        <span className={style.cstBlock21cardTextBlue}> работу <br/>
                        на кабинете</span>
                    </div>
                </div>
                <div className={`${style.cstBlock21card} ${style.cstBlock21cardArrowRight}`}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 5
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Обрабатываем<br/>
                        <span className={style.cstBlock21cardTextBlue}>негативные <br />
                        отзывы</span>
                    </div>
                </div>
                <div className={style.cstBlock21card}>
                    <div className={style.cstBlock21cardStep}>
                        Шаг 6
                    </div>
                    <div className={style.cstBlock21cardText}>
                        Получаем<br/>
                        <span className={style.cstBlock21cardTextBlue}>результат</span>
                    </div>
                </div>
                <div className={style.cstBlock21cardSvgArrow}>
                    <Block21svg1 />
                </div>
            </div>
        </section>
    )
}
