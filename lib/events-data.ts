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

// Overené 21. októbra 2026; zdroje a poznámky: instruction/pages/events.md.
export const octoberEvents: LocalEvent[] = [
  {
    date: "22.",
    month: "OKT",
    dateTime: "2026-10-22T19:00:00+02:00",
    time: "19:00",
    title: "Diera v nebi – Silné reči",
    description: "Absurdná divadelná komédia o obci, ktorá hľadá svoju budúcnosť. Vstupné podľa mestského kalendára je 25 €.",
    location: "Dom kultúry, divadelná sála, Čadca",
    category: "Divadlo",
    url: "https://www.mestocadca.sk/kulturne-podujatia/diera-v-nebi-silne-reci",
    source: "Mesto Čadca / Dom kultúry"
  },
  {
    date: "23.",
    month: "OKT",
    dateTime: "2026-10-23T16:00:00+02:00",
    time: "16:00",
    title: "Ladislav Hrubý: Oheň a sneh",
    description: "Slávnostné uvedenie novej knihy kysuckého prozaika a publicistu Ladislava Hrubého v knižnici.",
    location: "Kysucká knižnica, Čadca",
    category: "Literatúra",
    url: "https://www.kniznica-cadca.sk/aktualne/ladislav-hruby-ohen-a-sneh",
    source: "Kysucká knižnica v Čadci"
  },
  {
    date: "23.",
    month: "OKT",
    dateTime: "2026-10-23T16:00:00+02:00",
    time: "16:00 a 17:00",
    title: "Októbrové katakomby",
    description: "Komentovaná prehliadka gotického podzemia. Rezervácia vopred cez TIK je potrebná. Vstupné: dospelí 5 €, žiaci, študenti a seniori 3 €, deti do 6 rokov a ZŤP 2 €.",
    location: "Kostol Obrátenia sv. Pavla, Mariánske námestie, Žilina",
    category: "História a prehliadky",
    url: "https://www.tikzilina.eu/novinky/737-oktobrove-katakomby/",
    source: "TIK mesta Žilina"
  },
  {
    date: "23.",
    month: "OKT",
    dateTime: "2026-10-23T17:00:00+02:00",
    time: "17:00",
    title: "Genius loci: Lentilky Žilina",
    description: "Moderovaná diskusia o žilinskom tanečnom súbore Lentilky a jeho tridsaťročnej histórii.",
    location: "Rosenfeldov palác, Žilina",
    category: "Diskusia a kultúra",
    url: "https://www.tikzilina.eu/novinky/743-genius-loci-lentilky-zilina/",
    source: "TIK mesta Žilina / Rosenfeldov palác"
  },
  {
    date: "24.",
    month: "OKT",
    dateTime: "2026-10-24T16:00:00+02:00",
    time: "16:00",
    title: "Prednáška s Danielom Dvořákom",
    description: "Prednáška športovca a trénera s názvom NewStart k maximálnej sile. Vstup je voľný.",
    location: "Dom kultúry, klubovňa č. 36 na 1. poschodí, Čadca",
    category: "Prednáška",
    url: "https://kultura.mestocadca.sk/kulturne-podujatia/prednaska-s-danielom-dvorakom",
    source: "Dom kultúry v Čadci"
  },
  {
    date: "24.",
    month: "OKT",
    dateTime: "2026-10-24T19:00:00+02:00",
    time: "19:00",
    title: "Status quo",
    description: "Komédia Maje Zade v réžii Mariána Amslera. Októbrové uvedenie sprevádzajú anglické titulky.",
    location: "Mestské divadlo Žilina, Veľká sála",
    category: "Divadlo",
    url: "https://www.divadlozilina.eu/oktobrovy-program-v-predaji-3/",
    source: "Mestské divadlo Žilina"
  },
  {
    date: "25.",
    month: "OKT",
    dateTime: "2026-10-25",
    title: "Kuchyňa starých materí – Zabíjačková nedeľa",
    description: "Jesenné vidiecke tradície a tradičné kysucké špeciality v skanzene. Presný priebeh a vstupné si overte u múzea.",
    location: "Múzeum kysuckej dediny, Nová Bystrica – Vychylovka",
    category: "Tradície a gastronómia",
    url: "https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2966-kuchyna-starych-materi-zabijackova-nedela-v-muzeu-kysuckej-dediny-vo-vychylovke",
    source: "Kysucké múzeum"
  },
  {
    date: "26.–28.",
    month: "OKT",
    dateTime: "2026-10-26T18:00:00+01:00",
    time: "Besedy od 18:00, filmové bloky od 19:30 podľa denného programu",
    title: "Hory a mesto Žilina 2026",
    description: "Tri večery horských a dobrodružných filmov s hosťami Evou Marekovou, Róbertom Gálfym, Rasťom Hatiarom a Denisou Šulcovou.",
    location: "Žilina – miesto projekcií si overte pri rezervácii",
    category: "Film a dobrodružstvo",
    url: "https://www.tikzilina.eu/novinky/680-hory-a-mesto-2026/",
    source: "TIK mesta Žilina"
  },
  {
    date: "27.",
    month: "OKT",
    dateTime: "2026-10-27T16:00:00+01:00",
    time: "16:00",
    title: "Leporelo pre deti (6 – 12 rokov)",
    description: "Deti si vyrobia vlastnú skladaciu knižku. Rezervácia cez Tootoot; jedna vstupenka platí pre dieťa a jeden sprievod.",
    location: "Rosenfeldov palác, Žilina",
    category: "Tvorivá dielňa",
    url: "https://rosenfeldovpalac.sk/workshop-leporelo-pre-deti-6-12r/",
    source: "Rosenfeldov palác"
  },
  {
    date: "27.",
    month: "OKT",
    dateTime: "2026-10-27T17:30:00+01:00",
    time: "17:30",
    title: "Kým kohút nezaspieva",
    description: "Dráma Ivana Bukovčana v podaní Divadelného súboru Jána Palárika. Vstupné 7 €; organizátor uvádza bezplatný vstup pre seniorov, podmienky si overte v programe.",
    location: "Dom kultúry, divadelná sála, Čadca",
    category: "Divadlo",
    url: "https://kultura.mestocadca.sk/kulturne-podujatia/kym-kohut-nezaspieva",
    source: "Dom kultúry v Čadci"
  },
  {
    date: "28.",
    month: "OKT",
    dateTime: "2026-10-28T17:00:00+01:00",
    time: "17:00",
    title: "Lampiónový sprievod v Čadci",
    description: "Jesenný sprievod pre deti, rodičov aj starých rodičov. Stretnutie je na pešej zóne oproti mestskému úradu.",
    location: "Pešia zóna oproti Mestskému úradu, Čadca",
    category: "Rodiny s deťmi",
    url: "https://www.mestocadca.sk/kulturne-podujatia/lampionovy-sprievod",
    source: "Mesto Čadca / Centrum voľného času"
  },
  {
    date: "28.",
    month: "OKT",
    dateTime: "2026-10-28T18:00:00+01:00",
    time: "18:00",
    title: "Slnečnice – film o Vincentovi van Goghovi",
    description: "Dokument Davida Bickerstaffa v angličtine s českými titulkami. Dĺžka 89 minút, odporúčaný vek 12+.",
    location: "Rosenfeldov palác, Žilina",
    category: "Film a umenie",
    url: "https://rosenfeldovpalac.sk/premietanie-slnecnice-r-d-bickerstaff-2021/",
    source: "Rosenfeldov palác"
  },
  {
    date: "29.–31.",
    month: "OKT",
    dateTime: "2026-10-29",
    title: "Po stopách svetlonosa",
    description: "Jesenný program v skanzene uvedený v kalendári múzea na 29. – 31. októbra. Niektoré oficiálne prehľady uvádzajú aj 1. november; tento termín si vopred potvrďte u múzea.",
    location: "Múzeum kysuckej dediny, Nová Bystrica – Vychylovka",
    category: "Rodiny a tradície",
    url: "https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021",
    source: "Kysucké múzeum"
  },
  {
    date: "29. 10.",
    month: "– 1. 11.",
    dateTime: "2026-10-29",
    time: "Pracovné dni 8:00 – 16:00, víkend 10:00 – 16:00; posledný vstup 15:30",
    title: "Strašidelné prázdniny v Múzeu Čadca",
    description: "Hmatové krabičky, pexeso a hľadanie strašidiel dopĺňajú výstavu Nebojím sa strachu. Deti v kostýme strašidla majú vstup zadarmo.",
    location: "Múzeum Čadca, Kysucké múzeum",
    category: "Rodiny s deťmi",
    url: "https://www.kysuckemuzeum.sk/sk/kysucke-muzeum-cadca/2968-strasidelne-prazdniny-v-muzeu-cadca",
    source: "Kysucké múzeum"
  },
  {
    date: "29.",
    month: "OKT",
    dateTime: "2026-10-29T10:30:00+01:00",
    time: "10:30 a 14:30",
    title: "Štebotavá tvorivá dielňa",
    description: "Tvorenie vtáčikov z recyklovaných materiálov pre deti od 6 rokov. Miesto si rezervujte cez Tootoot; cenník je pri programe.",
    location: "Rosenfeldov palác, Žilina",
    category: "Tvorivá dielňa",
    url: "https://rosenfeldovpalac.sk/jesenne-prazdniny-stebotava-tvoriva-dielna/",
    source: "Rosenfeldov palác"
  },
  {
    date: "30.",
    month: "OKT",
    dateTime: "2026-10-30T16:00:00+01:00",
    time: "16:00 a 17:00",
    title: "Októbrové katakomby",
    description: "Ďalší termín prehliadky žilinského podzemia. Miesto si rezervujte vopred cez TIK. Vstupné: dospelí 5 €, žiaci, študenti a seniori 3 €, deti do 6 rokov a ZŤP 2 €.",
    location: "Kostol Obrátenia sv. Pavla, Mariánske námestie, Žilina",
    category: "História a prehliadky",
    url: "https://www.tikzilina.eu/novinky/737-oktobrove-katakomby/",
    source: "TIK mesta Žilina"
  },
  {
    date: "30.",
    month: "OKT",
    dateTime: "2026-10-30T18:00:00+01:00",
    time: "18:00",
    title: "Art brut koláž",
    description: "Tvorivý workshop s umelkyňou Kashou. Masky a koláže z nájdených predmetov môžete tvoriť aj bez predchádzajúceho umeleckého vzdelania.",
    location: "Rosenfeldov palác, Žilina",
    category: "Tvorivá dielňa",
    url: "https://rosenfeldovpalac.sk/workshop-art-brut-kolaz/",
    source: "Rosenfeldov palác"
  }
];

