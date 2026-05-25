import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Calculator from '@/components/sections/Calculator'

export const metadata: Metadata = {
    title: 'Калькулятор рейтинга на Wildberries — Reputa',
    description:
        'Бесплатный калькулятор рейтинга для продавцов Wildberries. ' +
        'Узнайте текущий рейтинг, сколько негативных отзывов нужно убрать и как это сделать выгоднее всего.',
    openGraph: {
        title: 'Калькулятор рейтинга WB — Reputa',
        description: 'Рассчитайте, что нужно сделать для роста рейтинга вашей карточки на Wildberries.',
        url: 'https://reputa.ru/calculator',
    },
}

export default function CalculatorPage() {
    return (
        <main>
            <Header />
            <Calculator />
            <Footer />
        </main>
    )
}
