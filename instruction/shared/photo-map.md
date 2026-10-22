# Fotografie Pallovho Dvora

## Aktívna sada od 21. októbra 2026

Jediným zdrojom fotografií chaty je dodaná sada **Pallov Dvor - Upravene fotky** (41 záberov). Pôvodné WhatsApp fotografie už nepatria na web ani do aktívneho adresára obrázkov. Logá zostávajú v `public/brand/`.

Webové súbory sú v `public/images/pallov-dvor/`, katalóg s názvami, alternatívnymi textami, rozmermi a zaradením je v `lib/photography.ts`. `lib/site-data.ts` preberá mapu `propertyImages` a celú galériu; nevytvára ďalšie kópie fotografií. `manifest.json` uchováva pôvodný relatívny názov, rozmery, veľkosti a SHA-256 originálu.

## Časti objektu

| Zdrojový priečinok | Verejné označenie | Podlažie | Fotografie |
| --- | --- | --- | --- |
| ML - NP | ML – Pallov Dvor (bližšie k ceste) | Prízemie | 5 |
| ML - 1NP | ML – Pallov Dvor (bližšie k ceste) | Poschodie | 9 |
| PL - NP | PS – Pallov Dvor (bližšie k saune) | Prízemie | 5 |
| PL - 1NP | PS – Pallov Dvor (bližšie k saune) | Poschodie | 9 |
| Spolocny priestor | Spoločný priestor | — | 2 |
| Exterier | Exteriér a wellness | — | 11 |

Majiteľ potvrdil: ML je bližšie k ceste/vstupnej bráne, PL bližšie k saune. Od 22. 10. 2026 sa verejne používa ML a PS; PS zodpovedá zdrojovému PL. Názvy zdrojových súborov sa zachovávajú. Označenia pri bráne/saune vyjadrujú polohu, nie výhradné právo na spoločné priestory alebo wellness.

## Spracovanie a zobrazovanie

- WebP, kvalita 84, dlhšia strana najviac 2000 px, zachovaná orientácia a pomer strán, odstránené EXIF metadáta. Bez retuše a bez generatívnych zásahov.
- Originály majú spolu približne 163,6 MB, webové kópie 14,5 MB. Pôvodná dodaná sada zostáva mimo repozitára.
- Fotogaléria ukazuje všetkých 41 záberov v pôvodných pomeroch strán; zväčšenie používa `object-contain`. Náhľady nevytvárať natiahnutím ani plošným orezom na šírku.
- Fotosekcie a obrázkové karty automaticky rešpektujú portrétnu orientáciu. Vybrané ilustračné výrezy v úvode a prehľade jednotiek môžu používať `object-cover`.
- Úvod používa svetlú textovú časť vedľa hlavnej exteriérovej fotografie. Podstránkové hero sekcie používajú nové zábery exteriéru so zachovanou čitateľnosťou textu.
- Metadáta Open Graph, štruktúrované dáta a sitemap odkazujú na novú sadu. Open Graph pre lokálne fotografie používa skutočné rozmery.

## Výber podľa stránok

| Stránka/sekcia | Fotografický smer |
| --- | --- |
| Domov | Hlavný pohľad na chatu; obe jednotky vedľa seba; sauna a kaďa; kryté posedenie a projektor |
| O nás | Pohľad z ulice; interiér jednotky PS; spoločenská miestnosť; spálňa a dvor |
| Ubytovanie | Samostatné sekcie oboch jednotiek; príslušná obývačka a spálne sa nesmú zamieňať |
| Fotogaléria | 41 fotografií v štyroch samostatných albumoch; jednotky majú filtre prízemia a poschodia |
| Cenník | Kryté posedenie s výhľadom na chatu; celý objekt a kaďa |
| Wellness | Sauna a kaďa v exteriéri; interiér sauny; oddychová miestnosť |
| Kontakt | Vstupná brána; pohľad z ulice |
| Atrakcie a udalosti | Zachovaná Vrátna ako krajinné hero; nové fotografie chaty v nadväzujúcich sekciách |

