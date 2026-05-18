# CLAUDE.md

Инструкции для Claude Code при работе с этим репозиторием.

## Команды

```bash
npm run dev      # Дев-сервер на http://localhost:3000 (Turbopack)
npm run build    # Сборка для продакшена
npm run start    # Запуск продакшен-сборки
npm run lint     # Проверка ESLint
```

Тесты не настроены.

## О проекте

**ReputaSite** — маркетинговый лендинг для SaaS-сервиса **REPUTA**: ИИ-управление репутацией и отзывами для продавцов Wildberries. Целевая аудитория — селлеры WB. Триал 14 дней. Все тексты на русском.

## Стек

| Слой | Инструмент |
|---|---|
| Фреймворк | Next.js 16 (App Router) |
| Язык | TypeScript 5 |
| Стили | TailwindCSS 4 + Bootstrap 5 + CSS-файлы на секцию |
| Шрифты | Inter, Onest (Google Fonts, кириллица) |
| SVG | `@svgr/webpack` — импорт как React-компоненты |

## Структура сайта

```
src/
├── app/
│   ├── layout.tsx          # Корневой лейаут, мета-теги, шрифты
│   ├── page.tsx            # Главная страница — собирает секции
│   ├── globals.css         # CSS-переменные (цвета, отступы)
│   ├── sitemap.ts          # Sitemap для SEO
│   └── robots.ts           # robots.txt для SEO
│
├── components/
│   ├── sections/           # Секции страницы (по порядку):
│   │   ├── HeroSection.tsx     # Заголовок, CTA, социальные доказательства
│   │   ├── Block2.tsx          # Описание возможностей / features
│   │   ├── Block3.tsx          # Мобильное приложение (App Store / Google Play)
│   │   ├── Block4.tsx          # (секция — уточни назначение)
│   │   ├── Block5.tsx          # (секция — уточни назначение)
│   │   └── Block6.tsx          # Контакты / поддержка (телефон, наушники)
│   ├── layout/             # Компоненты лейаута (Header, Footer и т.д.)
│   └── ui/                 # Иконки и SVG (Logo, StarSVG, PlaySVG, BenefitN и т.д.)
│
├── styles/                 # CSS-файлы секций (hero.css, block_2.css и т.д.)
├── lib/
│   └── api.ts              # apiFetch<T> — обёртка над fetch + ISR 60s
└── services/
    └── posts.service.ts    # Заготовка сервисного слоя (пока пустой)
```

### Порядок секций на странице

```
Header → HeroSection → Block2 → Block3 → Block4 → Block5 → Block6
```

## Соглашения по стилям

- Каждая секция подключает свой CSS-файл (`import '@/styles/block_N.css'`) напрямую в компонент.
- Кастомные классы используют префикс `cst-`.
- Глобальные CSS-переменные — только в `globals.css`.
- TailwindCSS — для утилитарных классов; Bootstrap — для сетки и компонентов.

## API-слой

`src/lib/api.ts` экспортирует `apiFetch<T>(endpoint, options?)`:
- Базовый URL: `process.env.NEXT_PUBLIC_API_URL` (дефолт: `http://localhost:8000/`)
- Добавляет `Content-Type: application/json`
- ISR-ревалидация: 60 секунд (`next: { revalidate: 60 }`)

## Алиасы путей

`@/*` → `src/*`

## Важные замечания

- Использовать `next/image` вместо `<img>` для картинок (оптимизация и LCP).
- Мета-теги в `layout.tsx` содержат плейсхолдеры — нужно заменить на реальные тексты про REPUTA.
- `posts.service.ts` пустой — добавлять сервисную логику туда.

ВСЕГДА ГОВОРИ НА РУССКОМ