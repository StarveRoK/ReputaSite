import type { Metadata } from 'next'
import { Inter, Onest } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CookieConsentBanner from '@/components/ui/CookieConsentBanner'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest' })

export const metadata: Metadata = {
  title: 'Reputa.ru',
  description: 'SEO optimized website',
  keywords: ['nextjs', 'seo', 'website'],
  openGraph: {
    title: 'My Site',
    description: 'SEO optimized website',
    url: 'https://reputa.ru',
    siteName: 'My Site',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${onest.variable}`}>
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}