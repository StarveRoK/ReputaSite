import style from '@/styles/block_6.module.css'
import PhoneSVG from "@/components/ui/PhoneSVG";
import HeadphoneSVG from "@/components/ui/HeadphoneSVG";

export default function Block6() {
    return (
        <section className={style.cstBlock6section}>
            <div className={style.cstBlock6titleContainer}>
                <div className={style.cstBlock6title}>
                    Остались <br />
                    <span className={style.cstBlock6titleBlue}>вопросы?</span>
                </div>
                <div className={style.cstBlock6description}>
                    Оставьте номер телефона — наш менеджер <br />
                    перезвонит в удобное для вас время
                </div>
            </div>

            <div className={style.cstBlock6inputContainer}>
                <div className={style.cstBlock6inputBlock}>
                    <PhoneSVG />
                    <input type='text' className={style.cstBlock6input} placeholder='+7 (___) ___-__-__'/>
                </div>
                <button className={style.cstBlock6button}>
                    Перезвонить мне
                    <HeadphoneSVG />
                </button>
            </div>

            <div className={style.cstBlock6agreementContainer}>
                <input type='checkbox' className={style.cstBlock6agreementCheckbox}/>
                <div className={style.cstBlock6agreementText}>
                    Соглашаюсь с условиями<br/>
                    <a href="#" className={style.cstBlock6agreementLink}>политики конфиденциальности</a>
                </div>
            </div>

            <div className={style.cstBlock6titleImages}>
                <img src="/images/Block6Headphones.png" alt="Block6Headphones" className={style.cstBlock6headphones}/>
            </div>
        </section>
    )
}
