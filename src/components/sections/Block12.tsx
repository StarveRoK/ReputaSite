import style from '@/styles/block_12.module.css'

export default function Block12() {
    return (
        <section className={style.cstBlock12section}>
            <div className={style.cstBlock12productContainer}>
                <div className={style.cstBlock12productBlock}>
                    <div className={style.cstBlock12productIcon}>
                        <img src="/images/Block12Img1.png" alt='Block12Img1' className={style.cstBlock12image}/>
                    </div>
                    <div className={style.cstBlock12productDescriptionContainer}>
                        <div className={style.cstBlock12productDescriptionNumber}>1</div>
                        <div className={style.cstBlock12productDescriptionTitle}>
                            Ответ <br/>
                            <span className={style.cstBlock12productDescriptionTitleBlue}> за 1 секунду</span>
                        </div>
                        <div className={style.cstBlock12productDescriptionDescription}>
                            ИИ мгновенно генерирует <br/>
                            и публикует ответы без задержек
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock12productBlock}>
                    <div className={style.cstBlock12productIcon}>
                        <img src="/images/Block12Img2.png" alt='Block12Img2' className={style.cstBlock12image}/>
                    </div>
                    <div className={style.cstBlock12productDescriptionContainer}>
                        <div className={style.cstBlock12productDescriptionNumber}>2</div>
                        <div className={style.cstBlock12productDescriptionTitle}>
                            Полная <br/>
                            <span className={style.cstBlock12productDescriptionTitleBlue}>автоматизация</span>
                        </div>
                        <div className={style.cstBlock12productDescriptionDescription}>
                            Ответы публикуются без участия <br/>
                            менеджеров — до 95% экономии времени <br/>
                            на обработке отзывов и вопросов
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock12productBlock}>
                    <div className={style.cstBlock12productIcon}>
                        <img src="/images/Block12Img3.png" alt='Block12Img3' className={style.cstBlock12image}/>
                    </div>
                    <div className={style.cstBlock12productDescriptionContainer}>
                        <div className={style.cstBlock12productDescriptionNumber}>3</div>
                        <div className={style.cstBlock12productDescriptionTitle}>
                            <span className={style.cstBlock12productDescriptionTitleBlue}>Персонализация</span>
                            общения
                        </div>
                        <div className={style.cstBlock12productDescriptionDescription}>
                            AI обращается к покупателю по имени <br/>
                            и отвечает в заданном стиле, повышая <br/>
                            доверие и лояльность
                        </div>
                    </div>
                </div>
                <div className={style.cstBlock12productBlock}>
                    <div className={style.cstBlock12productIcon}>
                        <img src="/images/Block12Img4.png" alt='Block12Img4' className={style.cstBlock12image}/>
                    </div>
                    <div className={style.cstBlock12productDescriptionContainer}>
                        <div className={style.cstBlock12productDescriptionNumber}>4</div>
                        <div className={style.cstBlock12productDescriptionTitle}>
                            <span className={style.cstBlock12productDescriptionTitleBlue}>Работает 24/7</span><br/>
                            и обрабатывает любой<br/>
                            объем отзывов<br/>
                            <span className={style.cstBlock12productDescriptionTitleBlue}>Работает 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
