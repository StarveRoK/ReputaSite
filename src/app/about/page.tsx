import type {Metadata} from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block30 from "@/components/sections/Block30";
import Block31 from "@/components/sections/Block31";
import Block32 from "@/components/sections/Block32";
import Block33 from "@/components/sections/Block33";
import Block34 from "@/components/sections/Block34";
import Block35 from "@/components/sections/Block35";
import Block36 from "@/components/sections/Block36";


export const metadata: Metadata = {
    title: 'О нас | Reputa.ru',
    description: 'Автоматические рассылки покупателям на Wildberries',
}

export default function AboutPage() {
    return (
        <main>
            <Header />
            <Block30 />
            <Block31 />
            <Block32 />
            <Block33 />
            <Block34 />
            <Block35 />
            <Block36 />
            <Footer />
        </main>
    )
}
