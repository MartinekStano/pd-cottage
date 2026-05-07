# Prompt pre Codex - implementácia webu Pallov Dvor

Si senior frontend developer v existujúcom projekte `pd-cottage`. Tvojou úlohou je naprogramovať kompletný responzívny prezentačný web pre súkromnú chatu Pallov Dvor podľa pripravených inštrukcií v priečinku `instruction/`.

## Kontext projektu

Pallov Dvor je súkromná chata na adrese Lutiše Adamovci 373. Web má prezentovať pokojné krátkodobé ubytovanie v súkromí pre rodiny, páry, dospelých hostí a menšie firemné kolektívy.

Web nemá pôsobiť ako hotelový portál, penzión, reštaurácia ani web pre hlučné oslavy. Hlavný cieľ je dostať návštevníka k akcii `Overiť dostupnosť termínu`.

## Povinné čítanie pred implementáciou

Najprv si prečítaj tieto súbory:

- `AGENTS.md`
- `instruction/README.md`
- `instruction/pd-cottage.adoc`
- `instruction/shared/project-brief.md`
- `instruction/shared/brand-ui.md`
- `instruction/shared/contact.md`
- `instruction/shared/photo-map.md`
- všetky súbory v `instruction/pages/`

Projekt používa Next.js `16.2.4`. Pred úpravou Next.js kódu si prečítaj relevantnú dokumentáciu v `node_modules/next/dist/docs/`, hlavne časti k App Routeru, metadata, routing a image handlingu. Nepredpokladaj staršie Next.js správanie.

## Technický stack

Použi existujúci stack projektu:

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- App Router

Nepridávaj backend. Kontaktný formulár môže byť statický frontend prototyp. CTA tlačidlá smeruj na stránku Kontakt alebo na sekciu formulára.

## Povinné podstránky

Vytvor tieto stránky:

- Domov: `/`
- O nás: `/o-nas`
- Ubytovanie: `/ubytovanie`
- Cenník: `/cennik`
- Atrakcie: `/atrakcie`
- Wellness: `/wellness`
- Kontakt: `/kontakt`

Každá stránka musí mať vlastné SEO metadata.

## Obsah a dáta

Obsah jednotlivých stránok čerpaj zo súborov:

- `instruction/pages/home.md`
- `instruction/pages/about.md`
- `instruction/pages/accommodation.md`
- `instruction/pages/pricing.md`
- `instruction/pages/attractions.md`
- `instruction/pages/wellness.md`
- `instruction/pages/contact.md`

Globálne dáta drž centralizovane, napríklad v `lib/site-data.ts` alebo podobnom súbore:

- navigácia,
- kontaktné údaje,
- ceny,
- CTA texty,
- vybavenie,
- wellness príplatky,
- atrakcie,
- image paths.

Kontaktné údaje:

- Telefón: `0911 455 600`
- E-mail: `oddych@pallovdvor.sk`
- Adresa: `Lutiše Adamovci 373`

## Fotografie

Použi lokálne pripravené fotografie v:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

K dispozícii je aj mapovanie:

- `public/images/pallov-dvor/manifest.json`
- `instruction/shared/photo-map.md`
- `public/images/attractions/credits.md`

Nepoužívaj generické SVG ilustrácie ako hlavný vizuál. Web musí pracovať s reálnymi fotografiami chaty, interiéru, exteriéru, wellness a spoločných priestorov.

Ak niektorá fotka presne nesedí na obsah, použi najbližšiu vhodnú reálnu fotku z tohto priečinka a zachovaj zmysluplný `alt` text.

## Dizajn

Dodrž vizuálny smer z `instruction/shared/brand-ui.md`.

Web má pôsobiť:

- pokojne,
- prémiovo, ale nie prehnane luxusne,
- prírodne,
- vzdušne,
- útulne,
- dôveryhodne.

Použi:

- teplé prírodné pozadie,
- veľké reálne fotografie,
- elegantnú typografiu pre nadpisy,
- dobre čitateľný text,
- prehľadné karty pre opakovaný obsah,
- jasné CTA tlačidlá,
- veľkorysé rozostupy medzi sekciami,
- responzívny layout pre mobil aj desktop.

