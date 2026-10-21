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
- `/aktualne-udalosti` – časovo obmedzený kalendár miestnych podujatí; aktuálne obsahuje október 2026 (zostávajúci program a prebiehajúce výstavy, overené 21. októbra).

Dáta atrakcií sú v `lib/site-data.ts`. Udalosti sú v `lib/events-data.ts` a pred ďalším publikovaným obdobím ich treba overiť na stránkach organizátorov. Navigácia a sitemap zahŕňajú obe podstránky.

## Fotografie a zdroje

Optimalizované fotografie chaty a atrakcií sú v:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

Licencie externých fotografií sú evidované v `public/images/attractions/credits.md`. Detailné obsahové a implementačné zadanie je v priečinku `instruction/`.


## Fotografická aktualizácia a rozloženie (21. 10. 2026)

Všetky staré fotografie chaty nahrádza 41 optimalizovaných WebP zo sady `Pallov Dvor - Upravene fotky`. Katalóg a rozdelenie jednotiek sú v `lib/photography.ts`, zdrojové názvy a kontrolné súčty v `public/images/pallov-dvor/manifest.json`. Verejné označenia jednotiek sú `Pri vstupnej bráne` a `Pri saune`.

Domov používa delené hero a fotografické predstavenie oboch jednotiek. Ubytovanie rozlišuje skutočné interiéry oboch jednotiek, galéria obsahuje všetkých 41 záberov s filtrami a prístupným zväčšením. Fotografie sa aktualizujú aj v ostatných podstránkach, metadátach, štruktúrovaných dátach a sitemap. Pri atrakciách sa mení iba fotografia Strečna; zdroj a CC licencia sú pri karte aj v evidencii.

Aktuálne zadanie je v `instruction/`; `instruction/shared/photo-map.md` obsahuje kompletnú mapu novej sady. Staršie HTML/PDF v `documentation/` a zdroje v `instruction/_archive/` sú historické podklady, nie aktuálna špecifikácia.

## Albumy a konzistencia stránok

Fotogaléria obsahuje štyri samostatné albumy; jednotky majú vlastné filtre prízemia/poschodia a zväčšenie len v rámci albumu. Kotvy `pri-brane`, `pri-saune`, `spolocny-priestor` a `exterier` sa používajú aj pri odkazoch z ostatných stránok. Fotosekcie a karty čerpajú viditeľné označenie z centrálneho katalógu. Pri vypnutom formulári slúži na overenie termínu prehľadný telefonický/e-mailový panel. Sezóna je podľa potvrdenia majiteľa do 30. septembra.
