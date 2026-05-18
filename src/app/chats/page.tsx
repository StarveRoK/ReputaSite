import type {Metadata} from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block7 from "@/components/sections/Block7";
import Block8 from "@/components/sections/Block8";
import Block27 from "@/components/sections/Block27";
import Block28 from "@/components/sections/Block28";
import Block29 from "@/components/sections/Block29";


export const metadata: Metadata = {
    title: 'Продукт - чаты | Reputa.ru',
    description: 'Автоматические рассылки покупателям на Wildberries',
}

export default function ChatsPage() {
    return (
        <main>
            <Header />
            <Block27 />
            <Block28 />
            <Block29 />
            <Block7 />
            <Block8 />
            <Footer />
        </main>
    )
}
