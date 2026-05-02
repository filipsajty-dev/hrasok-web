# Materská škola Hrášok — Web

Marketing a registračný web pre súkromnú materskú školu Hrášok na Slovensku.

## Lokálny vývoj

**Požiadavky:** Node.js 20+, pnpm

```bash
# Inštalácia závislostí
pnpm install

# Spustenie vývojového servera (http://localhost:3000)
pnpm dev

# Build pre produkciu
pnpm build

# Linting
pnpm lint
```

## Tech stack

| Vrstva | Technológia |
|--------|-------------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Štýly | Tailwind CSS v4 |
| CMS | Sanity *(čoskoro)* |
| Email | Resend *(čoskoro)* |
| i18n | next-intl — SK (default) + EN *(čoskoro)* |
| Hosting | Vercel |

## Štruktúra projektu

```
src/app/          # Next.js App Router stránky a rozloženia
src/components/   # UI komponenty (čoskoro)
src/lib/          # Pomocné funkcie, Sanity klient (čoskoro)
messages/         # i18n preklady (čoskoro)
public/           # Statické súbory
```
