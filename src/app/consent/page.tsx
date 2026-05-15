import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
    title: 'Согласие на обработку персональных данных | Reputa.ru',
    description: 'Согласие на обработку персональных данных сервиса Reputa.ru в соответствии с 152-ФЗ.',
}

const EMAIL = 'vip.reputa@mail.ru'
const SITE_URL = 'https://reputa.ru/'

export default function ConsentPage() {
    return (
        <main>
            <Header />
            <section className="cst-legal-page">
                <div className="cst-legal-container">
                    <h1 className="cst-legal-title">Согласие на обработку персональных данных</h1>

                    <p className="cst-legal-preamble">
                        Настоящее Согласие на обработку персональных данных составлено в соответствии с
                        Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
                        Я, заполняя форму на веб-сайте{' '}
                        <a href={SITE_URL} className="cst-legal-link">{SITE_URL}</a>
                        {' '}(далее — Сайт), а также совершая действия, направленные на передачу своих
                        персональных данных Оператору, свободно, своей волей и в своем интересе даю
                        согласие Индивидуальному предпринимателю Романову Егору Николаевичу
                        (ИНН: 760210593072, ОГРНИП 325762700011721), (далее — Оператор) на обработку
                        моих персональных данных на следующих условиях.
                    </p>

                    <Section title="1. Цель обработки персональных данных">
                        <p>
                            Предоставление мне доступа к сервисам, информации и/или материалам,
                            содержащимся на Сайте.
                        </p>
                    </Section>

                    <Section title="2. Перечень персональных данных, на обработку которых дается согласие">
                        <ul>
                            <li>фамилия, имя, отчество;</li>
                            <li>электронный адрес;</li>
                            <li>номера телефонов;</li>
                            <li>платежные реквизиты.</li>
                        </ul>
                    </Section>

                    <Section title="3. Перечень действий (операций) с персональными данными">
                        <p>
                            Оператор вправе осуществлять сбор, запись, систематизацию, накопление,
                            хранение, уточнение (обновление, изменение), извлечение, использование,
                            передачу (распространение, предоставление, доступ), обезличивание,
                            блокирование, удаление и уничтожение персональных данных как с использованием
                            средств автоматизации, так и без их использования.
                        </p>
                    </Section>

                    <Section title="4. Субъект персональных данных гарантирует">
                        <ul>
                            <li>предоставленная информация является полной, точной и достоверной;</li>
                            <li>информация предоставлена в отношении себя лично;</li>
                            <li>
                                при предоставлении информации не нарушается законодательство РФ
                                и права третьих лиц.
                            </li>
                        </ul>
                    </Section>

                    <Section title="5. Передача персональных данных третьим лицам">
                        <p>
                            Оператор не передает персональные данные третьим лицам, за исключением
                            случаев, предусмотренных действующим законодательством РФ, либо когда
                            субъект персональных данных дал прямое согласие на передачу данных
                            третьему лицу для исполнения обязательств по гражданско-правовому договору.
                        </p>
                    </Section>

                    <Section title="6. Срок действия согласия">
                        <p>
                            Согласие действует с момента его предоставления до момента достижения
                            целей обработки персональных данных, если иной срок не установлен
                            договором или федеральным законом.
                        </p>
                    </Section>

                    <Section title="7. Отзыв согласия">
                        <p>
                            Субъект персональных данных вправе отозвать согласие в любое время,
                            направив Оператору уведомление на электронную почту{' '}
                            <a href={`mailto:${EMAIL}`} className="cst-legal-link">{EMAIL}</a>
                            {' '}с пометкой «Отзыв согласия на обработку персональных данных».
                        </p>
                    </Section>

                    <Section title="8. Уточнение персональных данных">
                        <p>
                            При выявлении неточностей в персональных данных субъект обязуется
                            направить Оператору уведомление на адрес{' '}
                            <a href={`mailto:${EMAIL}`} className="cst-legal-link">{EMAIL}</a>
                            {' '}с пометкой «Актуализация персональных данных».
                        </p>
                    </Section>

                    <Section title="9. Изменения в Политике обработки персональных данных">
                        <p>
                            Оператор вправе вносить изменения в настоящую Политику обработки
                            персональных данных. Новая редакция Политики размещается на Сайте
                            по адресу{' '}
                            <a href={SITE_URL} className="cst-legal-link">{SITE_URL}</a>
                            {' '}и действует бессрочно до замены новой версией.
                        </p>
                    </Section>

                    <Section title="10. Акцепт согласия">
                        <p>
                            Заполнение формы на Сайте, проставление отметки (галочки) в чекбоксе
                            или нажатие кнопки, подтверждающей отправку персональных данных,
                            означает полное и безоговорочное принятие настоящего Согласия.
                        </p>
                    </Section>
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
                .cst-legal-container {
                    max-width: 800px;
                    width: 100%;
                }
                .cst-legal-title {
                    font-family: var(--font-onest);
                    font-size: 32px;
                    font-weight: 700;
                    color: var(--color-dark);
                    margin-bottom: 32px;
                    line-height: 1.25;
                }
                .cst-legal-preamble {
                    font-size: 15px;
                    color: #3a3f5c;
                    line-height: 1.75;
                    margin-bottom: 40px;
                }
                .cst-legal-section {
                    margin-bottom: 36px;
                }
                .cst-legal-section-title {
                    font-family: var(--font-onest);
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--color-dark);
                    margin-bottom: 12px;
                }
                .cst-legal-section p {
                    font-size: 15px;
                    color: #3a3f5c;
                    line-height: 1.75;
                    margin-bottom: 10px;
                }
                .cst-legal-section ul {
                    font-size: 15px;
                    color: #3a3f5c;
                    line-height: 1.75;
                    padding-left: 20px;
                    margin-bottom: 10px;
                }
                .cst-legal-section li {
                    margin-bottom: 6px;
                }
                .cst-legal-link {
                    color: var(--color-primary) !important;
                    text-decoration: underline !important;
                }
            `}</style>
        </main>
    )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="cst-legal-section">
            <h2 className="cst-legal-section-title">{title}</h2>
            {children}
        </div>
    )
}
