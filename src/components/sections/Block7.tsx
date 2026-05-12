import '@/styles/block_7.css'
import ReputaSVG from "@/components/ui/ReputaSVG";

export default function Block7() {
    return (
        <section className='cst-block-7-section'>

            <div className="cst-block-7-own-manager">
                <ReputaSVG />
            </div>

            <div className='cst-block-7-title'>
                Лидеры <span className="cst-block-4-title-blue"> в репутационном <br/> менеджменте </span>
                на маркетплейсах
            </div>

            <div className='cst-block-7-card-container'>
                <div className='cst-block-7-card'>
                    <div className='cst-block-7-card-title cst-block-7-card-blue cst-block-7-card-title-big'>
                        350 000
                    </div>
                    <div className='cst-block-7-card-description'>
                        успешно отработанных<br /> негативных отзывов
                    </div>
                </div>

                <div className='cst-block-7-card'>
                    <div className='cst-block-7-card-title'>
                        <span className="cst-block-7-card-blue">Стартап</span><br/>
                        года
                    </div>
                    <div className='cst-block-7-card-description'>
                        по версии<br /> MP Sellers Awords
                    </div>
                </div>

                <div className='cst-block-7-card'>
                    <div className='cst-block-7-card-title'>
                        Участники<br />
                        <span className="cst-block-7-card-blue">и спикеры</span>

                    </div>
                    <div className='cst-block-7-card-description'>
                        на выставках, форумах<br /> и конференциях
                    </div>
                </div>

            </div>
        </section>
    )
}