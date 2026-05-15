import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
    title: 'Политика использования файлов cookie | Reputa.ru',
    description: 'Политика использования файлов cookie на сайте Reputa.ru — какие куки мы используем, зачем и как ими управлять.',
}

const EMAIL = 'vip.reputa@mail.ru'
const SITE_URL = 'https://reputa.ru/'
const COMPANY_NAME = 'ИП Романов Егор Николаевич'

export default function CookiesPage() {
    return (
        <main>
            <Header />
            <section className="cst-legal-page">
                <div className="cst-legal-container">
                    <h1 className="cst-legal-title">Политика использования файлов cookie</h1>
                    <p className="cst-legal-updated">Актуальная редакция: 15 мая 2025 г.</p>

                    <p className="cst-legal-intro">
                        Настоящая политика описывает, какие файлы cookie и аналогичные технологии использует сайт{' '}
                        <a href={SITE_URL} className="cst-legal-link">{SITE_URL}</a>, для чего они нужны
                        и как вы можете управлять ими. Оператором сайта является {COMPANY_NAME}.
                    </p>

                    <Section title="1. Что такое файлы cookie">
                        <p>
                            Cookie — небольшой текстовый файл, который сайт сохраняет в вашем браузере при посещении.
                            При следующих визитах браузер отправляет его обратно на сервер, позволяя сайту
                            «узнать» вас, сохранить настройки и собрать статистику.
                        </p>
                        <p>
                            Помимо cookie, мы можем использовать схожие технологии: localStorage, sessionStorage и пиксели
                            аналитических сервисов. В настоящей политике все они объединены под термином «cookie».
                        </p>
                    </Section>

                    <Section title="2. Какие cookie мы используем">
                        <p>Мы делим cookie на четыре категории:</p>

                        <p><strong>2.1. Необходимые cookie</strong></p>
                        <p>
                            Без них сайт не может корректно работать. Они не требуют вашего согласия и не могут быть
                            отключены. Примеры: сохранение сессии, защита от CSRF-атак.
                        </p>
                        <ul>
                            <li>Срок хранения: до закрытия браузера или не более 1 года.</li>
                            <li>Передача третьим лицам: не осуществляется.</li>
                        </ul>

                        <p><strong>2.2. Функциональные cookie</strong></p>
                        <p>
                            Позволяют запоминать ваши предпочтения (выбранный тариф, язык интерфейса) и улучшают
                            удобство пользования сайтом.
                        </p>
                        <ul>
                            <li>Срок хранения: до 1 года.</li>
                            <li>Передача третьим лицам: не осуществляется.</li>
                        </ul>

                        <p><strong>2.3. Аналитические cookie</strong></p>
                        <p>
                            Помогают нам понять, как посетители используют сайт: какие страницы просматриваются чаще,
                            откуда приходят пользователи, где возникают затруднения. Данные собираются в обезличенном виде.
                        </p>
                        <ul>
                            <li>Используемые сервисы: Яндекс.Метрика.</li>
                            <li>Срок хранения: до 1 года.</li>
                            <li>Передача третьим лицам: данные передаются сервису аналитики в обезличенной форме согласно его политике конфиденциальности.</li>
                        </ul>

                        <p><strong>2.4. Маркетинговые cookie</strong></p>
                        <p>
                            Используются для показа релевантной рекламы на других площадках и оценки эффективности
                            рекламных кампаний.
                        </p>
                        <ul>
                            <li>Срок хранения: до 1 года.</li>
                            <li>Передача третьим лицам: рекламным платформам (Яндекс, VK) согласно их политикам.</li>
                        </ul>
                    </Section>

                    <Section title="3. Цели использования cookie">
                        <ul>
                            <li>Обеспечение работоспособности сайта и личного кабинета.</li>
                            <li>Запоминание авторизационных данных и пользовательских настроек.</li>
                            <li>Сбор обезличенной статистики для улучшения сайта и сервиса.</li>
                            <li>Оценка эффективности рекламных кампаний.</li>
                            <li>Защита от мошеннических действий и несанкционированного доступа.</li>
                        </ul>
                    </Section>

                    <Section title="4. Сторонние сервисы">
                        <p>
                            Для аналитики и маркетинга мы подключаем сторонние сервисы, которые устанавливают
                            собственные cookie. Мы не контролируем их политики, однако выбираем только надёжных
                            партнёров:
                        </p>
                        <ul>
                            <li>
                                <strong>Яндекс.Метрика</strong> — сбор статистики посещаемости.
                                Политика конфиденциальности: yandex.ru/legal/confidential/.
                            </li>
                        </ul>
                        <p>
                            Если вы не хотите, чтобы сторонние сервисы отслеживали ваши действия, воспользуйтесь
                            настройками браузера или расширениями для блокировки трекеров.
                        </p>
                    </Section>

                    <Section title="5. Как управлять cookie">
                        <p>
                            Вы вправе в любой момент изменить настройки cookie или полностью запретить их использование.
                            Обратите внимание: отключение части cookie может снизить функциональность сайта.
                        </p>

                        <p><strong>5.1. Через настройки браузера</strong></p>
                        <p>
                            В большинстве браузеров можно удалить сохранённые cookie или запретить их установку. Найдите
                            инструкцию в разделе «Помощь» вашего браузера:
                        </p>
                        <ul>
                            <li>Google Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie.</li>
                            <li>Firefox: Настройки → Приватность и защита → Куки и данные сайтов.</li>
                            <li>Safari: Настройки → Конфиденциальность → Файлы cookie и данные сайтов.</li>
                            <li>Microsoft Edge: Настройки → Файлы cookie и разрешения сайтов.</li>
                            <li>Яндекс.Браузер: Настройки → Сайты → Расширенные настройки сайтов → Куки.</li>
                        </ul>

                        <p><strong>5.2. Оптаут из аналитики Яндекса</strong></p>
                        <p>
                            Установите расширение «Яндекс.Браузер: отключить Метрику» или воспользуйтесь официальным
                            оптаут-механизмом Яндекса, описанным в его политике конфиденциальности.
                        </p>
                    </Section>

                    <Section title="6. Хранение и защита данных">
                        <p>
                            Данные, собранные через cookie, хранятся на серверах в Российской Федерации. Мы принимаем
                            технические и организационные меры для защиты этих данных от несанкционированного доступа,
                            изменения или раскрытия.
                        </p>
                        <p>
                            Мы не продаём и не передаём данные cookie третьим лицам в целях, не предусмотренных настоящей
                            политикой.
                        </p>
                    </Section>

                    <Section title="7. Согласие на использование cookie">
                        <p>
                            Продолжая использовать сайт <a href={SITE_URL} className="cst-legal-link">{SITE_URL}</a> после
                            ознакомления с настоящей политикой, вы выражаете согласие на использование cookie в
                            соответствии с её условиями.
                        </p>
                        <p>
                            Вы вправе отозвать согласие в любой момент, изменив настройки браузера согласно разделу 5
                            настоящей политики.
                        </p>
                    </Section>

                    <Section title="8. Изменения политики">
                        <p>
                            Мы оставляем за собой право обновлять настоящую политику. Актуальная версия всегда
                            размещена на странице{' '}
                            <a href={`${SITE_URL}cookies`} className="cst-legal-link">{SITE_URL}cookies</a>.
                            Продолжение использования сайта после публикации изменений означает ваше согласие
                            с обновлённой политикой.
                        </p>
                    </Section>

                    <Section title="9. Контакты">
                        <p>
                            По вопросам, связанным с использованием cookie, обращайтесь:
                        </p>
                        <ul>
                            <li><strong>{COMPANY_NAME}</strong></li>
                            <li>Email: <a href={`mailto:${EMAIL}`} className="cst-legal-link">{EMAIL}</a></li>
                        </ul>
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
                    font-size: 36px;
                    font-weight: 700;
                    color: var(--color-dark);
                    margin-bottom: 8px;
                    line-height: 1.2;
                }
                .cst-legal-updated {
                    font-size: 14px;
                    color: var(--color-gray);
                    margin-bottom: 32px;
                }
                .cst-legal-intro {
                    font-size: 16px;
                    color: var(--color-dark);
                    line-height: 1.7;
                    margin-bottom: 40px;
                }
                .cst-legal-section {
                    margin-bottom: 36px;
                }
                .cst-legal-section-title {
                    font-family: var(--font-onest);
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--color-dark);
                    margin-bottom: 12px;
                }
                .cst-legal-section p,
                .cst-legal-section ul {
                    font-size: 15px;
                    color: #3a3f5c;
                    line-height: 1.75;
                    margin-bottom: 12px;
                }
                .cst-legal-section ul {
                    padding-left: 20px;
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
