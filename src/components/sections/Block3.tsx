import style from '@/styles/block_3.module.css'
import Block3GooglePlay from "@/components/ui/Block3GooglePlay";

export default function Block3() {
    return (
        <section className={style.cstBlock3section}>
            <div className={style.cstBlock3titleContainer}>
                <div className={style.cstBlock3title}>
                    <b>Приложение</b><br />
                    REPUTA на вашем <br />
                    устройстве
                </div>
                <div className={style.cstBlock3description}>
                    Установите приложение через <br />
                    App Store и Google Play
                </div>
            </div>
            <div className={style.cstBlock3titleApps}>
                <div className={style.cstBlock3titleContainerAppStore}>
                    <img src="/images/Block3AppStore.png" alt="AppStore" className={style.cstBlock3titleAppStore}/>
                </div>
                <div className={style.cstBlock3titleContainerGooglePlay}>
                    <Block3GooglePlay />
                </div>
            </div>
            <div className={style.cstBlock3titleImages}>
                <img src="/images/Block3Phone.png" alt="Block3Phone" className={style.cstBlock3phoneImage}/>
                <img src="/images/Block3BackgroundPhone.png" alt="Block3BackgroundPhone" className={style.cstBlock3backgroundPhoneImage}/>
            </div>
        </section>
    )
}
