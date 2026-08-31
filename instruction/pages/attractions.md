# Atrakcie a zážitky v okolí

## Účel

Stránka má ukázať, že pobyt v Pallovom Dvore sa dá spojiť s pokojnými výletmi, prechádzkami, prírodou, rodinným programom, aktivitami pre dospelých hostí a menším firemným alebo teambuildingovým programom.

Stránka nahrádza pôvodnú predstavu reštauračnej podstránky. Pallov Dvor neponúka reštauračné služby.

Hlavné CTA:

- Overiť dostupnosť termínu

Sekundárne CTA:

- Kontaktovať nás

## Úvod

Nadpis:

Atrakcie a zážitky v okolí Pallovho Dvora

Podnadpis:

Vyberte si program podľa ročného obdobia. V lete vás čaká turistika, lanovky, pamiatky a rodinné atrakcie, v zime lyžovanie, skialp, bežkovanie aj pokojné prechádzky.

CTA:

- Overiť dostupnosť termínu
- Kontaktovať nás

## Pokojný pobyt s možnosťou výletov

Nadpis:

Oddych na chate aj aktívne dni v okolí

Text:

Pallov Dvor ponúka príjemné zázemie pre hostí, ktorí chcú počas pobytu spojiť oddych a zážitky. Ráno môžete vyraziť na prechádzku, výlet alebo nenáročnú aktivitu v okolí a večer sa vrátiť do súkromia chaty.

Po návrate môžete využiť altánok s grilom, spoločenský priestor, saunu alebo vonkajšiu kaďu. Vďaka tomu je pobyt vhodný pre rodiny s deťmi, páry, dospelých hostí aj menšie firemné kolektívy.

## Typy zážitkov v okolí

Nadpis:

Čo môžete počas pobytu zažiť

Karty:

- Prechádzky a príroda: Pokojné prechádzky v okolí sú vhodné pre hostí, ktorí si chcú oddýchnuť od každodenného tempa a stráviť čas vonku.
- Turistika a výlety: Okolie môže ponúknuť možnosti na kratšie aj dlhšie výlety. Po aktívnom dni sa môžete vrátiť späť do pohodlia chaty.
- Rodinný program: Rodiny s deťmi ocenia nenáročné aktivity, výlety a prechádzky, ktoré môžu doplniť pohodový pobyt v súkromí chaty.
- Spoločný program pre skupiny: Dospelí hostia a firemné kolektívy môžu pobyt doplniť o spoločné aktivity, výlety alebo pokojný teambuildingový program.

## Letné a zimné atrakcie v okolí

Stránku rozdeľ na dve samostatné sekcie s kotvami `#leto` a `#zima`. Každá sekcia používa vlastnú dátovú kolekciu a vlastné obrázky. Vzdialenosti a časy sú orientačné a pri implementácii ich komunikuj mäkko, napríklad `cca 25 min autom`.

Nadpisy:

- Letné atrakcie a výlety
- Zimné atrakcie v okolí

Štruktúra jednej atrakcie:

```ts
{
  title: "Názov atrakcie",
  description: "Krátky opis atrakcie alebo výletu.",
  distance: "Doplniť vzdialenosť",
  category: "Príroda / Turistika / Rodina / Kultúra",
  suitableFor: "Rodiny, páry, dospelí hostia",
  image: "/images/attractions/vratna-dolina.jpg",
  url: "https://slovakia.travel/en/vratna-valley-mala-fatra-mts"
}
```

### Letné atrakcie

- Jánošíkove diery: `/images/attractions/janosikove-diery.jpg`
- Vrátna dolina a Chleb: `/images/attractions/vratna-dolina.jpg`
- Letné centrum Snowparadise Veľká Rača: `/images/attractions/velka-raca.jpg`
- Slovenský orloj v Starej Bystrici: `/images/attractions/slovensky-orloj-stara-bystrica.jpg`
- Vychylovka / Múzeum kysuckej dediny: `/images/attractions/vychylovka-lesna-zeleznica.jpg`
- Hrad Strečno: `/images/attractions/hrad-strecno.jpg`

### Zimné atrakcie

- Lyžovanie vo Vrátnej: `/images/attractions/vratna-zima.jpg`
- Snowparadise Veľká Rača: `/images/attractions/snowparadise-velka-raca-zima.jpg`
- Zimná Oščadnica: `/images/attractions/oscadnica-zima.jpg`
- Ski Makov a Makov–Kasárne: `/images/attractions/makov-kasarne-zima.jpg`

Každá zimná karta používa samostatnú fotografiu. Pri horských strediskách uveď upozornenie, že prevádzka závisí od snehu, vetra a počasia, a návštevník si má aktuálny stav overiť cez odkaz pri konkrétnom tipe.

Hlavné dátové kolekcie sú `summerAttractions` a `winterAttractions` v `lib/site-data.ts`. Zo stránky pridaj CTA na `/aktualne-udalosti`.

## Inšpirácie na pobyt

Nadpis:

Inšpirácie na pobyt v Pallovom Dvore

Karty:

- Rodinný víkend v súkromí: Pokojný pobyt pre rodiny, ktoré chcú stráviť spoločný čas v chate s praktickým vybavením, oploteným objektom a možnosťou výletov v okolí.
- Oddych po aktívnom dni: Pobyt pre hostí, ktorí chcú spojiť prechádzky, turistiku alebo výlety s večerným relaxom v saune a vonkajšej kadi.
- Firemný pobyt s oddychom: Pobyt pre menšie firemné kolektívy, ktoré hľadajú priestor na pracovné stretnutie, spoločný program a pokojný relax.
- Pokojný víkend pre dospelých hostí: Pobyt pre páry alebo menšie skupiny dospelých, ktoré hľadajú súkromie, rozhovory a oddych.

## Návrat do súkromia chaty

Nadpis:

Po zážitkoch vás čaká pokojné zázemie

Text:

Najväčšou výhodou pobytu v Pallovom Dvore je možnosť spojiť program v okolí so súkromím vlastnej chaty. Po výlete alebo spoločnej aktivite si môžete oddýchnuť v spoločenskom priestore, posedieť v altánku, pripraviť si jedlo na grile alebo si dopriať relax v saune a vonkajšej kadi.

## Záverečná CTA

Nadpis:

Naplánujte si pobyt s oddychom aj zážitkami

Text:

Vyberte si termín, ktorý vám vyhovuje, a spojte komfortné ubytovanie v súkromí s výletmi, aktivitami a pokojnými večermi v Pallovom Dvore.

CTA:

- Overiť dostupnosť termínu
- Kontaktovať nás

## Fotografie

Použi optimalizované súbory uvedené v sezónnych zoznamoch vyššie. Hero používa `/images/attractions/vratna-dolina.jpg`. Licencie a pôvod externých fotografií sú evidované v `public/images/attractions/credits.md`.
