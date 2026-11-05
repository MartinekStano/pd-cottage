# Aktuálne udalosti v okolí

## Účel

Stránka dopĺňa stále tipy na výlety o overené podujatia vhodné na spojenie s pobytom v Pallovom Dvore. Aktuálne obdobie je **november 2026**, posledné overenie **5. novembra 2026**. Keďže mesiac už prebieha, obsahuje zostávajúci program od 6. novembra a výstavy otvorené počas novembra. Ide o výber, nie úplný register všetkých akcií v regióne.

Trasa: `/aktualne-udalosti`. Stránka je dostupná v podmenu položky `Atrakcie` a odkazuje na letné a zimné atrakcie. Vzhľad kariet, hero fotografia a CTA zostávajú podľa spoločného zadania. Dlhšie dátumové rozsahy majú menšie písmo v existujúcom dátumovom štítku, aby sa zmestili aj na mobile.

## Obsah stránky

- Nadpis: `Aktuálne udalosti v okolí`.
- Časové označenie: `November 2026`.
- CTA: `Overiť dostupnosť termínu` a `Pozrieť atrakcie`.
- Kalendár: 25 chronologicky zoradených kariet v Žiline, Čadci, Terchovej, Kysuckom Novom Meste, Turzovke, Rajci a Krásne nad Kysucou. Opakované termíny jedného podujatia sú na jednej karte (katakomby, nedeľné rozprávky Bábkového divadla, Vianoce po našom).
- Samostatná sekcia: 10 výstav otvorených v novembri, zoradených podľa konca. Štítok `do` označuje posledný deň výstavy, nie vernisáž.
- Praktický tip: skanzen vo Vychylovke je od 1. novembra zatvorený, výnimočne otvorený 6. 12. a 27. – 30. 12. 2026 od 10:00 do 15:00 ([Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny)).
- Dátum aktualizácie, upozornenie na možnú zmenu programu a odkazy na oficiálne kalendáre.

Dáta sú centralizované v `lib/events-data.ts`: `novemberEvents` a `ongoingExhibitions`. Karty vykresľuje existujúci `components/event-card.tsx`; dátový typ `LocalEvent` sa nemení.

Každá karta obsahuje `date`, `month`, `dateTime`, voliteľný `time`, `title`, `description`, `location`, `category`, `url` a `source`. V kalendári `dateTime` označuje začiatok (pri viacerých termínoch prvý); pri výstavách zodpovedá koncu výstavy. Neoverené časy sa neuvádzajú. Novembrové časy používajú +01:00.

## Overený novembrový program

