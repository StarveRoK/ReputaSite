import style from './style.module.css'

import Link from "next/link";

export default function LoginButton() {
    return (
        <Link href="https://app.reputa.ru" className={style.cstLoginButton}>
            Войти
        </Link>
    )
}
