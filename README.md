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

## Kontaktný formulár

Formulár (`app/kontakt/actions.ts`) posiela dopyty cez SMTP schránky `oddych@pallovdvor.sk` (Websupport Biznis Mail) na adresu `contactForm.recipient` v `lib/site-data.ts`. Proti botom ho chráni Cloudflare Turnstile a skryté pole `firma`.

Premenné prostredia (vo Verceli pre Production aj Preview, lokálne v `.env.local`):

- `KEYCLOAK_SMTP_HOST`, `KEYCLOAK_SMTP_PORT`, `KEYCLOAK_SMTP_SSL`, `KEYCLOAK_SMTP_STARTTLS`, `KEYCLOAK_SMTP_AUTH`, `KEYCLOAK_SMTP_USER`, `KEYCLOAK_SMTP_PASSWORD`, `KEYCLOAK_SMTP_FROM` – Websupport: `smtp.m1.websupport.sk`, port `465`, SSL; schránka musí mať vypnutú GeoIP ochranu.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` – kľúče widgetu z Cloudflare. Lokálne a v Preview stačia testovacie kľúče Cloudflare, ktoré vždy prejdú (`1x00000000000000000000AA` / `1x0000000000000000000000000000000AA`).

## Obsah webu

Hlavné podstránky sú v priečinku `app/`. Atrakcie sú rozdelené podľa sezóny:

- `/atrakcie` – letné a zimné atrakcie v okolí,
- `/aktualne-udalosti` – časovo obmedzený kalendár miestnych podujatí; aktuálne obsahuje november 2026 (zostávajúci program a prebiehajúce výstavy, overené 5. novembra).

Dáta atrakcií sú v `lib/site-data.ts`. Udalosti sú v `lib/events-data.ts` a pred ďalším publikovaným obdobím ich treba overiť na stránkach organizátorov. Navigácia a sitemap zahŕňajú obe podstránky.

## Fotografie a zdroje

Optimalizované fotografie chaty a atrakcií sú v:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

Licencie externých fotografií sú evidované v `public/images/attractions/credits.md`. Detailné obsahové a implementačné zadanie je v priečinku `instruction/`.


## Fotografická aktualizácia a rozloženie (21. 10. 2026)

Všetky staré fotografie chaty nahrádza 41 optimalizovaných WebP zo sady `Pallov Dvor - Upravene fotky`. Katalóg a rozdelenie jednotiek sú v `lib/photography.ts`, zdrojové názvy a kontrolné súčty v `public/images/pallov-dvor/manifest.json`. Verejné označenia jednotiek sú `ML – Pallov Dvor (bližšie k ceste)` a `PS – Pallov Dvor (bližšie k saune)`.

Domov používa delené hero a fotografické predstavenie oboch jednotiek. Ubytovanie rozlišuje skutočné interiéry oboch jednotiek, galéria obsahuje všetkých 41 záberov s filtrami a prístupným zväčšením. Fotografie sa aktualizujú aj v ostatných podstránkach, metadátach, štruktúrovaných dátach a sitemap. Pri atrakciách sa mení iba fotografia Strečna; zdroj a CC licencia sú pri karte aj v evidencii.

Aktuálne zadanie je v `instruction/`; `instruction/shared/photo-map.md` obsahuje kompletnú mapu novej sady. Staršie HTML/PDF v `documentation/` a zdroje v `instruction/_archive/` sú historické podklady, nie aktuálna špecifikácia.

## Albumy a konzistencia stránok

Fotogaléria obsahuje štyri samostatné albumy; jednotky majú vlastné filtre prízemia/poschodia a zväčšenie len v rámci albumu. Kotvy `pri-brane`, `pri-saune`, `spolocny-priestor` a `exterier` sa používajú aj pri odkazoch z ostatných stránok. Fotosekcie a karty čerpajú viditeľné označenie z centrálneho katalógu. Pri vypnutom formulári slúži na overenie termínu prehľadný telefonický/e-mailový panel. Sezóna je podľa potvrdenia majiteľa do 30. septembra.