## Presné mapovanie všetkých súborov

| Dodaný súbor | Zaradenie | Webový súbor |
| --- | --- | --- |
| `Exterier/pallov-dvor-01-chata-hlavny-pohlad.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-01-chata-hlavny-pohlad.webp` |
| `Exterier/pallov-dvor-02-vstup-pallov-dvor.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-02-vstup-pallov-dvor.webp` |
| `Exterier/pallov-dvor-03-chata-pohlad-z-ulice.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-03-chata-pohlad-z-ulice.webp` |
| `Exterier/pallov-dvor-04-dvor-a-vstupna-brana.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-04-dvor-a-vstupna-brana.webp` |
| `Exterier/pallov-dvor-05-altanok-a-gril.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-05-altanok-a-gril.webp` |
| `Exterier/pallov-dvor-06-altanok-kryte-posedenie.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-06-altanok-kryte-posedenie.webp` |
| `Exterier/pallov-dvor-07-wellness-sauna-a-kada.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-07-wellness-sauna-a-kada.webp` |
| `Exterier/pallov-dvor-08-sauna-exterier.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-08-sauna-exterier.webp` |
| `Exterier/pallov-dvor-09-kupacia-kada.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-09-kupacia-kada.webp` |
| `Exterier/pallov-dvor-10-sauna-interier.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-10-sauna-interier.webp` |
| `Exterier/pallov-dvor-11-oddychova-miestnost.jpg` | Exteriér a wellness | `/images/pallov-dvor/exterier/pallov-dvor-11-oddychova-miestnost.webp` |
| `ML - NP/pallov-dvor-ml-np-kuchyna-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Prízemie | `/images/pallov-dvor/pri-brane-prizemie/pallov-dvor-ml-np-kuchyna-01.webp` |
| `ML - NP/pallov-dvor-ml-np-kupelna-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Prízemie | `/images/pallov-dvor/pri-brane-prizemie/pallov-dvor-ml-np-kupelna-01.webp` |
| `ML - NP/pallov-dvor-ml-np-obyvacka-jedalen-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Prízemie | `/images/pallov-dvor/pri-brane-prizemie/pallov-dvor-ml-np-obyvacka-jedalen-01.webp` |
| `ML - NP/pallov-dvor-ml-np-obyvacka-jedalen-02.jpg` | ML – Pallov Dvor (bližšie k ceste) · Prízemie | `/images/pallov-dvor/pri-brane-prizemie/pallov-dvor-ml-np-obyvacka-jedalen-02.webp` |
| `ML - NP/pallov-dvor-ml-np-vstupna-chodba-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Prízemie | `/images/pallov-dvor/pri-brane-prizemie/pallov-dvor-ml-np-vstupna-chodba-01.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-dvojlozkova-izba-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-dvojlozkova-izba-01.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-dvojlozkova-izba-02.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-dvojlozkova-izba-02.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-kupelna-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-kupelna-01.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-kupelna-sprchovy-kut-02.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-kupelna-sprchovy-kut-02.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-kupelna-sprchovy-kut-03.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-kupelna-sprchovy-kut-03.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-spalna-01-zaber-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-spalna-01-zaber-01.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-spalna-01-zaber-02.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-spalna-01-zaber-02.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-spalna-s-postielkou-02-zaber-01.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-spalna-s-postielkou-02-zaber-01.webp` |
| `ML - 1NP/pallov-dvor-ml-1np-spalna-s-postielkou-02-zaber-02.jpg` | ML – Pallov Dvor (bližšie k ceste) · Poschodie | `/images/pallov-dvor/pri-brane-poschodie/pallov-dvor-ml-1np-spalna-s-postielkou-02-zaber-02.webp` |
| `PL - NP/pallov-dvor-pl-np-kuchyna-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Prízemie | `/images/pallov-dvor/pri-saune-prizemie/pallov-dvor-pl-np-kuchyna-01.webp` |
| `PL - NP/pallov-dvor-pl-np-kupelna-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Prízemie | `/images/pallov-dvor/pri-saune-prizemie/pallov-dvor-pl-np-kupelna-01.webp` |
| `PL - NP/pallov-dvor-pl-np-obyvacka-jedalen-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Prízemie | `/images/pallov-dvor/pri-saune-prizemie/pallov-dvor-pl-np-obyvacka-jedalen-01.webp` |
| `PL - NP/pallov-dvor-pl-np-obyvacka-jedalen-02.jpg` | PS – Pallov Dvor (bližšie k saune) · Prízemie | `/images/pallov-dvor/pri-saune-prizemie/pallov-dvor-pl-np-obyvacka-jedalen-02.webp` |
| `PL - NP/pallov-dvor-pl-np-vstupna-chodba-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Prízemie | `/images/pallov-dvor/pri-saune-prizemie/pallov-dvor-pl-np-vstupna-chodba-01.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-detska-izba-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-detska-izba-01.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-detska-izba-02.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-detska-izba-02.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-kupelna-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-kupelna-01.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-kupelna-sprchovy-kut-02.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-kupelna-sprchovy-kut-02.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-kupelna-sprchovy-kut-03.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-kupelna-sprchovy-kut-03.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-spalna-lava-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-spalna-lava-01.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-spalna-lava-02.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-spalna-lava-02.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-spalna-prava-01.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-spalna-prava-01.webp` |
| `PL - 1NP/pallov-dvor-pl-1np-spalna-prava-02.jpg` | PS – Pallov Dvor (bližšie k saune) · Poschodie | `/images/pallov-dvor/pri-saune-poschodie/pallov-dvor-pl-1np-spalna-prava-02.webp` |
| `Spolocny priestor/pallov-dvor-spolocny-priestor-posedenie-01.jpg` | Spoločný priestor | `/images/pallov-dvor/spolocny-priestor/pallov-dvor-spolocny-priestor-posedenie-01.webp` |
| `Spolocny priestor/pallov-dvor-spolocny-priestor-projektor-02.jpg` | Spoločný priestor | `/images/pallov-dvor/spolocny-priestor/pallov-dvor-spolocny-priestor-projektor-02.webp` |

