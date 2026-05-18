import type {Metadata} from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block37 from "@/components/sections/Block37";
import Block38 from "@/components/sections/Block38";
import Block39 from "@/components/sections/Block39";


export const metadata: Metadata = {
    title: 'Цены | Reputa.ru',
    description: 'Автоматические рассылки покупателям на Wildberries',
}

export default function AboutPage() {
    return (
        <main>
            <Header />
            <Block37 />
            <Block38 />
            <Block39 />
            <Footer />
        </main>
    )
}
