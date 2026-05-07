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
- `pages/pricing.md` - Cenník.
- `pages/attractions.md` - Atrakcie a zážitky v okolí.
- `pages/wellness.md` - Wellness & Oddych.
- `pages/contact.md` - Kontakt.
- `_archive/source-instruction.md` - pôvodný veľký dokument, ponechaný ako záloha.
- `_archive/legacy-pension-prompt.adoc` - pôvodný všeobecný prompt pre penzión, ktorý je mimo aktuálneho zadania.
- `codex-implementation-prompt.md` - hotový prompt pre ďalší Codex beh, ktorý má web implementovať.

## Assety v repozitári

Do commitu patria iba optimalizované a pomenované fotky:

- `public/images/pallov-dvor/`
- `public/images/attractions/`

Surové importy z WhatsAppu a pracovné review náhľady sú zámerne mimo gitu. Ich pôvodné názvy ostávajú zachované v `public/images/pallov-dvor/manifest.json`, takže sa dá spätne dohľadať, z ktorého importu vznikol konkrétny webový asset.

## Aktuálny smer

Zdroj pravdy je Pallov Dvor ako súkromná chata v Lutišiach. Web nemá komunikovať penzión, reštauráciu, bazén, vírivku, masáže ani párty pobyty.

Primárny cieľ webu je dostať návštevníka k akcii `Overiť dostupnosť termínu`.

## Pred implementáciou ešte potvrdiť

- Presný cieľ CTA: či má ísť na kontaktný formulár, e-mail, telefón alebo externý rezervačný systém.
- Či sa kontaktný formulár bude iba vizuálne zobrazovať, alebo sa neskôr napojí na odosielanie.
- Ktoré ďalšie optimalizované fotografie v `public/images/pallov-dvor/` sú finálne pre hero sekcie.
- Či sú ceny v `pages/pricing.md` definitívne.
