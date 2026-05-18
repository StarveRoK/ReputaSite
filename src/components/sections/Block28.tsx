import Image from 'next/image'
import style from '@/styles/block_28.module.css'

export default function Block28() {
    return (
        <section className={style.cstBlock28section}>
            <div className={style.cstBlock28title}>
                <span className={style.cstBlock28titleBlue}>Как происходит <br /></span>
                Работа с чатами
            </div>

            <div className={style.cstBlock28productContainer}>
                <div className={style.cstBlock28productBlock}>
                    <div className={style.cstBlock28productIcon}>
                        <Image src="/images/Block28Img1.png" alt='Block28Img1' className={style.cstBlock28image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock28productDescriptionContainer}>
                        <div className={style.cstBlock28productDescriptionNumber}>1</div>
                        <div className={style.cstBlock28productDescriptionTitle}>
                            Все чаты с покупателями <br/>
                            <span className={style.cstBlock28productDescriptionTitleBlue}>в одном месте</span>
                        </div>
                        <div className={style.cstBlock28productDescriptionDescription}>
                            Работайте со всеми сообщениями в одном <br/>
                            окне без зависаний и переключений между <br/>
                            кабинетами — быстрее отвечаете <br/>
                            и не теряете клиентов
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock28productBlock}>
                    <div className={style.cstBlock28productIcon}>
                        <Image src="/images/Block28Img2.png" alt='Block28Img2' className={style.cstBlock28image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock28productDescriptionContainer}>
                        <div className={style.cstBlock28productDescriptionNumber}>2</div>
                        <div className={style.cstBlock28productDescriptionTitle}>
                            Помогайте покупателю <br/>
                            <span className={style.cstBlock28productDescriptionTitleBlue}>до оформления заказа</span>
                        </div>
                        <div className={style.cstBlock28productDescriptionDescription}>
                            Отвечайте на вопросы в чате ещё до <br/>
                            покупки: помогайте выбрать товар, снижайте <br/>
                            риск возвратов и негативных отзывов
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock28productBlock}>
                    <div className={style.cstBlock28productIcon}>
                        <Image src="/images/Block28Img3.png" alt='Block28Img3' className={style.cstBlock28image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock28productDescriptionContainer}>
                        <div className={style.cstBlock28productDescriptionNumber}>3</div>
                        <div className={style.cstBlock28productDescriptionTitle}>
                            <span className={style.cstBlock28productDescriptionTitleBlue}>Полная история</span> общения <br/>
                            с покупателями
                        </div>
                        <div className={style.cstBlock28productDescriptionDescription}>
                            Все диалоги сохраняются — вы видите <br/>
                            переписку целиком, контролируете <br/>
                            качество ответов и работу  <br/>
                            менеджеров
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock28productBlock}>
                    <div className={style.cstBlock28productIcon}>
                        <Image src="/images/Block28Img4.png" alt='Block28Img4' className={style.cstBlock28image} width={80} height={80}/>
                    </div>
                    <div className={style.cstBlock28productDescriptionContainer}>
                        <div className={style.cstBlock28productDescriptionNumber}>4</div>
                        <div className={style.cstBlock28productDescriptionTitle}>
                            Не пропускайте <br/>
                            <span className={style.cstBlock28productDescriptionTitleBlue}>ни одного сообщения</span>
                        </div>
                        <div className={style.cstBlock28productDescriptionDescription}>
                            Если вы не ответили в течение 5 минут<br/>
                            — система отправит уведомление.<br/>
                            Вы контролируете каждый диалог<br/>
                            и не теряете покупателей
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}