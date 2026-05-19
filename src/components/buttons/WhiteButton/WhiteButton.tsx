import style from './style.module.css'
import {ReactNode} from "react";
import {rich} from "@/lib/richText";
import PlaySVG from "@/components/ui/PlaySVG";
import Link from "next/link";


interface WhiteButtonProps {
    href: string;
    label?: string;
    children?: ReactNode;
    download?: string;
    hideIcon?: boolean;
}

export default function WhiteButton({ label, children, href, download, hideIcon }: WhiteButtonProps) {
    const content = (
        <>
            {label ? rich(label) : children}
            {!hideIcon && <PlaySVG/>}
        </>
    );

    if (download) {
        return (
            <a href={href} download={download} className={`${style.cstWhiteButton} ${style.cstWhiteButtonNoMargin}`}>
                {content}
            </a>
        )
    }

    return (
        <Link href={href} className={style.cstWhiteButton}>
            {content}
        </Link>
    )
}