export type LocalEvent = {
  date: string;
  month: string;
  dateTime: string;
  time?: string;
  title: string;
  description: string;
  location: string;
  category: string;
  url: string;
  source: string;
};

// Overené 5. novembra 2026; zdroje a poznámky: instruction/pages/events.md.
export const novemberEvents: LocalEvent[] = [
  {
    date: "6.",
    month: "NOV",
    dateTime: "2026-11-06T18:00:00+01:00",
    time: "18:00 a 20:00",
    title: "Konvergencie: Godár 70 & Brezovský",
    description: "Dva koncerty festivalu Konvergencie: pocta Vladimírovi Godárovi k 70. narodeninám (Jozef Lupták, Žilinský miešaný zbor a ďalší) a projekt Mareka Brezovského. Vstupné 22 – 25 €, dvojdňová permanentka 45 €.",
    location: "Nová synagóga, Žilina",
    category: "Koncert",
    url: "https://novasynagoga.sk/event-detail/6a2eb4e16b1c45a3881e1ef6/",
    source: "Nová synagóga / festival Konvergencie"
  },
  {
    date: "6.–27.",
    month: "NOV",
    dateTime: "2026-11-06T17:00:00+01:00",
    time: "6. 11. o 17:00; 20. a 27. 11. o 16:00 a 17:00",
    title: "Novembrové katakomby",
    description: "Komentovaná prehliadka gotických pivníc pod kostolom. Kapacita je obmedzená, rezervácia cez TIK je potrebná. Vstupné: dospelí 5 €, študenti, žiaci a seniori 3 €, deti do 6 rokov a ZŤP 2 €, k tomu 1 € za vstup do kostola.",
    location: "Sirotársky kostol (Kostol obrátenia sv. Pavla), Mariánske námestie, Žilina",
    category: "História a prehliadky",
    url: "https://www.tikzilina.eu/novinky/737-novembrove-katakomby/",
    source: "TIK mesta Žilina"
  },
  {
    date: "7.",
    month: "NOV",
    dateTime: "2026-11-07T18:00:00+01:00",
    time: "18:00",
    title: "Komorný recitál – Richard Müller",
    description: "Richard Müller s Remigiusom Klačanským (klavír), Michalom Žáčkom, Martinom Gašparom a Jurajom Kuchárekom. Koncert bol presunutý z jesenných termínov; pôvodné vstupenky zostávajú v platnosti.",
    location: "Dom kultúry, divadelná sála, Čadca",
    category: "Koncert",
    url: "https://kultura.mestocadca.sk/kulturne-podujatia/komorny-recital-richard-mueller",
    source: "Dom kultúry v Čadci"
  },
  {
    date: "8.–29.",
    month: "NOV",
    dateTime: "2026-11-08T16:00:00+01:00",
    time: "nedele o 16:00",
    title: "Nedeľné rozprávky v Bábkovom divadle",
    description: "8. 11. Kráska a zviera (od 7 rokov), 15. 11. Zošidlo (od 5 rokov), 22. 11. Trafená hus (od 6 rokov) a 29. 11. Palculienka (od 3 rokov). Vstupné 7 € podľa TIK.",
    location: "Bábkové divadlo Žilina, divadelná sála",
    category: "Pre deti",
    url: "https://www.bdz.sk/program",
    source: "Bábkové divadlo Žilina"
  },
  {
    date: "11.",
    month: "NOV",
    dateTime: "2026-11-11T15:30:00+01:00",
    time: "15:30, sprievod od 16:00",
    title: "Sv. Martin na bielom koni a sprievod so svetlom",
    description: "Príchod sv. Martina na bielom koni a sprievod so svetlom, ktorý sa končí požehnaním pred Diecéznou svätyňou sv. Cyrila a Metoda. Súčasť osláv patróna terchovskej farnosti.",
    location: "Areál pred obecným úradom, Terchová",
    category: "Tradície",
    url: "https://www.terchova.sk/podujatia/ostatne/2026/oslavy-sv-martina-2026",
    source: "Obec Terchová"
  },
  {
    date: "15.",
    month: "NOV",
    dateTime: "2026-11-15T11:00:00+01:00",
    time: "štart 11:00 (prezentácia 8:30 – 10:30)",
    title: "Beh na Husárik – o pohár primátora mesta Čadca",
    description: "Beh do kopca na 4 km s prevýšením 290 m. Štartovné 10 € (v deň pretekov 12 €), študenti do 19 rokov zadarmo; online prihlášky do 13. 11. do 18:00.",
    location: "Štart pred Mestským úradom Čadca, cieľ pri Horskom hoteli Husárik",
    category: "Šport",
    url: "https://www.mestocadca.sk/sport/2026/beh-na-husarik-15-november-2026.html",
    source: "Klub Kysuckého maratónu / Mesto Čadca"
  },
  {
    date: "15.",
    month: "NOV",
    dateTime: "2026-11-15T15:30:00+01:00",
    time: "15:30",
    title: "Miroslav Dvorský & Zlaté husle",
    description: "Slávnostný koncert v rámci osláv sv. Martina v Terchovej. Vstupné a predaj vstupeniek obec nezverejnila.",
    location: "Diecézna svätyňa sv. Cyrila a Metoda, Terchová",
    category: "Koncert",
    url: "https://www.terchova.sk/podujatia/ostatne/2026/oslavy-sv-martina-2026",
    source: "Obec Terchová"
  },
  {
    date: "17.",
    month: "NOV",
    dateTime: "2026-11-17T19:00:00+01:00",
    time: "19:00",
    title: "17. november slávime!",
    description: "Večer ku Dňu boja za slobodu a demokraciu: Žilinský zmiešaný zbor so Žilináčikom, Duo Popocatepetl, Zabiť Františka a Fvck_kvlt s projekciou Michala Krakovského. Vstupné 17 €, študenti a ZŤP 7 €.",
    location: "Nová synagóga, Žilina",
    category: "Koncert",
    url: "https://novasynagoga.sk/event-detail/6acf9659dd51d20115a38ea7/",
    source: "Nová synagóga"
  },
  {
    date: "18.",
    month: "NOV",
    dateTime: "2026-11-18T19:00:00+01:00",
    time: "19:00",
    title: "Pivo, plienky, podprsenky",
    description: "Komédia Teatra Bratislava o rozlúčke so slobodou s Martinom Mňahončákom, Davidom Hartlom, Zuzanou Norisovou a Monikou Szabó. Vstupné 26 €, zľavnené 23 €; pokladnica prijíma len hotovosť.",
    location: "Dom kultúry, divadelná sála, Čadca",
    category: "Divadlo",
    url: "https://kultura.mestocadca.sk/kulturne-podujatia/pivo-plienky-podprsenky",
    source: "Dom kultúry v Čadci"
  },
  {
    date: "19.–21.",
    month: "NOV",
    dateTime: "2026-11-19T18:00:00+01:00",
    time: "19. 11. o 18:00 (verejná generálka); 20. a 21. 11. o 19:00",
    title: "Cudzinec",
    description: "Premiéra dramatizácie Camusovho románu v réžii Eduarda Kudláča, ako Meursault hosťuje Michal Režný. Vstupné 17 € podľa TIK, v deň predstavenia o 2 € viac.",
    location: "Mestské divadlo Žilina, Veľká sála",
    category: "Divadlo",
    url: "https://divadlozilina.eu/podujatia/cudzinec-3/",
    source: "Mestské divadlo Žilina"
  },
  {
    date: "21.",
    month: "NOV",
    dateTime: "2026-11-21T17:00:00+01:00",
    time: "17:00",
    title: "Rodinná sobota: Tajomstvo spiaceho obra",
    description: "Interaktívna prehliadka paláca ako domu čarovného obra pre deti od 3 rokov. Jednotná cena 4 € na osobu.",
    location: "Rosenfeldov palác, Žilina",
    category: "Pre deti",
    url: "https://rosenfeldovpalac.sk/tematicka-rodinna-sobota-tajomstvo-spiaceho-obra/",
    source: "Rosenfeldov palác"
  },
  {
    date: "21.",
    month: "NOV",
    dateTime: "2026-11-21T18:00:00+01:00",
    time: "18:00",
    title: "ABBA Symphonic Show",
    description: "Piesne skupiny ABBA v podaní ŠKO Žilina pod taktovkou Vladimíra Ďatelinku a Happy Band Orchestra. Vstupné 44, 49 a 54 € cez Ticketportal.",
    location: "Dom odborov, Žilina",
    category: "Koncert",
    url: "https://skozilina.sk/podujatie/abba-symphonic-show-zilina-2/",
    source: "ŠKO Žilina / Happy Band Orchestra"
  },
  {
    date: "22.",
    month: "NOV",
    dateTime: "2026-11-22T10:00:00+01:00",
    time: "10:00 – 17:00",
    title: "Burzoblška 2026",
    description: "11. ročník predvianočného podujatia s ručne vyrábanými výrobkami, bazárom hračiek, swapom kníh, tombolou, punčom a aktivitami pre deti aj dospelých.",
    location: "Dom kultúry, Čadca",
    category: "Predvianočný trh",
    url: "https://www.mestocadca.sk/kulturne-podujatia/burzoblska-2026",
    source: "Mesto Čadca"
  },
  {
    date: "22.",
    month: "NOV",
    dateTime: "2026-11-22T16:00:00+01:00",
    time: "16:00",
    title: "Heligonica – X tour 2026",
    description: "Koncert kapely, ktorá spája tradíciu ľudovej hudby s moderným zvukom a v roku 2026 oslavuje 10 rokov. Plné vstupné 10 €.",
    location: "Kultúrny dom R. Jašíka, Turzovka",
    category: "Koncert",
    url: "https://www.turzovka.sk/kultura/kalendar-podujati/heligonica-x-tour-2026-3516_543sk.html",
    source: "Mesto Turzovka"
  },
  {
    date: "22.",
    month: "NOV",
    dateTime: "2026-11-22T18:00:00+01:00",
    time: "18:00",
    title: "Tvár z bilbordu",
    description: "Hra Stanislava Štepku v réžii Ondreja Spišáka o sile marketingu a povrchnosti spoločnosti; hrajú aj Stanislav Štepka a Maruška Nedomová. Vstupné 27 €.",
    location: "Dom kultúry, Kysucké Nové Mesto",
    category: "Divadlo",
    url: "https://www.mkss.kysuckenovemesto.sk/mid/558233/akcia/tvar-z-bilbordu.html",
    source: "MKŠS Kysucké Nové Mesto"
  },
  {
    date: "23.–27.",
    month: "NOV",
    dateTime: "2026-11-23T08:00:00+01:00",
    time: "programové bloky od 8:00 a od 17:00",
    title: "Etnofilm Čadca 2026",
    description: "24. ročník medzinárodného festivalu dokumentárnych filmov o kultúrnej a sociálnej rozmanitosti s 22 súťažnými filmami. Filmy sú v rovnakých dňoch dostupné aj online; vstupné organizátor nezverejnil.",
    location: "Dom kultúry, divadelná sála, Čadca",
    category: "Film",
    url: "https://www.etnofilm.sk/2-uncategorised/897-program-mff-etnofilm-2026",
    source: "Etnofilm / Kysucké kultúrne stredisko"
  },
  {
    date: "25.",
    month: "NOV",
    dateTime: "2026-11-25T18:00:00+01:00",
    time: "18:00 – 21:00",
    title: "Žilina Snow Film Fest 2026",
    description: "Premietanie šiestich zimných outdoorových filmov, napríklad Hladná gravitácia či Mínus 103 stupňov. Predpredaj 12 € končí hodinu pred začiatkom, na mieste 14 €, ak to dovolí kapacita.",
    location: "Smer 77, R. Zaymusa 72/8, Žilina",
    category: "Film",
    url: "https://cestounecestou.sk/podujatie/zilina-snow-film-fest-2026-6-zimnych-filmov/",
    source: "OZ Cestou necestou"
  },
  {
    date: "26.–28.",
    month: "NOV",
    dateTime: "2026-11-26T18:00:00+01:00",
    time: "26. 11. o 18:00 v Žiline; 28. 11. o 18:00 v Čadci",
    title: "Vianoce po našom – Arzén & FS Rozsutec",
    description: "Predvianočný program rockovej skupiny Arzén a folklórneho súboru Rozsutec o vianočných zvykoch: hudba, tanec a spev. Vstupné v Žiline 25 a 27 €, v Čadci 25 €.",
    location: "Dom odborov, Žilina · Dom kultúry, Čadca",
    category: "Koncert a folklór",
    url: "https://www.domodborov.sk/podujatiedet.php?s=1304",
    source: "Dom odborov Žilina / Dom kultúry v Čadci"
  },
  {
    date: "26.–27.",
    month: "NOV",
    dateTime: "2026-11-26T19:00:00+01:00",
    time: "19:00",
    title: "Don Giovanni",
    description: "Koncertné uvedenie výberu z Mozartovej opery k 270. výročiu narodenia skladateľa. ŠKO Žilina diriguje Tomáš Brauner, Don Giovanniho spieva Jiří Brückler; vstupné 20, 22 a 24 €.",
    location: "Dom umenia Fatra, Žilina",
    category: "Koncert a opera",
    url: "https://skozilina.sk/podujatie/don-giovanni/",
    source: "ŠKO Žilina"
  },
  {
    date: "od 26.",
    month: "NOV",
    dateTime: "2026-11-26",
    title: "Vianočné trhy v Žiline",
    description: "Mestské vianočné trhy potrvajú do 31. decembra a tento rok sa rozšíria aj do Sadu SNP. Slávnostné otvorenie 27. novembra prinesie heligónkárov, koncert Barbory Švidraňovej a večernú vianočnú párty.",
    location: "Centrum Žiliny a Sad SNP",
    category: "Vianočné trhy",
    url: "https://zilina.sk/vianocne-trhy-sa-tento-rok-rozsiria-aj-do-sadu-snp/",
    source: "Mesto Žilina"
  },
  {
    date: "27.",
    month: "NOV",
    dateTime: "2026-11-27T19:00:00+01:00",
    time: "19:00",
    title: "Diera v nebi v Rajci",
    description: "Absurdná komédia Silných rečí o farárovi, kuchárovi a starostke, ktorí chcú zviditeľniť dedinu na konci sveta bez signálu. Vstupenky predávajú Silné reči online.",
    location: "Kultúrny dom, Rajec",
    category: "Divadlo",
    url: "https://silnereci.sk/vystupenia/diera-v-nebi-v-rajci",
    source: "Silné reči"
  },
  {
    date: "28.",
    month: "NOV",
    dateTime: "2026-11-28T11:00:00+01:00",
    time: "11:00 a 16:00",
    title: "Vianočné disko Mira Jaroša",
    description: "Vianočný koncert Mira Jaroša s kapelou pre deti od 3 rokov, približne 60 minút. Vstupné 22 a 25 €, len cez Ticketportal.",
    location: "Dom odborov, Žilina",
    category: "Pre deti",
    url: "https://www.domodborov.sk/podujatiedet.php?s=1302",
    source: "Dom odborov Žilina"
  },
  {
    date: "28.",
    month: "NOV",
    dateTime: "2026-11-28T15:00:00+01:00",
    time: "od 15:00",
    title: "Žilinský festival vína 2026",
    description: "Nultý ročník vínneho festivalu s približne 15 slovenskými vinármi a jedným zahraničným hosťom; vyše 120 vzoriek vrátane mladých vín ročníka 2025. Vstupné organizátor nezverejnil.",
    location: "Nová synagóga, Žilina",
    category: "Gastro",
    url: "https://novasynagoga.sk/event-detail/6ac96d00653eb342985652e3/",
    source: "Nová synagóga / Winetaste"
  },
  {
    date: "29.",
    month: "NOV",
    dateTime: "2026-11-29",
    title: "Rozsvietenie prvej adventnej sviece",
    description: "Krásno nad Kysucou začína adventný program spoločným rozsvietením prvej adventnej sviece. Od 27. novembra je cez víkendy (piatok – nedeľa, 15:00 – 22:00) otvorený aj punčový stánok pred kultúrnym domom.",
    location: "Námestie pred radnicou, Krásno nad Kysucou",
    category: "Advent",
    url: "https://www.mestokrasno.sk/novinky-z-mesta/2026/advent-a-vianoce-v-krasne-nad-kysucou-cakaju-nas-trhy-mikulas-koncerty-aj-puncovy-stanok.html",
    source: "Mesto Krásno nad Kysucou"
  },
  {
    date: "30.",
    month: "NOV",
    dateTime: "2026-11-30T17:00:00+01:00",
    time: "17:00",
    title: "Zázračný svet rozprávok",
    description: "Rodinné predstavenie so známymi piesňami z rozprávok, ktorým sprevádza Džin z Aladina; účinkujú Andrea Somorovská, Mirka Gális Partlová, Dárius Koči a ďalší. Vstupné 17 €.",
    location: "Dom kultúry, Kysucké Nové Mesto",
    category: "Pre deti",
    url: "https://www.mkss.kysuckenovemesto.sk/mid/558233/akcia/zazracny-svet-rozpravok.html",
    source: "MKŠS Kysucké Nové Mesto"
  }
];

