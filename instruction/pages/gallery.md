# Fotogaléria

## Obsah a navigácia

Kompletná nová sada 41 fotografií chaty je na `/fotogaleria`, v menu pod `Ubytovanie`. Pôvodná sada bola v celom webe nahradená; nesmie zostať v aktívnych obrázkových adresároch ani metadátach.

Hero používa nový hlavný pohľad na chatu, titulok `Nahliadnite k nám.` a CTA na termín/ubytovanie. Fotografie sa neuvádzajú ako jeden premiešaný výber, ale v štyroch samostatných albumoch:

1. `Pri vstupnej bráne` – zdrojové ML (v nadväzujúcej požiadavke majiteľa MP); 14 fotografií, kotva `#pri-brane`.
2. `Pri saune` – zdrojové PL; 14 fotografií, kotva `#pri-saune`.
3. `Spoločný priestor` – 2 fotografie, kotva `#spolocny-priestor`.
4. `Exteriér a wellness` – 11 fotografií, kotva `#exterier`.

Nad albumami je prehľadná navigácia s počtom záberov. Každá jednotka má vlastné filtre `Obe podlažia` (14), `Prízemie` (5) a `Poschodie` (9). Filter ani zväčšenie nikdy neprejdú do druhej jednotky; každý album má vlastný modál. Jednotlivé albumy sú priamo prepojené s príslušnými sekciami na domove a ubytovaní.

Pri jednotkách zobraziť aj podlažie. Skratky ML/MP/PL sú iba interné zdrojové označenia. Verejné názvy ostávajú podľa polohy potvrdenej majiteľom. Každá z 41 dodaných fotografií je zastúpená práve raz.

## Zobrazenie a ovládanie

- Stĺpcová galéria s prirodzenými pomermi strán: 2 stĺpce na mobile, 3 na tablete, 4 na desktope. Popisy pod fotografiou.
- Filter má stav `aria-pressed` a počet záberov, počet vo výbere sa oznamuje cez `aria-live`.
- Kliknutie otvára natívny modálny `dialog`; celý záber je viditeľný cez `object-contain`.
- Šípky, klávesy vľavo/vpravo, Escape a tlačidlo zatvorenia. Na dotykových zariadeniach prechod potiahnutím do strán.
- Modál zadržiava fokus v galérii, blokuje posúvanie stránky a po zatvorení vracia fokus na pôvodný náhľad. Pri zatvorení obnoví predchádzajúci stav posúvania.
- Náhľady sú načítavané postupne cez `next/image`, zväčšená fotografia sa načíta ihneď po otvorení. Všetky zábery majú rozmerové údaje a alternatívny text.

Zdroj: `propertyPhotos` v `lib/photography.ts`, presné zdrojové mapovanie v `shared/photo-map.md` a `public/images/pallov-dvor/manifest.json`. Záverečné CTA smeruje na termín a cenník.
