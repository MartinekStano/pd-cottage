# Aktuálne udalosti v okolí

## Účel

Stránka dopĺňa stále tipy na výlety o overené podujatia vhodné na spojenie s pobytom v Pallovom Dvore. Aktuálne obdobie je **október 2026**, posledné overenie **21. októbra 2026**. Keďže mesiac už prebieha, obsahuje zostávajúci program od 22. októbra a stále prístupné výstavy. Ide o výber, nie úplný register všetkých akcií v regióne.

Trasa: `/aktualne-udalosti`. Stránka je dostupná v podmenu položky `Atrakcie` a odkazuje na letné a zimné atrakcie. Vzhľad kariet, hero fotografia a CTA zostávajú podľa spoločného zadania. Dlhšie dátumové rozsahy majú menšie písmo v existujúcom dátumovom štítku, aby sa zmestili aj na mobile.

## Obsah stránky

- Nadpis: `Aktuálne udalosti v okolí`.
- Časové označenie: `Október 2026`.
- CTA: `Overiť dostupnosť termínu` a `Pozrieť atrakcie`.
- Kalendár: 17 chronologicky zoradených termínov v Čadci, Žiline a vo Vychylovke.
- Samostatná sekcia: 6 prebiehajúcich výstav, zoradených podľa konca. Štítok `do` označuje posledný deň výstavy, nie vernisáž.
- Dátum aktualizácie, upozornenie na možnú zmenu programu a odkazy na oficiálne kalendáre.

Dáta sú centralizované v `lib/events-data.ts`: `octoberEvents` a `ongoingExhibitions`. Karty vykresľuje existujúci `components/event-card.tsx`; dátový typ `LocalEvent` sa nemení.

Každá karta obsahuje `date`, `month`, `dateTime`, voliteľný `time`, `title`, `description`, `location`, `category`, `url` a `source`. V kalendári `dateTime` označuje začiatok podujatia; pri prebiehajúcich výstavách zodpovedá zobrazenému koncu výstavy. Neoverené časy sa neuvádzajú. Časy do 24. októbra používajú +02:00, od 25. októbra +01:00.

## Overený októbrový program