// Pri prebiehajúcich výstavách dátumový štítok označuje koniec výstavy.
export const ongoingExhibitions: LocalEvent[] = [
  {
    date: "do 18.",
    month: "NOV",
    dateTime: "2026-11-18",
    title: "Príroda mojimi očami",
    description: "Fotografie Marianny Šušlíkovej z ciest a divokej prírody. Otvorené denne 9:00 – 18:00, vstup voľný.",
    location: "Dom kultúry, 1. poschodie, Čadca",
    category: "Výstava fotografií",
    url: "https://kultura.mestocadca.sk/kulturne-podujatia/vystava-priroda-mojimi-ocami",
    source: "Dom kultúry v Čadci"
  },
  {
    date: "do 18.",
    month: "NOV",
    dateTime: "2026-11-18",
    title: "Predvčerom... včera... dnes",
    description: "Výstava akademického maliara Pavla Mušku v rámci festivalu Jurinova jeseň. Prístupná počas otváracích hodín knižnice.",
    location: "Kysucká knižnica, Čadca",
    category: "Výstava umenia",
    url: "https://www.kniznica-cadca.sk/podujatia-a-sutaze/mesacne-kalendarium/podujatia-v-novembri-2026",
    source: "Kysucká knižnica v Čadci"
  },
  {
    date: "do 22.",
    month: "NOV",
    dateTime: "2026-11-22",
    title: "Medzi stopou & rozplynutím",
    description: "Výstava mladej výtvarníčky Kataríny Šálekovej, vernisáž 9. novembra o 16:30. Otváracie hodiny mesto nezverejnilo.",
    location: "Sobášna sieň Mestského úradu, Rajecké Teplice",
    category: "Výstava umenia",
    url: "https://www.rajecke-teplice.info/pages/pozvanka-na-vystavu-medzi-stopou-rozplynutim",
    source: "Mesto Rajecké Teplice"
  },
  {
    date: "do 29.",
    month: "NOV",
    dateTime: "2026-11-29",
    title: "Humor – korenie života",
    description: "Drotárske diela z 32. Stretnutia drotárskych majstrov. Pred návštevou si overte otváracie hodiny hradu.",
    location: "Budatínsky hrad, Žilina",
    category: "Výstava a remeslá",
    url: "https://pmza.sk/vystavy/2026/humor-korenie-zivota/",
    source: "Považské múzeum"
  },
  {
    date: "do 30.",
    month: "NOV",
    dateTime: "2026-11-30",
    title: "Lúky – Dobrodružstvo poznávania",
    description: "Výstava o lúkach s detským kútikom, vhodná na rodinnú návštevu hradu. Trvá do 30. novembra.",
    location: "Budatínsky hrad, Žilina",
    category: "Rodinná výstava",
    url: "https://pmza.sk/vystavy/2025/luka-dobrodruzstvo-poznavania/",
    source: "Považské múzeum"
  },
  {
    date: "do 30.",
    month: "NOV",
    dateTime: "2026-11-30",
    title: "Výstava retro kočíkov, hračiek a iných spomienkových vecí",
    description: "Staré kočíky, hračky a spomienkové predmety z čias, keď kočíkovali naše babičky a mamičky. Vstupné ani otváracie hodiny mesto nezverejnilo.",
    location: "Kultúrny dom R. Jašíka, Turzovka",
    category: "Výstava",
    url: "https://www.turzovka.sk/kultura/kalendar-podujati/vystava-retro-kocikov-hraciek-a-inych-spomienkovych-veci-3538_547sk.html",
    source: "Mesto Turzovka"
  },
  {
    date: "do 31.",
    month: "DEC",
    dateTime: "2026-12-31",
    title: "Harmonické kontrasty",
    description: "Výstava maliarky Veroniky Mikulášovej a sochára Maroša Meška. Otvorená od 16. októbra do 31. decembra podľa otváracích hodín galérie.",
    location: "Galéria Čadca, budova Mestského úradu",
    category: "Výstava umenia",
    url: "https://www.mestocadca.sk/kulturne-podujatia/harmonicke-kontrasty-vystava-veroniky-mikulasovej-a-marosa-meska",
    source: "Mesto Čadca / Galéria Čadca"
  },
  {
    date: "do 17.",
    month: "JAN",
    dateTime: "2027-01-17",
    title: "Oči, ktoré rozprávajú",
    description: "Maľby a kresby zvierat a známych osobností od Gabriely Stuchlikovej s dôrazom na výraz očí. Výstava trvá do 17. januára 2027; v sobotu je kaštieľ zatvorený.",
    location: "Kaštieľ Radoľa",
    category: "Výstava umenia",
    url: "https://www.kysuckemuzeum.sk/sk/kastiel-radola/2971-pozvanka-na-vystavu-oci-ktore-rozpravaju",
    source: "Kysucké múzeum"
  },
  {
    date: "do jan.",
    month: "2027",
    dateTime: "2027-01",
    title: "Kysuce na lyžiach",
    description: "Výstava o Kysuciach ako centre zimných športov a o histórii lyžiarskych stredísk v Oščadnici, Makove, Skalitom a Čadci. Múzeum uvádza koniec v januári 2027, na inej stránke vo februári 2027.",
    location: "Vlastivedné múzeum, Kultúrny dom, Krásno nad Kysucou",
    category: "Výstava a história",
    url: "https://www.kysuckemuzeum.sk/sk/vlastivedne-muzeum-v-krasne-nad-kysucou/2961-kysuce-kraj-predurceny-na-zimne-sporty",
    source: "Kysucké múzeum"
  },
  {
    date: "do 17.",
    month: "APR",
    dateTime: "2027-04-17",
    title: "Rudolf Sikora / Proti izmom Revolúcia!",
    description: "Nová výstava Považskej galérie umenia otvorená od 20. novembra 2026 do 17. apríla 2027, vernisáž 19. novembra o 17:00. Galéria je otvorená od utorka do soboty 10:00 – 18:00.",
    location: "Považská galéria umenia, Žilina",
    category: "Výstava umenia",
    url: "https://www.pgu.sk/výstavy/rudolf-sikora-proti-izmom/",
    source: "Považská galéria umenia"
  }
];
