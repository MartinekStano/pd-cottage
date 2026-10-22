# Pallov Dvor - pracovné zadanie

Tento priečinok obsahuje upratané zadanie pre web chaty Pallov Dvor. Hlavný technický dokument je `pd-cottage.adoc`; detailný obsah je rozdelený podľa podstránok.

## Štruktúra

- `pd-cottage.adoc` - technické zadanie pre Codex a implementáciu v Next.js.
- `shared/project-brief.md` - globálne fakty, navigácia, CTA a obsahové zákazy.
- `shared/brand-ui.md` - UI smer, typografia, farby, layout a komponentové pravidlá.
- `shared/contact.md` - kontaktné údaje, formulár, mapa a pätička.
- `shared/photo-map.md` - odporúčané použitie pripravených fotiek podľa stránok.
- `pages/home.md` - Domov.
- `pages/about.md` - O nás.
- `pages/accommodation.md` - Ubytovanie.
- `pages/gallery.md` - Fotogaléria.
- `pages/pricing.md` - Cenník.
- `pages/attractions.md` - Atrakcie a zážitky v okolí.
- `pages/events.md` - Aktuálne udalosti v okolí a pravidlá ich aktualizácie.
- `pages/wellness.md` - Wellness & Oddych.
- `pages/contact.md` - Kontakt.
- `_archive/source-instruction.md` - pôvodný veľký dokument, ponechaný ako záloha.
- `_archive/legacy-pension-prompt.adoc` - pôvodný všeobecný prompt pre penzión, ktorý je mimo aktuálneho zadania.
- `codex-implementation-prompt.md` - hotový prompt pre ďalší Codex beh, ktorý má web implementovať.

## Assety v repozitári

Do commitu patria iba optimalizované a pomenované fotky:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

Originály novej upravenej sady a pracovné náhľady sú mimo gitu. Manifest uchováva presnú relatívnu cestu každého originálu, rozmery a kontrolný súčet. Pôvodná WhatsApp sada sa už nepoužíva.

## Aktuálny smer

Zdroj pravdy je Pallov Dvor ako súkromná chata v Lutišiach. Web nemá komunikovať penzión, reštauráciu, bazén, vírivku, masáže ani párty pobyty.

SEO komunikácia má prirodzene cieliť hlavne na lokálne dopyty ako `chata Lutiše`, `chata na prenájom Lutiše`, `ubytovanie Lutiše` a okolie Lutiší.

Primárny cieľ webu je dostať návštevníka k akcii `Overiť dostupnosť termínu`.

Stránka Atrakcie je rozdelená na letnú a zimnú časť. V jej navigačnom podmenu je aj stránka `Aktuálne udalosti`, ktorá momentálne pokrýva október 2026 (zostávajúci program a prebiehajúce výstavy, overené 21. októbra). Keďže ide o časovo citlivý obsah, údaje sa musia pred každým novým obdobím znovu overiť na oficiálnych stránkach organizátorov.


## Pred implementáciou ešte potvrdiť

- Presný cieľ CTA: či má ísť na kontaktný formulár, e-mail, telefón alebo externý rezervačný systém.
- Či sa kontaktný formulár bude iba vizuálne zobrazovať, alebo sa neskôr napojí na odosielanie.
- Fotografická sada a výber hero záberov sú od 21. 10. 2026 určené v `shared/photo-map.md`.
- Či sú ceny v `pages/pricing.md` definitívne.


## Aktívna fotografická sada a redizajn (21. 10. 2026)

Majiteľ schválil kompletnú výmenu starých fotografií chaty, úpravu sekcií a prepis dokumentácie. Aktívna sada má 41 záberov; používa sa výhradne cez `lib/photography.ts`. ML znamená jednotku bližšie k ceste/bráne, PL jednotku pri saune. Na webe ich označujeme ML – Pallov Dvor (bližšie k ceste) a PS – Pallov Dvor (bližšie k saune); fotografie nemiešame.

Aktuálny zdroj pravdy pre fotografie je `shared/photo-map.md`, pre sekcie `pages/home.md`, `pages/accommodation.md` a `pages/gallery.md`. Tieto dokumenty nahrádzajú staré fotografie a starší všeobecný návrh sekcií. Zachované ceny, kapacity, kontakty, navigácia aj októbrový kalendár sa touto úpravou nemenia. Historické archívne súbory a odvodené PDF/HTML nie sú aktuálne zadanie.