Hero sekcia na domove musí hneď ukázať značku `Pallov Dvor`, reálnu fotku chaty alebo exteriéru a CTA `Overiť dostupnosť termínu`.

Na mobile nesmie nič prekrývať text, tlačidlá ani navigáciu. Karty, tabuľky a formulár musia byť dobre čitateľné.

## Navigácia a layout

Vytvor spoločný layout:

- hlavička s logom `Pallov Dvor`,
- podtitul `Súkromná chata v Lutišiach`,
- navigácia,
- výrazné CTA `Overiť termín`,
- pätička s kontaktom a krátkym popisom.

Navigácia:

- Domov
- O nás
- Ubytovanie
- Cenník
- Atrakcie
- Wellness
- Kontakt

Na mobile priprav použiteľnú mobilnú navigáciu.

## Obsahové zákazy

Nepoužívaj tieto témy ani služby:

- párty,
- hlučné oslavy,
- mladé partie,
- nočný život,
- žúr,
- divoký víkend,
- reštaurácia ako služba objektu,
- menu,
- masáže,
- bazén,
- vírivka.

Komunikuj iba reálne vybavenie:

- ubytovanie,
- 2 samostatné jednotky,
- kapacita až 16 osôb,
- sauna,
- vonkajšia kaďa,
- altánok,
- gril,
- spoločenský priestor,
- projektor,
- Wi-Fi,
- TV,
- oplotený objekt,
- 4 parkovacie miesta.

## Stránka Kontakt

Formulár má obsahovať:

- Meno a priezvisko
- E-mail
- Telefón
- Termín od
- Termín do
- Počet osôb
- Typ prenájmu
- Typ pobytu
- Správa

Možnosti pri type prenájmu:

- 1 samostatná ubytovacia jednotka
- Celý objekt
- Ešte neviem

Možnosti pri type pobytu:

- Rodinný pobyt
- Pobyt pre dospelých hostí
- Firemný pobyt / teambuilding
- Iný typ pobytu

Formulár nemusí odosielať dáta na backend, ale musí pôsobiť ako realistický produkčný formulár.

## Stránka Atrakcie

Použi obsah z `instruction/pages/attractions.md`. Ak sú v dátach atrakcií iba placeholdery, priprav dátovú štruktúru tak, aby sa dala ľahko doplniť.

Vhodné atrakcie v okolí, ktoré môžu byť zahrnuté:

- Vrátna dolina / Malá Fatra
- Jánošíkove diery
- Terchová
- Veľká Rača / Oščadnica
- Slovenský orloj v Starej Bystrici
- Vychylovka / Múzeum kysuckej dediny / lesná železnica
- Hrad Strečno

Pri každej atrakcii použi polia:

- názov,
- krátky opis,
- orientačná vzdialenosť alebo čas autom,
- typ aktivity,
- vhodné pre,
- obrázok,
- voliteľný odkaz.

Ak používaš externé informácie, preferuj oficiálne zdroje alebo Slovakia.travel. Nepíš neoverené konkrétne otváracie hodiny alebo ceny, ak ich nebudeš overovať.

## Kvalita kódu

Vytvor čistú komponentovú architektúru.

Odporúčané komponenty:

- `SiteHeader`
- `SiteFooter`
- `Hero`
- `SectionHeader`
- `CTAButton`
- `FeatureCard`
- `ImageCard`
- `PriceCard`
- `ResponsiveTable`
- `ContactForm`
- `AttractionCard`

Nerob zbytočne veľké monolitické stránky. Opakovaný obsah rieš cez dáta a mapovanie.

## Overenie

Po implementácii spusti:

```bash
npm run lint
npm run build
```

Ak prejdú, spusti dev server:

```bash
npm run dev
```

Skontroluj stránku na:

- desktop šírke,
- mobilnej šírke,
- domove,
- kontakte,
- cenníku,
- aspoň jednej obsahovej podstránke.

Vo finálnej odpovedi napíš:

- čo bolo implementované,
- ktoré súbory sú kľúčové,
- výsledok `lint` a `build`,
- URL lokálneho dev servera,
- prípadné otvorené otázky alebo riziká.
