import '@/styles/block_3.css'

export default function Block3() {
    return (
        <section className='cst-block-3-section'>
            <div className='cst-block-3-title-container'>
                <div className='cst-block-3-title'>
                    <b>Приложение</b><br />
                    REPUTA на вашем <br />
                    устройстве
                </div>
                <div className='cst-block-3-description'>
                    Установите приложение через <br />
                    App Store и Google Play
                </div>
            </div>
            <div className='cst-block-3-title-apps'>
                <div className="cst-block-3-title-container-app-store">
                    <img src="/images/Block3AppStore.png" alt="AppStore" className="cst-block-3-title-app-store"/>
                </div>
                <div className="cst-block-3-title-container-google-play">
                    <img src="/images/Block3GooglePlay.png" alt="GooglePlay" className="cst-block-3-title-google-play"/>
                </div>
            </div>
            <div className='cst-block-3-title-images'>
                <img src="/images/Block3Phone.png" alt="Block3Phone" className="cst-block-3-phone-image"/>
                <img src="/images/Block3BackgroundPhone.png" alt="Block3BackgroundPhone" className="cst-block-3-background-phone-image"/>
            </div>
        </section>
    )
}