| Termín | Podujatie | Čas | Oficiálny zdroj |
| --- | --- | --- | --- |
| 6. NOV | Konvergencie: Godár 70 & Brezovský | 18:00 a 20:00 | [Nová synagóga](https://novasynagoga.sk/event-detail/6a2eb4e16b1c45a3881e1ef6/) |
| 6., 20., 27. NOV | Novembrové katakomby | 6. 11. o 17:00; 20. a 27. 11. o 16:00 a 17:00 | [TIK mesta Žilina](https://www.tikzilina.eu/novinky/737-novembrove-katakomby/) |
| 7. NOV | Komorný recitál – Richard Müller | 18:00 | [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/komorny-recital-richard-mueller) |
| 8., 15., 22., 29. NOV | Nedeľné rozprávky: Kráska a zviera, Zošidlo, Trafená hus, Palculienka | 16:00 | [Bábkové divadlo Žilina](https://www.bdz.sk/program) |
| 11. NOV | Sv. Martin na bielom koni a sprievod so svetlom | 15:30, sprievod 16:00 | [Obec Terchová](https://www.terchova.sk/podujatia/ostatne/2026/oslavy-sv-martina-2026) |
| 15. NOV | Beh na Husárik | štart 11:00 | [Mesto Čadca](https://www.mestocadca.sk/sport/2026/beh-na-husarik-15-november-2026.html) |
| 15. NOV | Miroslav Dvorský & Zlaté husle | 15:30 | [Obec Terchová](https://www.terchova.sk/podujatia/ostatne/2026/oslavy-sv-martina-2026) |
| 17. NOV | 17. november slávime! | 19:00 | [Nová synagóga](https://novasynagoga.sk/event-detail/6acf9659dd51d20115a38ea7/) |
| 18. NOV | Pivo, plienky, podprsenky | 19:00 | [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/pivo-plienky-podprsenky) |
| 19.–21. NOV | Cudzinec (verejná generálka a premiéra) | 19. 11. o 18:00; 20. a 21. 11. o 19:00 | [Mestské divadlo Žilina](https://divadlozilina.eu/podujatia/cudzinec-3/) |
| 21. NOV | Rodinná sobota: Tajomstvo spiaceho obra | 17:00 | [Rosenfeldov palác](https://rosenfeldovpalac.sk/tematicka-rodinna-sobota-tajomstvo-spiaceho-obra/) |
| 21. NOV | ABBA Symphonic Show | 18:00 | [ŠKO Žilina](https://skozilina.sk/podujatie/abba-symphonic-show-zilina-2/) |
| 22. NOV | Burzoblška 2026 | 10:00 – 17:00 | [Mesto Čadca](https://www.mestocadca.sk/kulturne-podujatia/burzoblska-2026) |
| 22. NOV | Heligonica – X tour 2026 | 16:00 | [Mesto Turzovka](https://www.turzovka.sk/kultura/kalendar-podujati/heligonica-x-tour-2026-3516_543sk.html) |
| 22. NOV | Tvár z bilbordu | 18:00 | [MKŠS Kysucké Nové Mesto](https://www.mkss.kysuckenovemesto.sk/mid/558233/akcia/tvar-z-bilbordu.html) |
| 23.–27. NOV | Etnofilm Čadca 2026 | bloky od 8:00 a od 17:00 | [Etnofilm](https://www.etnofilm.sk/2-uncategorised/897-program-mff-etnofilm-2026) |
| 25. NOV | Žilina Snow Film Fest 2026 | 18:00 – 21:00 | [OZ Cestou necestou](https://cestounecestou.sk/podujatie/zilina-snow-film-fest-2026-6-zimnych-filmov/) |
| 26. a 28. NOV | Vianoce po našom – Arzén & FS Rozsutec | 18:00 (Žilina 26. 11., Čadca 28. 11.) | [Dom odborov](https://www.domodborov.sk/podujatiedet.php?s=1304), [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/kapela-arzen-fs-rozsutec-vianoce-po-nasom) |
| 26.–27. NOV | Don Giovanni | 19:00 | [ŠKO Žilina](https://skozilina.sk/podujatie/don-giovanni/) |
| od 26. NOV | Vianočné trhy v Žiline (otvorenie 27. 11.) | čas nie je zverejnený | [Mesto Žilina](https://zilina.sk/vianocne-trhy-sa-tento-rok-rozsiria-aj-do-sadu-snp/) |
| 27. NOV | Diera v nebi v Rajci | 19:00 | [Silné reči](https://silnereci.sk/vystupenia/diera-v-nebi-v-rajci) |
| 28. NOV | Vianočné disko Mira Jaroša | 11:00 a 16:00 | [Dom odborov](https://www.domodborov.sk/podujatiedet.php?s=1302) |
| 28. NOV | Žilinský festival vína 2026 | od 15:00 | [Nová synagóga](https://novasynagoga.sk/event-detail/6ac96d00653eb342985652e3/) |
| 29. NOV | Rozsvietenie prvej adventnej sviece, Krásno nad Kysucou | čas nie je zverejnený | [Mesto Krásno nad Kysucou](https://www.mestokrasno.sk/novinky-z-mesta/2026/advent-a-vianoce-v-krasne-nad-kysucou-cakaju-nas-trhy-mikulas-koncerty-aj-puncovy-stanok.html) |
| 30. NOV | Zázračný svet rozprávok | 17:00 | [MKŠS Kysucké Nové Mesto](https://www.mkss.kysuckenovemesto.sk/mid/558233/akcia/zazracny-svet-rozpravok.html) |

## Výstavy otvorené v novembri

| Výstava | Koniec | Oficiálny zdroj |
| --- | --- | --- |
| Príroda mojimi očami | do 18. NOV 2026 | [Dom kultúry v Čadci](https://kultura.mestocadca.sk/kulturne-podujatia/vystava-priroda-mojimi-ocami) |
| Predvčerom... včera... dnes (Pavol Muška) | do 18. NOV 2026 | [Kysucká knižnica v Čadci](https://www.kniznica-cadca.sk/podujatia-a-sutaze/mesacne-kalendarium/podujatia-v-novembri-2026) |
| Medzi stopou & rozplynutím | do 22. NOV 2026 | [Mesto Rajecké Teplice](https://www.rajecke-teplice.info/pages/pozvanka-na-vystavu-medzi-stopou-rozplynutim) |
| Humor – korenie života | do 29. NOV 2026 | [Považské múzeum](https://pmza.sk/vystavy/2026/humor-korenie-zivota/) |
| Lúky – Dobrodružstvo poznávania | do 30. NOV 2026 | [Považské múzeum](https://pmza.sk/vystavy/2025/luka-dobrodruzstvo-poznavania/) |
| Výstava retro kočíkov, hračiek a iných spomienkových vecí | do 30. NOV 2026 | [Mesto Turzovka](https://www.turzovka.sk/kultura/kalendar-podujati/vystava-retro-kocikov-hraciek-a-inych-spomienkovych-veci-3538_547sk.html) |
| Harmonické kontrasty | do 31. DEC 2026 | [Mesto Čadca / Galéria Čadca](https://www.mestocadca.sk/kulturne-podujatia/harmonicke-kontrasty-vystava-veroniky-mikulasovej-a-marosa-meska) |
| Oči, ktoré rozprávajú | do 17. JAN 2027 | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/kastiel-radola/2971-pozvanka-na-vystavu-oci-ktore-rozpravaju) |
| Kysuce na lyžiach | január 2027 (iná stránka múzea: február 2027) | [Kysucké múzeum](https://www.kysuckemuzeum.sk/sk/vlastivedne-muzeum-v-krasne-nad-kysucou/2961-kysuce-kraj-predurceny-na-zimne-sporty) |
| Rudolf Sikora / Proti izmom Revolúcia! | 20. 11. 2026 – 17. 4. 2027 | [Považská galéria umenia](https://www.pgu.sk/výstavy/rudolf-sikora-proti-izmom/) |

## Poznámky k overeniu

- Ceny označené `podľa TIK` pochádzajú z kalendára Turistickej informačnej kancelárie mesta Žilina; stránka organizátora ich neuvádza (Bábkové divadlo, Cudzinec).
- Vianočné trhy v Žiline: mesto a kulturazilina.sk uvádzajú začiatok 26. novembra a koniec 31. decembra, oficiálne otvorenie s programom je 27. novembra. Časy otvorenia ani programu nie sú v texte zverejnené (program je len obrázok), preto karta čas neuvádza.
- Kysuce na lyžiach: stránka výstavy uvádza koniec vo februári 2027, kalendár Vlastivedného múzea v Krásne január 2027. Karta uvádza január a rozpor pomenúva.
- Etnofilm: program uvádza bloky o 8:00 a 17:00 bez určenia publika; ranné bloky môžu byť pre školy. Vstupné nie je zverejnené.
- Don Giovanni: stránky ŠKO sa líšia v platnosti abonentiek (26. 11. platia, 27. 11. nie); karta to neuvádza.
- Richard Müller: koncert bol dvakrát presunutý (16. 9. a 18. 10.) pre chorobu, pôvodné vstupenky platia.
- Nezaradené: školské a organizované predstavenia (Judáš 6. a 27. 11. ráno, Súhvezdie 17. – 20. 11., Cudzinec 25. 11.), podujatia pre uzavreté skupiny v Kysuckej knižnici, výstava Nebojím sa strachu (pokračovanie v novembri nepotvrdené), dve položky z ročného plánu mesta Rajec bez času a miesta (Oldies party 14. 11., Šachový kráľ 21. 11.), AYA Symphonic (vypredané) a Vianočné mestečko v Čadci (28. 11. je len z výberového konania, bez programu).
- Bez novembrového programu: Lutiše, Stará Bystrica a Slovenský orloj, Oščadnica, Vrátna a Snowparadise Veľká Rača (otvorenie zimnej sezóny zatiaľ nebolo oficiálne oznámené).
- Ceny a rezervácie sú uvedené iba tam, kde boli zverejnené; chýbajúce údaje neznamenajú bezplatný vstup ani voľnú kapacitu.

## Zdroje a údržba

Pri ďalšej aktualizácii:

1. Nahraď skončené udalosti novým overeným výberom z oficiálnych webov organizátorov, obcí a kultúrnych inštitúcií. Počet kariet sa riadi overeným programom, nie pevnou kvótou.
2. Skontroluj dátum, čas, miesto, cenu alebo registráciu a cieľový odkaz. Rozpory transparentne pomenuj; chýbajúce údaje nevymýšľaj.
3. Aktualizuj dátové kolekcie a ich importy, metadata, hero, názov mesiaca, texty, CTA, dátum posledného overenia a oba README.
4. Pri aktualizácii uprostred mesiaca uvádzaj zostávajúce termíny a prebiehajúce výstavy; už skončené podujatia neprezentuj ako aktuálne. Zachovaj upozornenie na zmenu programu.
5. Spusti lint a produkčný build (`next build --webpack`).

Nevymýšľaj chýbajúce termíny ani program. Ak organizátor údaje ešte nezverejnil, podujatie nezaraďuj alebo neistotu jasne pomenuj.
