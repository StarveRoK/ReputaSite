'use client'

import CookieConsent from 'react-cookie-consent'

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Принять"
      declineButtonText="Отклонить"
      enableDeclineButton
      cookieName="reputa_cookie_consent"
      expires={365}
      style={{
        background: '#1a1a2e',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '12px 24px',
        alignItems: 'center',
        fontSize: '14px',
        zIndex: 9999,
      }}
      buttonStyle={{
        background: '#6c5ce7',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        borderRadius: '8px',
        padding: '8px 20px',
        border: 'none',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '14px',
        fontWeight: '500',
        borderRadius: '8px',
        padding: '8px 20px',
        border: '1px solid rgba(255,255,255,0.2)',
        cursor: 'pointer',
      }}
    >
      Мы используем файлы cookie для улучшения работы сайта и анализа трафика.
      Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
      <a href="/privacy" style={{ color: '#a29bfe', textDecoration: 'underline' }}>
        политикой конфиденциальности
      </a>
      .
    </CookieConsent>
  )
}
