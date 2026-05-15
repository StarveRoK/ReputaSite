import '@/styles/block_9.css'
import WhiteButton from "@/components/buttons/WhiteButton/WhiteButton";

export default function Block9() {
    return (
        <section className='cst-block-9-section'>
            <div className='cst-block-9-title-container'>
                <div className='cst-block-9-title'>
                    Попробуйте REPUTA<br />
                    <b>бесплатно 14 дней</b>
                </div>

                <div className='cst-block-9-description-container'>
                    <div className='cst-block-9-description'>
                        Простое подключение <b> за 5 минут</b>
                    </div>
                    <div className='cst-block-9-description'>
                        Окупаемость за счёт <b> роста воронки и допродаж</b>
                    </div>
                    <div className='cst-block-9-description'>
                        Работа по <b> проверенным сценариям</b>
                    </div>
                </div>


                <WhiteButton href="https://app.reputa.ru">Попробовать бесплатно <b>14 дней</b></WhiteButton>
            </div>

            <div className='cst-block-9-title-image'>
                <img src="/images/Block9.png" alt="Block9" className="cst-block-9-phone-image"/>
            </div>
        </section>
    )
}