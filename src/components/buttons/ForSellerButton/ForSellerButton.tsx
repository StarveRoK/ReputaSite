import style from './style.module.css'
import {ReactNode} from "react";
import StarSVG from "@/components/ui/StarSVG";

interface BlueButtonProps {
    children: ReactNode;
    hasStar: boolean;
    white?: boolean;
}

export default function ForSellerButton({ children, hasStar, white = false }: BlueButtonProps) {
    return (
        <div className={`${style.cstForSellerbackground} ${white ? style.cstForSellerbackgroundWhite : ''}`}>
            {hasStar ? <StarSVG/> : ''}
            <span className={`${style.cstForSellerbackgroundText} ${white ? style.cstForSellerbackgroundTextWhite : ''}`}>{children}</span>
            <div className={`${style.cstForSellerForSellerContainer} ${white ? style.cstForSellerForSellerContainerWhite : ''}`}>
                <img src="/images/forSellerWB.png" alt="forSellerWB" className={`${style.cstForSellerForSeller} ${white ? style.cstForSellerForSellerWhite : ''}`}/>
                <img src="/images/forSellerOZON.png" alt="forSellerOZON" className={`${style.cstForSellerForSeller} ${white ? style.cstForSellerForSellerWhite : ''}`}/>
            </div>
        </div>
    )
}