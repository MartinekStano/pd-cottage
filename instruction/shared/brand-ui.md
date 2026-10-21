# Brand & UI

## Vizuálny smer

Web má vychádzať zo štýlu modernej prémiovej homepage pre súkromnú chatu. Má byť pokojný, vzdušný, prírodný a dôveryhodný.

Atmosféra:

- pokoj
- súkromie
- príroda
- komfort
- oddych
- útulnosť
- kultivovaný pobyt

Web nemá pôsobiť hlučne, lacno, preplnene ani ako bežný hotelový rezervačný portál.

## Farebná paleta

Použiť teplé prírodné pozadie, nie čistú bielu.

Odporúčané CSS premenné:

```css
:root {
  --bg: #f3eee6;
  --surface: #fffaf2;
  --text: #1f1c18;
  --muted: #6f665d;
  --dark: #171512;
  --accent: #7a5c3e;
  --border: rgba(31, 28, 24, 0.1);
}
```

Paleta má zostať pokojná a prírodná. Nepoužívať krikľavé farby, ostré kontrasty ani dominantné hotelové modro-zlaté schémy.

## Typografia

Nadpisy majú pôsobiť elegantne a pokojne. Vhodné je serifové písmo alebo iný výraznejší display font s kultivovaným charakterom.

Bežný text musí byť dobre čitateľný:

- odporúčaná veľkosť okolo 16-18 px,
- riadkovanie približne 1.6-1.75,
- farba v tlmenom tmavom odtieni,
- bez príliš dlhých riadkov.

Malé labely môžu používať uppercase štýl, ale musia zostať čitateľné aj na mobile.

## Layout

Použiť vzdušné sekcie s jasnou hierarchiou. Sekcie majú byť plnohodnotné časti stránky, nie séria vnorených kariet.

Odporúčaný domovský layout:

1. Hlavička s logom, navigáciou a CTA.
2. Svetlé delené hero: typografia a CTA vedľa reálnej fotografie chaty.
3. Stručný pás kapacity, jednotiek, wellness a ceny.
4. Fotografické predstavenie oboch jednotiek.
5. Sauna a kaďa, spoločné posedenie a projektor.
6. Cenový rozcestník, FAQ a hodnotenia.
7. Záverečná CTA.

Hero musí v prvom zobrazení jasne ukázať značku `Pallov Dvor` a reálnu fotografiu objektu alebo prostredia.

## Karty a bloky

Karty používať hlavne pre opakované položky:

- benefity,
- hodnoty,
- izby,
- ceny,
- wellness služby,
- atrakcie,
- praktické informácie.

Karty majú byť jednoduché, s jemným tieňom alebo borderom, dostatočným vnútorným priestorom a čitateľným textom.

## CTA tlačidlá

Primárne CTA:

- Overiť dostupnosť termínu

Sekundárne CTA:

- Pozrieť ubytovanie
- Pozrieť cenník
- Poslať nezáväzný dopyt
- Kontaktovať nás

Tlačidlá majú byť jasné, dobre klikateľné a konzistentné. Na tmavom hero pozadí môže byť primárne tlačidlo svetlé; na svetlom pozadí tmavé.

## Responzivita

Na mobile:

- hero obsah musí zostať čitateľný,
- navigácia má byť zjednodušená,
- karty sa radia pod seba,
- formulár má mať veľké polia,
- cenové tabuľky musia byť čitateľné bez rozbíjania layoutu,
- žiadny text nesmie prekrývať obrázok alebo iný obsah.

## UI prompt pre implementáciu

Dizajn webu vytvor podľa referenčného štýlu: moderná prémiová homepage pre súkromnú chatu, teplé prírodné pozadie, reálne veľké fotografie, jemné tiene, elegantná typografia, pokojná farebná paleta a dostatok priestoru medzi sekciami.

Hero sekcia má používať reálnu fotografiu chaty alebo exteriéru s čitateľným textom. Vedľa alebo pod hero blokom zobraz `Rýchly prehľad` so základnými údajmi a cenou od 159 € / noc.

Celý web má pôsobiť pokojne, útulne, dôveryhodne a kultivovane. Nepoužívaj krikľavé farby, ostré hrany ani preplnené sekcie.

## Aktualizácia fotografie a layoutu (21. 10. 2026)

Domov používa svetlé textové hero vedľa fotografie bez tmavého prekrytia. Na mobile sa časti radia pod seba. Podstránky môžu ponechať fotografické hero s kontrastným prekrytím. Pri portrétnych interiéroch používať pomer 3:4; kompletná galéria zachováva pôvodný pomer, bez orezania. Fotografie a stručné texty majú prednosť pred opakovanými benefitovými kartami. Aktuálne poradie sekcií má prednosť pred staršími všeobecnými odporúčaniami vyššie; podrobnosti sú v pages/home.md a shared/photo-map.md.

## Konzistencia naprieč stránkami

Verejné názvy jednotiek sú vždy `Pri vstupnej bráne` a `Pri saune`; polohy a podlažia sa preberajú z `lib/photography.ts`. Fotosekcie a obrázkové karty uvádzajú skutočné zaradenie. Z jednotky odkazovať priamo na jej album. Aktuálna stránka je označená v desktopovej aj mobilnej navigácii (`aria-current`); rodičovská položka zvýrazňuje aj svoje podstránky. Dlhé mobilné menu sa posúva vo vlastnom priestore. Primárne CTA zostáva `Overiť dostupnosť termínu`, sekundárne musí mať iný cieľ. Opakované všeobecné karty nahrádzať konkrétnymi informáciami a fotografiami, nie ďalším vizuálnym štýlom.
