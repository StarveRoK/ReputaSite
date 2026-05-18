import Image from 'next/image'
import style from '@/styles/block_23.module.css'

export default function Block23() {
    return (
        <section className={style.cstBlock23section}>
            <div className={style.cstBlock23title}>
                <span className={style.cstBlock23titleBlue}>Безлимитные рассылки по вашей лояльной <br />
                аудитории,</span> которая уже поставила 5★
            </div>

            <div className={style.cstBlock23productContainer}>
                <div className={style.cstBlock23productBlock}>
                    <div className={style.cstBlock23productIcon}>
                        <Image src="/images/Block23Img1.png" alt='Block23Img1' className={style.cstBlock23image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock23productDescriptionContainer}>
                        <div className={style.cstBlock23productDescriptionNumber}>1</div>
                        <div className={style.cstBlock23productDescriptionTitle}>
                            Продавать лояльно <br/>
                            аудитории <span className={style.cstBlock23productDescriptionTitleBlue}> до 40% проще</span><br/>
                            чем новым клиентам
                        </div>
                        <div className={style.cstBlock23productDescriptionDescription}>
                            Покупатели, у которых уже был <br/>
                            положительный опыт с вашим <br/>
                            брендом, охотнее возвращаются <br/>
                            за повторными заказами
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock23productBlock}>
                    <div className={style.cstBlock23productIcon}>
                        <Image src="/images/Block23Img2.png" alt='Block23Img2' className={style.cstBlock23image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock23productDescriptionContainer}>
                        <div className={style.cstBlock23productDescriptionNumber}>2</div>
                        <div className={style.cstBlock23productDescriptionTitle}>
                            Экономия <br/>
                            <span className={style.cstBlock23productDescriptionTitleBlue}>до 40%</span> рекламного<br/>
                            бюджета
                        </div>
                        <div className={style.cstBlock23productDescriptionDescription}>
                            Повторные продажи по своей базе <br />
                            помогают снижать зависимость от <br />
                            постоянных вложений в рекламу
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock23productBlock}>
                    <div className={style.cstBlock23productIcon}>
                        <Image src="/images/Block23Img3.png" alt='Block23Img3' className={style.cstBlock23image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock23productDescriptionContainer}>
                        <div className={style.cstBlock23productDescriptionNumber}>3</div>
                        <div className={style.cstBlock23productDescriptionTitle}>
                            Рост <span className={style.cstBlock23productDescriptionTitleBlue}> лояльности <br />и узнаваемости</span><br />
                            бренда
                        </div>
                        <div className={style.cstBlock23productDescriptionDescription}>
                            Регулярные касания через рассылки<br/>
                            помогают покупателям чаще возвращаться именно к<br/>
                            вашему магазину
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock23productBlock}>
                    <div className={style.cstBlock23productIcon}>
                        <Image src="/images/Block23Img4.png" alt='Block23Img4' className={style.cstBlock23image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock23productDescriptionContainer}>
                        <div className={style.cstBlock23productDescriptionNumber}>4</div>
                        <div className={style.cstBlock23productDescriptionTitle}>
                            Повторные продажи<br/>
                            <span className={style.cstBlock23productDescriptionTitleBlue}>без дополнительных<br/>вложений</span>
                        </div>
                        <div className={style.cstBlock23productDescriptionDescription}>
                            Работайте со своей базой покупателей <br/>
                            и увеличивайте выручку без роста <br/>
                            стоимости привлечения клиента
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}