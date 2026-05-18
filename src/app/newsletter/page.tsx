import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block7 from "@/components/sections/Block7";
import Block8 from "@/components/sections/Block8";
import Block22 from "@/components/sections/Block22";
import Block23 from "@/components/sections/Block23";
import Block24 from "@/components/sections/Block24";
import Block25 from "@/components/sections/Block25";
import Block26 from "@/components/sections/Block26";

export const metadata: Metadata = {
    title: 'Продукт - рассылки покупателям | Reputa.ru',
    description: 'Автоматические рассылки покупателям на Wildberries',
}

export default function NewsletterPage() {
    return (
        <main>
            <Header />
            <Block22 />
            <Block23 />
            <Block24 />
            <Block25 />
            <Block26 />
            <Block7 />
            <Block8 />
            <Footer />
        </main>
    )
}