## Atrakcie v okolí

Fotografie výletných miest nie sú súčasťou novej sady chaty. Po vizuálnom porovnaní zostáva deväť pôvodných fotografií. Strečno používa lepší celkový pohľad na hrad a bralo: `/images/attractions/hrad-strecno.webp`, autor 10ricardo, [zdroj](https://commons.wikimedia.org/wiki/File:Strecno_Castle_01.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Zmeny: zmenšenie na 2200 px a prevod do WebP. Atribúcia, odkaz na zdroj a licenciu sú pri karte; licencia je zachovaná aj pre upravený súbor.

Všetky zdroje a licencie atrakcií sú v `public/images/attractions/credits.md`. Nepoužívať fotografie z rezervačných portálov alebo propagačných webov bez jasného práva na použitie.

## Jednotné rozdelenie albumov a popisov

Fotogaléria je od nadväzujúcej úpravy rozdelená priamo na `#pri-brane`, `#pri-saune`, `#spolocny-priestor` a `#exterier`. Nepremiešavať interiéry jednotiek v jednom predvolenom výbere. Na ostatných stránkach fotosekcie aj obrázkové karty automaticky uvádzajú skutočné zaradenie podľa katalógu; údaje sa nevypĺňajú ručne druhýkrát. Odkazy z karty či sekcie jednotky smerujú na jej vlastný album. Fotografie spoločných miestností a exteriéru neoznačovať za výhradné vybavenie jednej jednotky.
