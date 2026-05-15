import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlueButton from '@/components/buttons/BlueButton/BlueButton'

export const metadata: Metadata = {
    title: 'Шаблон отзыва на обработку персональных данных | Reputa.ru',
    description: 'Шаблон заявления об отзыве согласия на обработку персональных данных сервиса Reputa.ru.',
}

export default function WithdrawalPage() {
    return (
        <main>
            <Header />
            <section className="cst-legal-page">
                <div className="cst-legal-container">
                    <div className="cst-title-div">
                        <h1 className="cst-legal-title">Шаблон отзыва на обработку персональных данных</h1>
                        <BlueButton
                            href="/files/template_personal_data.docx"
                            download="Шаблон отзыва на обработку персональных данных.docx"
                        >
                            Скачать
                        </BlueButton>
                    </div>
                    <Image
                        src="/images/processing-review-template.webp"
                        alt="Шаблон отзыва согласия на обработку персональных данных"
                        width={800}
                        height={1100}
                        className="cst-withdrawal-image"
                        priority
                    />
                </div>
            </section>
            <Footer />

            <style>{`
                .cst-legal-page {
                    width: 100%;
                    padding: 60px 24px 80px;
                    display: flex;
                    justify-content: center;
                }
                .cst-title-div{
                    display: flex;
                    justify-content: space-between;
                }
                .cst-legal-container {
                    max-width: 800px;
                    width: 100%;
                }
                .cst-legal-title {
                    font-family: var(--font-onest);
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--color-dark);
                    margin-bottom: 40px;
                    line-height: 1.25;
                }
                .cst-withdrawal-image {
                    width: 100%;
                    height: auto;
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                }
            `}</style>
        </main>
    )
}
