# Kontakt

## Účel

Stránka má návštevníkovi umožniť jednoducho overiť dostupnosť termínu, poslať nezáväzný dopyt, kontaktovať prevádzkovateľa, zistiť adresu chaty a pozrieť si praktické informácie pred pobytom.

Hlavné CTA:

- Overiť dostupnosť termínu

Sekundárne CTA:

- Poslať nezáväzný dopyt

## Úvod

Nadpis:

Kontaktujte Pallov Dvor

Podnadpis:

Plánujete rodinný pobyt, pokojný víkend, oddych v súkromí alebo menšie firemné stretnutie? Napíšte nám a overte si dostupnosť termínu.

CTA:

- Overiť dostupnosť termínu
- Poslať nezáväzný dopyt

## Kontaktný formulár (budúca aktívna verzia)

Nadpis:

Nezáväzný dopyt

Text:

Vyplňte krátky formulár a uveďte základné informácie o plánovanom pobyte. Čím presnejšie údaje pošlete, tým jednoduchšie bude pripraviť odpoveď.

Polia formulára:

- Meno a priezvisko
- E-mail
- Telefón
- Termín od
- Termín do
- Počet osôb
- Typ prenájmu
- Typ pobytu
- Správa

Možnosti sú definované v `instruction/shared/contact.md`.

Text pod formulárom:

Odoslanie formulára je nezáväzné a slúži na overenie dostupnosti termínu.

Tlačidlo:

- Odoslať dopyt

## Kontaktné údaje

Použiť údaje zo `shared/contact.md`:

- Telefón: 0904 955 600
- E-mail: martinmatostano@gmail.com
- Adresa: Lutiše Adamovci 373
- Parkovanie: 4 parkovacie miesta priamo pri objekte

## Poloha chaty

Nadpis:

Kde nás nájdete

Text:

Pallov Dvor sa nachádza na adrese Lutiše Adamovci 373. Poloha je vhodná pre hostí, ktorí hľadajú pokojné ubytovanie v súkromí s možnosťou oddychu, výletov a spoločných chvíľ.

Mapa:

- Google Maps iframe,
- statický mapový náhľad,
- alebo tlačidlo na otvorenie navigácie.

CTA pri mape:

- Zobraziť v navigácii

## Praktické informácie pred pobytom

Body:

- Chata je určená na pokojné krátkodobé pobyty.
- Celková kapacita chaty je až 16 osôb.
- Objekt je oplotený.
- K dispozícii sú 4 parkovacie miesta.
- Hostia majú k dispozícii saunu, vonkajšiu kaďu, altánok a gril.
- Ceny sa líšia podľa sezóny, termínu a typu prenájmu.
- Presnú cenu a dostupnosť potvrdíme po odoslaní dopytu.

## Krátky cenník

Nadpis:

Základné ceny ubytovania

Text:

Cena pobytu závisí od sezóny, dňa v týždni, dĺžky pobytu a toho, či máte záujem o jednu samostatnú jednotku alebo celý objekt.

Ceny:

- 1 samostatná jednotka: od 159 € / noc
- celý objekt: od 319 € / noc
- wellness: kaďa, sauna alebo zvýhodnený balík

CTA:

- Pozrieť celý cenník

## Záverečná CTA

Nadpis:

Naplánujte si pobyt v Pallovom Dvore

Text:

Pošlite nám nezáväzný dopyt a overte si dostupnosť termínu pre váš rodinný pobyt, oddychový víkend alebo menšie firemné stretnutie.

CTA:

- Overiť dostupnosť termínu
- Pozrieť cenník

## Fotografie a prvky

Aktívne fotografie (mapovanie v `shared/photo-map.md`):

- /images/pallov-dvor/exterier/pallov-dvor-02-vstup-pallov-dvor.webp
- /images/pallov-dvor/exterier/pallov-dvor-03-chata-pohlad-z-ulice.webp
- mapa-lutise-ulica-373.jpg

Fotografie boli 21. 10. 2026 nahradené novou sadou. Pri každej ďalšej úprave používaj `lib/photography.ts` a `shared/photo-map.md`; obrázkové karty a fotosekcie rešpektujú orientáciu skutočných záberov.

## Aktuálne overenie termínu

`contactForm.enabled` zostáva `false`; SMTP ani aktivácia odosielania sa touto úpravou nemení. Namiesto vypnutých vstupných polí a vývojového označenia WIP sa na kotve `#formular` zobrazí panel `Nájdime termín pre váš pobyt.` s funkčnými odkazmi na telefón a e-mail. Hostia majú uviesť termín, počet dospelých a detí, jednotku ML / PS / celý objekt a záujem o wellness. Pri budúcej aktivácii sa zobrazí existujúci serverový formulár. Hlavné CTA celého webu ostáva jednotné a vedie na túto kotvu.

Hero kontaktu má odlišné akcie: overiť dostupnosť a zavolať; dve tlačidlá nesmú viesť na to isté miesto. E-mail v kontaktných údajoch sa môže zalomiť, aby nerozbíjal mobilné rozloženie.