// Pri prebiehajúcich výstavách dátumový štítok označuje koniec výstavy.
export const ongoingExhibitions: LocalEvent[] = [
  {
    date: "do 31.",
    month: "OKT",
    dateTime: "2026-10-31",
    title: "Energia farieb 2026",
    description: "Výstava abstraktných a pop-artových diel Williama Jaroša v Raganovom mlyne. Prístupná do 31. októbra počas prevádzky skanzenu.",
    location: "Raganov mlyn, Múzeum kysuckej dediny, Vychylovka",
    category: "Výstava",
    url: "https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2957-energia-farieb-v-skanzene-william-jaros-prinasa-do-vychylovky-modernu-monu-lisu",
    source: "Kysucké múzeum"
  },
  {
    date: "do 31.",
    month: "OKT",
    dateTime: "2026-10-31",
    title: "Vlaky s vôňou dreva",
    description: "Výstava zo sezónneho programu vo Vychylovke trvá do 31. októbra. Dostupnosť výstavy a vstupné si overte v múzeu.",
    location: "Areál Múzea kysuckej dediny a HLÚŽ, Vychylovka",
    category: "Výstava a železnica",
    url: "https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021",
    source: "Kysucké múzeum"
  },
  {
    date: "do 31.",
    month: "OKT",
    dateTime: "2026-10-31",
    title: "Železnička v premenách času",
    description: "Sezónna výstava venovaná železničke je v programe do 31. októbra. Lístky do skanzenu a na vlak sa kupujú samostatne.",
    location: "Areál Múzea kysuckej dediny a HLÚŽ, Vychylovka",
    category: "Výstava a história",
    url: "https://www.kysuckemuzeum.sk/sk/muzeum-kysuckej-dediny/2186-podujatia-expozicie-a-vystavy-v-roku-2021",
    source: "Kysucké múzeum"
  },
  {
    date: "do 1.",
    month: "NOV",
    dateTime: "2026-11-01",
    title: "Nebojím sa strachu",
    description: "Výstava s hrami a úlohami, pripravená s BIBIANOU, približuje deťom rôzne podoby strachu. Trvá do 1. novembra.",
    location: "Múzeum Čadca, Kysucké múzeum",
    category: "Rodinná výstava",
    url: "https://www.mestocadca.sk/kulturne-podujatia/nebojim-sa-strachu",
    source: "Mesto Čadca / Kysucké múzeum"
  },
  {
    date: "do 1.",
    month: "NOV",
    dateTime: "2026-11-01",
    title: "Strojovou ihlou – Šitie, ktoré menilo dejiny",
    description: "Historické šijacie stroje, krajčírske pomôcky a ručne šité odevy zo zbierok múzea. Výstava trvá do 1. novembra.",
    location: "Múzeum Čadca, Kysucké múzeum",
    category: "Výstava a remeslá",
    url: "https://www.mestocadca.sk/kulturne-podujatia/strojovou-ihlou-sitie-ktore-menilo-dejiny",
    source: "Mesto Čadca / Kysucké múzeum"
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
  }
];
