import style from './style.module.css'

import Link from "next/link";
import { ReactNode } from "react";
import PlaySVG from "@/components/ui/PlaySVG";
import { rich } from "@/lib/richText";

interface BlueButtonProps {
    href: string;
    label?: string;
    children?: ReactNode;
    download?: string;
}

export default function BlueButton({ label, children, href, download }: BlueButtonProps) {
    const content = (
        <>
            {label ? rich(label) : children}
            <PlaySVG/>
        </>
    );

    if (download) {
        return (
            <a href={href} download={download} className={`${style.cstBlueButton} ${style.cstBlueButtonNoMargin}`}>
                {content}
            </a>
        )
    }

    return (
        <Link href={href} className={style.cstBlueButton}>
            {content}
        </Link>
    )
}
