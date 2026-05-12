import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Block8 from '@/components/sections/Block8'
import Block13 from '@/components/sections/Block13'
import Block14 from '@/components/sections/Block14'
import Block15 from '@/components/sections/Block15'
import Block16 from '@/components/sections/Block16'
import Block17 from '@/components/sections/Block17'
import Block18 from '@/components/sections/Block18'
import Block19 from '@/components/sections/Block19'
import Block20 from '@/components/sections/Block20'
import Block21 from '@/components/sections/Block21'

export const metadata: Metadata = {
    title: 'Продукт - удаление негативных отзывов | Reputa.ru',
    description: 'Автоматическое удаление негативных отзывов на Wildberries',
}

export default function NegativeReviewsPage() {
    return (
        <main>
            <Header />
            <Block13 />
            <Block14 />
            <Block15 />
            <Block16 />
            <Block17 />
            <Block18 />
            <Block19 />
            <Block20 />
            <Block21 />
            <Block8 />
            <Footer />
        </main>
    )
}
