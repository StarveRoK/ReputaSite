import style from './style.module.css'

import Link from "next/link";

export default function RegisterButton() {
    return (
        <Link href="https://app.reputa.ru" className={style.cstRegisterButton}>
            Зарегистрироваться
        </Link>
    )
}
