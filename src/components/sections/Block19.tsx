import '@/styles/block_19.css'
import Block19svg1 from "@/components/ui/Block19svg1";
import Block19svg2 from "@/components/ui/Block19svg2";

export default function Block19() {
    return (
        <section className='cst-block-19-section'>

            <div className="cst-block-19-own-manager">
                <b>Кейсы</b> REPUTA
            </div>

            <div className='cst-block-19-title'>
                Работали с <span className="cst-block-19-title-blue"> 100+ нишами.</span> Посмотрите <br/>
                <span className="cst-block-19-title-blue">рост рейтинга</span> наших клиентов
            </div>

            <div className='cst-block-19-card-container'>
                <div className='cst-block-19-card-arrow arrow-left'>
                    <Block19svg1/>
                </div>
                <div className='cst-block-19-card'>
                    <img src="/images/Block19Img1.png" alt="Block19Img1"/>
                </div>
                <div className='cst-block-19-card'>
                    <img src="/images/Block19Img2.png" alt="Block19Img2"/>
                </div>
                <div className="cst-block-19-card-arrow arrow-right">
                    <Block19svg2/>
                </div>
            </div>
        </section>
    )
}