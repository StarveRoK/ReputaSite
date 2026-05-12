import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block10 from "@/components/sections/Block10";
import Block11 from "@/components/sections/Block11";
import Block12 from "@/components/sections/Block12";
import Block7 from "@/components/sections/Block7";
import Block8 from "@/components/sections/Block8";

export const metadata: Metadata = {
    title: 'Продукт - ответы на отзывы и вопросы | Reputa.ru',
    description: 'Автоматические ответы на отзывы и вопросы покупателей на Wildberries',
}

export default function ReviewsPage() {
    return (
        <main>
            <Header />
            <Block10 />
            <Block11 />
            <Block12 />
            <Block7 />
            <Block8 />
            <Footer />
        </main>
    )
}
