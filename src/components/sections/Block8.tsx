import '@/styles/block_8.css'
import DropDownIcon from "@/components/ui/DropDownIcon";

export default function Block8() {
    return (
        <section className='cst-block-8-section'>

            <div className="cst-block-8-own-manager">
                Они же <b> FAQ</b>
            </div>

            <div className='cst-block-8-title'>
                Часто задаваемые <br/>
                <span className="cst-block-4-title-blue">вопросы</span>
            </div>

            <div className='cst-block-8-card-container'>
                <div className='cst-block-8-card'>
                    <span className='cst-block-8-question'><b>Зачем мне сервис</b>, если менеджер и так отвечает?</span>
                   <span className='cst-block-8-dropdown-icon'><DropDownIcon /></span>
                </div>
                {/*<div className='cst-block-8-card'>*/}
                {/*    <span className='cst-block-8-question'><b>Зачем</b></span>*/}
                {/*   <span className='cst-block-8-dropdown-icon'><DropDownIcon /></span>*/}
                {/*</div>*/}
                {/*<div className='cst-block-8-card'>*/}
                {/*    <span className='cst-block-8-question'><b>Зачем</b></span>*/}
                {/*    <span className='cst-block-8-dropdown-icon'><DropDownIcon /></span>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}