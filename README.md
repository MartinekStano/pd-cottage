# Pallov Dvor

Prezentačný web súkromnej chaty Pallov Dvor v Lutišiach. Projekt používa Next.js 16, React 19, TypeScript, Tailwind CSS 4 a App Router.

## Lokálny vývoj

```bash
npm run dev
```

Web bude dostupný na [http://localhost:3000](http://localhost:3000).

Kontrola kvality a produkčný build:

```bash
npm run lint
npx next build --webpack
```

## Obsah webu

Hlavné podstránky sú v priečinku `app/`. Atrakcie sú rozdelené podľa sezóny:

- `/atrakcie` – letné a zimné atrakcie v okolí,
- `/aktualne-udalosti` – časovo obmedzený kalendár miestnych podujatí; aktuálne obsahuje september 2026.

Dáta atrakcií sú v `lib/site-data.ts`. Udalosti sú v `lib/events-data.ts` a pred ďalším publikovaným obdobím ich treba overiť na stránkach organizátorov. Navigácia a sitemap zahŕňajú obe podstránky.

## Fotografie a zdroje

Optimalizované fotografie chaty a atrakcií sú v:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

Licencie externých fotografií sú evidované v `public/images/attractions/credits.md`. Detailné obsahové a implementačné zadanie je v priečinku `instruction/`.
