# Kontakt a praktické údaje

## Kontaktné údaje

- Telefón: 0904 955 600
- E-mail: martinmatostano@gmail.com
- Adresa: Lutiše Adamovci 373
- Parkovanie: 4 parkovacie miesta priamo pri objekte

Tieto údaje použiť na stránke Kontakt a v pätičke webu.

## Pätička

Odporúčaný krátky text:

```text
Pallov Dvor
Súkromná chata pre pokojný oddych a spoločné chvíle.
Lutiše Adamovci 373
0904 955 600
martinmatostano@gmail.com
```

## Kontaktný formulár (budúca aktívna verzia)

Formulár má byť nezáväzný dopyt a hlavný prvok stránky Kontakt.

Polia:

- Meno a priezvisko
- E-mail
- Telefón
- Termín od
- Termín do
- Počet osôb
- Typ prenájmu
- Typ pobytu
- Správa

Možnosti pri `Typ prenájmu`:

- 1 samostatná ubytovacia jednotka
- Celý objekt
- Ešte neviem

Možnosti pri `Typ pobytu`:

- Rodinný pobyt
- Pobyt pre dospelých hostí
- Firemný pobyt / teambuilding
- Iný typ pobytu

Text pod formulárom:

Odoslanie formulára je nezáväzné a slúži na overenie dostupnosti termínu.

Tlačidlo formulára:

- Odoslať dopyt

## Mapa

Na stránke Kontakt pripraviť:

- Google Maps iframe,
- statický mapový náhľad,
- alebo tlačidlo `Zobraziť v navigácii`.

Adresa pre mapu:

- Lutiše Adamovci 373

## Aktuálne overenie termínu

`contactForm.enabled` zostáva `false`; SMTP ani aktivácia odosielania sa touto úpravou nemení. Namiesto vypnutých vstupných polí a vývojového označenia WIP sa na kotve `#formular` zobrazí panel `Nájdime termín pre váš pobyt.` s funkčnými odkazmi na telefón a e-mail. Hostia majú uviesť termín, počet dospelých a detí, jednotku pri vstupnej bráne / pri saune / celý objekt a záujem o wellness. Pri budúcej aktivácii sa zobrazí existujúci serverový formulár. Hlavné CTA celého webu ostáva jednotné a vedie na túto kotvu.

Hero kontaktu má odlišné akcie: overiť dostupnosť a zavolať; dve tlačidlá nesmú viesť na to isté miesto. E-mail v kontaktných údajoch sa môže zalomiť, aby nerozbíjal mobilné rozloženie.
