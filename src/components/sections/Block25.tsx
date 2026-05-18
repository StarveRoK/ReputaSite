import style from '@/styles/block_25.module.css'
import BlueButton from "@/components/buttons/BlueButton/BlueButton";
import Block25svg1 from "@/components/ui/Block25svg1";

export default function Block25() {
    return (
        <section className={style.cstBlock25section}>
            <div className={style.cstBlock25titleContainer}>
                <div className={style.cstBlock25preTitle}>
                    Полная автоматизация рассылок <b>в один клик</b>
                </div>
                <div className={style.cstBlock25title}>
                    Запускайте рассылки <br/>
                    по базе покупателей<br/>
                    с оценкой 5★, просто <br/>
                    нажав кнопку «Отправить»
                </div>
                <div className={style.cstBlock25description}>
                    От вас нужен только текст сообщения <b>— напишите свой,<br/>
                    или адаптируйте готовые шаблоны Reputa</b> под вашу <br/>
                    акцию, новинку или повторную продажу
                </div>
            </div>

            <div className={style.cstBlock25titleImages}>
                <img src="/images/Block25.png" alt="Block25"/>
                <div className={style.cstBlock25absContainerIn}>
                    <div className={style.cstBlock25absTop}>
                        <div className={style.cstBlock25absIcon}>
                            <Block25svg1 />
                        </div>
                        <div className={style.cstBlock25absTextContainer}>
                            <span className={style.cstBlock25absTitle}>Ваша рассылка:</span>
                            <span className={style.cstBlock25absDescription}>
                                Как насчет зaказать<br/>
                                новый набор?
                            </span>
                        </div>
                    </div>
                    <div className={style.cstBlock25Btn}>
                        <BlueButton href="https://app.reputa.ru">Отправить</BlueButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
