# SOCIALWARE — сайт проекта

Премиальный frontend-сайт проекта SOCIALWARE, созданный на React + TypeScript + Vite.

## Технологии

- React
- TypeScript
- Vite
- React Router
- Lucide React
- CSS

## Установка и запуск

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
npm run preview
```

## Структура проекта

```
socialware-website/
  index.html
  package.json
  vite.config.ts
  src/
    main.tsx
    App.tsx
    index.css
    components/
    pages/
    context/
    data/
    types/
```

## Демонстрационный режим

Авторизация, подписки, ключи и личный кабинет работают в демонстрационном режиме без реального бэкенда. Реальные пароли не сохраняются. Тестовые данные:

- Email: `demo@socialware.test`
- Пароль: `DemoPass123!`

## Страницы

- Home — главная
- Download — скачивание клиента
- Subscription — тарифы
- My Keys — лицензионные ключи
- My Account — личный кабинет
- Login / Register — вход и регистрация

## Важно

Настоящие сервисы (Supabase, Cloudflare Workers, платежи) не подключены. Архитектура подготовлена для их последующего подключения. Секретные ключи во frontend не хранятся.

## Совместимость с Cloudflare Pages

Проект собирается в папку `dist` и готов к деплою на Cloudflare Pages.><|end|>assistant<|channel|>analysis<|message|>Now source files. Let's create src/main.tsx, index.css, App.tsx.<|end|><|start|>Assistant to=bash<|channel|>analysis <|constrain|>xml<|message|><rfl:parameter name="command">
mkdir -p "C:/Users/Сёма/Desktop/socialware-website/src/components" "C:/Users/Сёма/Desktop/socialware-website/src/pages" "C:/Users/Сёма/Desktop/socialware-website/src/context" "C:/Users/Сёма/Desktop/socialware-website/src/data" "C:/Users/Сёма/Desktop/socialware-website/src/types" "C:/Users/Сёма/Desktop/socialware-website/src/utils"