import style from './style.module.css'

import Link from "next/link";
import { ReactNode } from "react";
import PlaySVGBlue from "@/components/ui/PlaySVGBlue";

export default function WhiteButton({ children, href }: { children: ReactNode; href: string }) {
    return (
        <Link href={href} className={style.cstWhiteButton}>
            {children}
            <PlaySVGBlue/>
        </Link>
    )
}
