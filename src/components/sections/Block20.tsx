import '@/styles/block_20.css'

export default function Block20() {
    return (
        <section className='cst-block-20-section'>
            <div className='cst-block-20-row'>
                <div className='cst-block-20-col'>
                    <div className="cst-block-20-own-manager">
                        Отзывы
                    </div>

                    <div className='cst-block-20-title'>
                        Что пишут <br/>
                        <span className="cst-block-20-title-blue">наши клиенты</span>
                    </div>

                    <span className='cst-block-20-description'>
                        Оцените возможности сами
                    </span>

                    <img src="/images/Block20Img1.png" alt='Block20Img1' className="cst-block-20-image-1"/>
                </div>
                <div className='cst-block-20-col'>
                    <img src="/images/Block20Img2.png" alt='Block20Img2'/>
                </div>
            </div>
            <div className='cst-block-20-row'>
                <div className='cst-block-20-col'>
                    <img src="/images/Block20Img3.png" alt='Block20Img3'/>
                </div>
                <div className='cst-block-20-col'>
                    <img src="/images/Block20Img4.png" alt='Block20Img4'/>
                </div>
            </div>
        </section>
    )
}