| Termín | Podujatie | Čas | Oficiálny zdroj |
| --- | --- | --- | --- |
| 22. OKT | Diera v nebi – Silné reči | 19:00 | [Mesto Čadca / Dom kultúry](https://www.mestocadca.sk/kulturne-podujatia/diera-v-nebi-silne-reci) |
| 23. OKT | Ladislav Hrubý: Oheň a sneh | 16:00 | [Kysucká knižnica v Čadci](https://www.kniznica-cadca.sk/aktualne/ladislav-hruby-ohen-a-sneh) |
| 23. OKT | Októbrové katakomby | 16:00 a 17:00 | [TIK mesta Žilina](https://www.tikzilina.eu/novinky/737-oktobrove-katakomby/) |
| 23. OKT | Genius loci: Lentilky Žilina | 17:00 | [TIK mesta Žilina / Rosenfeldov palác](https://www.tikzilina.eu/novinky/743-genius-loci-lentilky-zilina/) |
| 24. OKT | Prednáška s Danielom Dvořákom | 16:00 | [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/prednaska-s-danielom-dvorakom) |
| 24. OKT | Status quo | 19:00 | [Mestské divadlo Žilina](https://www.divadlozilina.eu/oktobrovy-program-v-predaji-3/) |
| 25. OKT | Kuchyňa starých materí – Zabíjačková nedeľa | Čas nie je potvrdený; pozri zdroj | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2966-kuchyna-starych-materi-zabijackova-nedela-v-muzeu-kysuckej-dediny-vo-vychylovke) |
| 26.–28. OKT | Hory a mesto Žilina 2026 | Besedy od 18:00, filmové bloky od 19:30 podľa denného programu | [TIK mesta Žilina](https://www.tikzilina.eu/novinky/680-hory-a-mesto-2026/) |
| 27. OKT | Leporelo pre deti (6 – 12 rokov) | 16:00 | [Rosenfeldov palác](https://rosenfeldovpalac.sk/workshop-leporelo-pre-deti-6-12r/) |
| 27. OKT | Kým kohút nezaspieva | 17:30 | [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/kym-kohut-nezaspieva) |
| 28. OKT | Lampiónový sprievod v Čadci | 17:00 | [Mesto Čadca / Centrum voľného času](https://www.mestocadca.sk/kulturne-podujatia/lampionovy-sprievod) |
| 28. OKT | Slnečnice – film o Vincentovi van Goghovi | 18:00 | [Rosenfeldov palác](https://rosenfeldovpalac.sk/premietanie-slnecnice-r-d-bickerstaff-2021/) |
| 29.–31. OKT | Po stopách svetlonosa | Čas nie je potvrdený; pozri zdroj | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021) |
| 29. 10. – 1. 11. | Strašidelné prázdniny v Múzeu Čadca | Pracovné dni 8:00 – 16:00, víkend 10:00 – 16:00; posledný vstup 15:30 | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/kysucke-muzeum-cadca/2968-strasidelne-prazdniny-v-muzeu-cadca) |
| 29. OKT | Štebotavá tvorivá dielňa | 10:30 a 14:30 | [Rosenfeldov palác](https://rosenfeldovpalac.sk/jesenne-prazdniny-stebotava-tvoriva-dielna/) |
| 30. OKT | Októbrové katakomby | 16:00 a 17:00 | [TIK mesta Žilina](https://www.tikzilina.eu/novinky/737-oktobrove-katakomby/) |
| 30. OKT | Art brut koláž | 18:00 | [Rosenfeldov palác](https://rosenfeldovpalac.sk/workshop-art-brut-kolaz/) |

## Prebiehajúce výstavy

| Výstava | Koniec | Oficiálny zdroj |
| --- | --- | --- |
| Energia farieb 2026 | do 31. OKT 2026 | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2957-energia-farieb-v-skanzene-william-jaros-prinasa-do-vychylovky-modernu-monu-lisu) |
| Vlaky s vôňou dreva | do 31. OKT 2026 | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021) |
| Železnička v premenách času | do 31. OKT 2026 | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021) |
| Nebojím sa strachu | do 1. NOV 2026 | [Mesto Čadca / Kysucké múzeum](https://www.mestocadca.sk/kulturne-podujatia/nebojim-sa-strachu) |
| Strojovou ihlou – Šitie, ktoré menilo dejiny | do 1. NOV 2026 | [Mesto Čadca / Kysucké múzeum](https://www.mestocadca.sk/kulturne-podujatia/strojovou-ihlou-sitie-ktore-menilo-dejiny) |
| Harmonické kontrasty | do 31. DEC 2026 | [Mesto Čadca / Galéria Čadca](https://www.mestocadca.sk/kulturne-podujatia/harmonicke-kontrasty-vystava-veroniky-mikulasovej-a-marosa-meska) |

## Poznámky k overeniu

- Preverené boli aj obecné zdroje Lutiší, Starej Bystrice a Terchovej. Bez dostatočne potvrdeného zostávajúceho októbrového programu neboli dopĺňané ďalšie podujatia. Terchovský polmaratón (17. októbra), Stretnutie v čase (16. októbra) a Zborovská nedeľa (11. októbra) už skončili.
- Po stopách svetlonosa: [kalendár pri Múzeu kysuckej dediny](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021) uvádza 29. – 31. október; [ďalšia verzia kalendára múzea](https://www.kysuckemuzeum.sk/sk/mkd-podujatia-poas-sezony/2186-podujatia-expozicie-a-vystavy-v-roku-2021) uvádza koniec 1. novembra. Karta uvádza spoločný októbrový rozsah a výslovne upozorňuje, že 1. november treba potvrdiť. Program zo staršieho článku pre rok 2025 sa nepoužíva.
- Hory a mesto: dátumy, hostia a časy sú potvrdené TIK. Konkrétne miesto projekcií nie je v použitom oficiálnom článku výslovne uvedené, preto karta žiada overiť ho pri rezervácii; nepreberá neoverený údaj z agregátorov.
- Kým kohút nezaspieva: zdroj používa obe formulácie `od 60 rokov` aj `nad 60 rokov`. Karta preto uvádza bezplatný vstup pre seniorov s odkazom na podmienky organizátora bez vlastnej interpretácie hranice.
- Ceny a rezervácie sú uvedené iba tam, kde boli zverejnené; chýbajúce údaje neznamenajú bezplatný vstup ani voľnú kapacitu. Vstup do skanzenu a lístok na vlak sú samostatné.
- Snow Film Fest v Žiline je až 25. novembra, preto nepatrí do októbrového výberu. Už skončené vernisáže nie sú ponúkané ako budúce udalosti.

## Zdroje a údržba

Pri ďalšej aktualizácii:

1. Nahraď skončené udalosti novým overeným výberom z oficiálnych webov organizátorov, obcí a kultúrnych inštitúcií. Počet kariet sa riadi overeným programom, nie pevnou kvótou.
2. Skontroluj dátum, čas, miesto, cenu alebo registráciu a cieľový odkaz. Rozpory transparentne pomenuj; chýbajúce údaje nevymýšľaj.
3. Aktualizuj dátové kolekcie a ich importy, metadata, hero, názov mesiaca, texty, CTA, dátum posledného overenia a oba README.
4. Pri aktualizácii uprostred mesiaca uvádzaj zostávajúce termíny a prebiehajúce výstavy; už skončené podujatia neprezentuj ako aktuálne. Zachovaj upozornenie na zmenu programu.
5. Spusti lint a produkčný build (`next build --webpack`).

Nevymýšľaj chýbajúce termíny ani program. Ak organizátor údaje ešte nezverejnil, podujatie nezaraďuj alebo neistotu jasne pomenuj.
