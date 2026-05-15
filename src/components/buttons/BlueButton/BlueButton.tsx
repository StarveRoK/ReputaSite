import style from './style.module.css'

import Link from "next/link";
import { ReactNode } from "react";
import PlaySVG from "@/components/ui/PlaySVG";

interface BlueButtonProps {
    children: ReactNode;
    href: string;
    download?: string;
}

export default function BlueButton({ children, href, download }: BlueButtonProps) {
    if (download) {
        return (
            <a href={href} download={download} className={`${style.cstBlueButton} ${style.cstBlueButtonNoMargin}`}>
                {children}
                <PlaySVG/>
            </a>
        )
    }

    return (
        <Link href={href} className={style.cstBlueButton}>
            {children}
            <PlaySVG/>
        </Link>
    )
}
