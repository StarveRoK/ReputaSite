import style from './style.module.css'

import Link from "next/link";
import { ReactNode } from "react";
import PlaySVG from "@/components/ui/PlaySVG";

export default function BlueButton({ children, href }: { children: ReactNode; href: string }) {
    return (
        <Link href={href} className={style.cstBlueButton}>
            {children}
            <PlaySVG/>
        </Link>
    )
}
