import type { Metadata } from "next";

export const siteUrl = "https://pallovdvor.sk";
export const siteLastModified = "2026-07-27";

export const site = {
  name: "Pallov Dvor",
  subtitle: "Chata Lutiše na prenájom",
  description:
    "Chata Lutiše na prenájom pre rodiny, skupiny a menšie firemné pobyty na Kysuciach.",
  brandLogo: "/brand/logo-horizontal.png",
  brandLogoLight: "/brand/logo-stacked-mono-light.png",
  primaryCta: "Overiť dostupnosť termínu",
  headerCta: "Overiť termín",
  ctaHref: "/kontakt#formular",
  url: siteUrl,
};

export const contact = {
  phone: "0904 955 600",
  phoneHref: "tel:+421904955600",
  email: "martinmatostano@gmail.com",
  emailHref: "mailto:martinmatostano@gmail.com",
  address: "Lutiše Adamovci 373",
  parking: "4 parkovacie miesta priamo pri objekte",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Luti%C5%A1e%20Adamovci%20373",
  mapEmbed:
    "https://www.google.com/maps?q=Luti%C5%A1e%20Adamovci%20373&output=embed",
};

export const contactForm = {
  enabled: false,
  statusLabel: "WIP",
  unavailableMessage:
    "Kontaktný formulár pripravujeme. Zatiaľ nás, prosím, kontaktujte telefonicky alebo e-mailom.",
};

export type NavItem = {
  label: string;
  href: string;
  featured?: boolean;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "O nás", href: "/o-nas" },
  {
    label: "Ubytovanie",
    href: "/ubytovanie",
    children: [
      { label: "Fotogaléria", href: "/fotogaleria" },
      { label: "Wellness", href: "/wellness" },
    ],
  },
  { label: "Cenník", href: "/cennik" },
  { label: "Atrakcie", href: "/atrakcie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const images = {
  hero: "/images/pallov-dvor/hero-chata-pallov-dvor.jpg",
  exterior: "/images/pallov-dvor/exterier-pallov-dvor.jpg",
  wholeObject: "/images/pallov-dvor/cely-objekt-pallov-dvor.jpg",
  aboutExterior: "/images/pallov-dvor/o-nas-pallov-dvor-exterier.jpg",
  aboutInterior: "/images/pallov-dvor/o-nas-interier.jpg",
  interior: "/images/pallov-dvor/interier-pallov-dvor.jpg",
  livingKitchen: "/images/pallov-dvor/obyvacka-kuchyna-pallov-dvor.jpg",
  dining: "/images/pallov-dvor/jedalensky-priestor-pallov-dvor.jpg",
  social: "/images/pallov-dvor/spolocensky-priestor.jpg",
  projector: "/images/pallov-dvor/spolocensky-priestor-projektor.jpg",
  detail: "/images/pallov-dvor/detail-chaty.jpg",
  bathroomGround: "/images/pallov-dvor/kupelna-prizemie-pallov-dvor.jpg",
  bathroomUpper: "/images/pallov-dvor/kupelna-poschodie-pallov-dvor.jpg",
  gazebo: "/images/pallov-dvor/altanok-pallov-dvor.jpg",
  gazeboEvening: "/images/pallov-dvor/altanok-vecer-pallov-dvor.jpg",
  grill: "/images/pallov-dvor/gril-pallov-dvor.jpg",
  sauna: "/images/pallov-dvor/sauna-pallov-dvor.jpg",
  tub: "/images/pallov-dvor/vonkajsia-kada-pallov-dvor.jpg",
  saunaTub: "/images/pallov-dvor/sauna-kada-pallov-dvor.jpg",
  wellnessHero: "/images/pallov-dvor/wellness-hero-pallov-dvor.jpg",
  wellnessPackage: "/images/pallov-dvor/wellness-sauna-kada.jpg",
  pricingHero: "/images/pallov-dvor/cennik-pallov-dvor-hero.jpg",
  contactHero: "/images/pallov-dvor/kontakt-hero-pallov-dvor.jpg",
  contactExterior: "/images/pallov-dvor/kontakt-exterier-pallov-dvor.jpg",
  attractionsHero: "/images/attractions/vratna-dolina.jpg",
};

export const galleryImages = [
  {
    src: images.livingKitchen,
    alt: "Obývacia miestnosť s kuchyňou v Pallovom Dvore",
    title: "Obývačka s kuchyňou",
    group: "Interiér",
  },
  {
    src: images.dining,
    alt: "Jedálenský priestor v Pallovom Dvore",
    title: "Jedálenský priestor",
    group: "Interiér",
  },
  {
    src: images.social,
    alt: "Spoločenský priestor v Pallovom Dvore",
    title: "Spoločenský priestor",
    group: "Spoločné priestory",
  },
  {
    src: images.projector,
    alt: "Spoločenský priestor s projektorom",
    title: "Priestor s projektorom",
    group: "Spoločné priestory",
  },
  {
    src: "/images/pallov-dvor/izba-1-pallov-dvor-1.jpg",
    alt: "Spálňa s dvojlôžkom a jednolôžkom",
    title: "Spálňa s dvojlôžkom",
    group: "Izby",
  },
  {
    src: "/images/pallov-dvor/izba-1-pallov-dvor-2.jpg",
    alt: "Detail spálne s dvojlôžkom a jednolôžkom",
    title: "Detail prvej spálne",
    group: "Izby",
  },
  {
    src: "/images/pallov-dvor/izba-2-pallov-dvor-1.jpg",
    alt: "Spálňa s dvoma jednolôžkami",
    title: "Spálňa s jednolôžkami",
    group: "Izby",
  },
  {
    src: "/images/pallov-dvor/izba-3-pallov-dvor-1.jpg",
    alt: "Druhá spálňa s dvojlôžkom a jednolôžkom",
    title: "Druhá spálňa",
    group: "Izby",
  },
  {
    src: images.bathroomGround,
    alt: "Kúpeľňa na prízemí v Pallovom Dvore",
    title: "Kúpeľňa prízemie",
    group: "Kúpeľne",
  },
  {
    src: images.bathroomUpper,
    alt: "Kúpeľňa na poschodí v Pallovom Dvore",
    title: "Kúpeľňa poschodie",
    group: "Kúpeľne",
  },
  {
    src: images.gazebo,
    alt: "Altánok pri chate Pallov Dvor",
    title: "Altánok",
    group: "Exteriér",
  },
  {
    src: images.gazeboEvening,
    alt: "Večerný altánok pri chate Pallov Dvor",
    title: "Altánok večer",
    group: "Exteriér",
  },
  {
    src: images.grill,
    alt: "Gril v exteriéri Pallovho Dvora",
    title: "Gril",
    group: "Exteriér",
  },
  {
    src: images.saunaTub,
    alt: "Sauna a vonkajšia kaďa pri chate Pallov Dvor",
    title: "Sauna a kaďa",
    group: "Wellness",
  },
  {
    src: images.tub,
    alt: "Vonkajšia kaďa pri chate Pallov Dvor",
    title: "Vonkajšia kaďa",
    group: "Wellness",
  },
  {
    src: images.exterior,
    alt: "Exteriér chaty Pallov Dvor",
    title: "Exteriér chaty",
    group: "Objekt",
  },
];

type SitemapPage = {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  images: string[];
};

export const sitemapPages = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    images: [images.hero],
  },
  {
    path: "/o-nas",
    changeFrequency: "monthly",
    priority: 0.75,
    images: [images.aboutExterior, images.aboutInterior],
  },
  {
    path: "/ubytovanie",
    changeFrequency: "weekly",
    priority: 0.95,
    images: [images.interior, images.livingKitchen, images.wholeObject],
  },
  {
    path: "/fotogaleria",
    changeFrequency: "monthly",
    priority: 0.8,
    images: galleryImages.map((image) => image.src),
  },
  {
    path: "/cennik",
    changeFrequency: "weekly",
    priority: 0.9,
    images: [images.pricingHero, images.wholeObject, images.wellnessPackage],
  },
  {
    path: "/atrakcie",
    changeFrequency: "monthly",
    priority: 0.7,
    images: [images.attractionsHero],
  },
  {
    path: "/wellness",
    changeFrequency: "monthly",
    priority: 0.85,
    images: [images.wellnessHero, images.saunaTub, images.tub],
  },
  {
    path: "/kontakt",
    changeFrequency: "monthly",
    priority: 0.85,
    images: [images.contactHero, images.contactExterior],
  },
] satisfies SitemapPage[];

export const quickFacts = [
  {
    icon: "users",
    value: "až 16 osôb",
    label: "kapacita objektu",
  },
  {
    icon: "units",
    value: "2 jednotky",
    label: "samostatné ubytovanie",
  },
  {
    icon: "wellness",
    value: "sauna a kaďa",
    label: "relax priamo pri chate",
  },
  {
    icon: "amenities",
    value: "altánok a gril",
    label: "plus Wi-Fi v objekte",
  },
  {
    icon: "map",
    value: contact.address,
    label: "chata v Lutišiach",
  },
  {
    icon: "euro",
    value: "od 159 € / noc",
    label: "za 1 samostatnú jednotku",
  },
] as const;

export const coreEquipment = [
  "2 samostatné ubytovacie jednotky",
  "kapacita až 16 osôb",
  "3 spálne v každej jednotke",
  "2 kúpeľne so sprchami v každej jednotke",
  "kuchyňa spojená s obývacou miestnosťou",
  "jedálenský stôl",
  "TV",
  "Wi-Fi",
  "spoločenský priestor s plátnom a projektorom",
  "altánok",
  "letná kuchynka bez varnej dosky",
  "gril",
  "sauna pre 6 osôb",
  "vonkajšia kaďa",
  "oplotený objekt",
  "4 parkovacie miesta",
];

export const homeBenefits = [
  {
    title: "Súkromie a pohodlie",
    text: "Oplotený objekt, samostatné jednotky a dostatok priestoru vytvárajú vhodné podmienky na pokojný pobyt v chate v Lutišiach.",
  },
  {
    title: "Relax priamo pri chate",
    text: "Sauna pre 6 osôb a vonkajšia kaďa ponúkajú príjemný oddych po výletoch na Kysuciach, pracovnom programe alebo spoločnom dni.",
  },
  {
    title: "Priestor na spoločné chvíle",
    text: "Altánok s grilom a spoločenský priestor s projektorom vytvárajú miesto na rodinné, priateľské aj firemné stretnutia.",
  },
];

export const values = [
  {
    title: "Pokoj",
    text: "Pobyt v kultivovanom prostredí, bez zhonu a zbytočného ruchu.",
  },
  {
    title: "Súkromie",
    text: "Oplotený objekt a dve samostatné jednotky poskytujú hosťom vlastný priestor.",
  },
  {
    title: "Komfort",
    text: "Praktické vybavenie, kuchyňa, Wi-Fi, spoločenský priestor a oddychová zóna.",
  },
  {
    title: "Spoločné chvíle",
    text: "Miesto na rozhovory, oddych, rodinný čas aj menšie firemné stretnutia.",
  },
];

export const capacityCards = [
  {
    title: "1 samostatná jednotka",
    text: "maximálne 8 osôb",
  },
  {
    title: "Celý objekt",
    text: "maximálne 16 osôb",
  },
  {
    title: "2 samostatné jednotky",
    text: "viac súkromia a flexibility",
  },
  {
    title: "Krátkodobé pobyty",
    text: "vhodné pre rodiny, dospelých hostí a firemné pobyty",
  },
];

export const unitLayout = [
  "3 spálne",
  "2 kúpeľne so sprchami",
  "kuchyňa spojená s obývacou miestnosťou",
  "jedálenský stôl",
  "TV",
  "Wi-Fi",
];

export const rooms = [
  {
    title: "Spálňa s dvojlôžkom a jednolôžkom",
    description:
      "Priestranná spálňa vhodná pre pár, rodičov s dieťaťom alebo hostí, ktorí ocenia kombináciu dvojlôžka a samostatného lôžka.",
    beds: "1 dvojlôžko, 1 jednolôžko",
    images: [
      "/images/pallov-dvor/izba-1-pallov-dvor-1.jpg",
      "/images/pallov-dvor/izba-1-pallov-dvor-2.jpg",
      "/images/pallov-dvor/izba-1-pallov-dvor-3.jpg",
    ],
  },
  {
    title: "Spálňa s dvoma jednolôžkami",
    description:
      "Praktická izba s dvoma samostatnými lôžkami, vhodná pre deti, dospelých hostí alebo kolegov počas firemného pobytu.",
    beds: "2 jednolôžka",
    images: [
      "/images/pallov-dvor/izba-2-pallov-dvor-1.jpg",
      "/images/pallov-dvor/izba-2-pallov-dvor-2.jpg",
      "/images/pallov-dvor/izba-2-pallov-dvor-3.jpg",
    ],
  },
  {
    title: "Druhá spálňa s dvojlôžkom a jednolôžkom",
    description:
      "Útulná spálňa vhodná pre pár, menšiu rodinu alebo hostí, ktorí chcú mať pohodlný priestor na oddych.",
    beds: "1 dvojlôžko, 1 jednolôžko",
    images: [
      "/images/pallov-dvor/izba-3-pallov-dvor-1.jpg",
      "/images/pallov-dvor/izba-3-pallov-dvor-2.jpg",
      "/images/pallov-dvor/izba-3-pallov-dvor-3.jpg",
    ],
  },
];

export const priceCards = [
  {
    title: "1 samostatná jednotka",
    price: "od 159 € / noc",
    text: "Vhodné pre rodiny, páry, dospelých hostí alebo menšie skupiny.",
  },
  {
    title: "Celý objekt",
    price: "od 319 € / noc",
    text: "Vhodné pre väčšie rodiny, skupiny dospelých hostí alebo menšie firemné kolektívy s kapacitou až 16 osôb.",
  },
];

export const unitPriceRows = [
  ["Mimo sezóny (1. 9. – 30. 6.)", "159 € / noc", "189 € / noc"],
  ["Sezóna (1. 7. – 31. 8.)", "189 € / noc", "219 € / noc"],
];

export const wholeObjectPriceRows = [
  ["Mimo sezóny (1. 9. – 30. 6.)", "319 € / noc", "379 € / noc"],
  ["Sezóna (1. 7. – 31. 8.)", "379 € / noc", "439 € / noc"],
];

export const wellnessRows = [
  ["Kaďa", "30 € / deň"],
  ["Sauna", "25 € / deň"],
  ["Kaďa + sauna spolu", "45 € / deň"],
];

export const minimumStay = [
  "Mimo sezóny: minimálne 2 noci",
  "Leto, sviatky a prázdniny: minimálne 3 noci",
  "Sezóna: minimálne 3 noci",
  "Silvester: balík na 3 noci pre celý objekt",
];

export const priceNotes = [
  "Mimo sezóny trvá od 1. septembra do 30. júna.",
  "Sezóna trvá od 1. júla do 31. augusta.",
  "Ceny sa môžu líšiť podľa sezóny, termínu a dĺžky pobytu.",
  "Minimálna dĺžka pobytu mimo sezóny je 2 noci.",
  "Počas leta, sviatkov, prázdnin a Silvestra platí minimálna dĺžka pobytu spravidla 3 noci.",
  "Sauna a vonkajšia kaďa sú účtované ako príplatok, ak nie je uvedené inak.",
  "Za záverečné upratovanie sa účtuje poplatok 69 € za jednu ubytovaciu jednotku alebo 129 € za celý objekt.",
  "Pri nástupe sa vyberá vratná kaucia 200 € za pobyt. Po odubytovaní sa vracia v prípade, že na objekte nevznikli žiadne škody.",
  "Presná cena bude potvrdená pri overení dostupnosti termínu.",
  "Odoslanie dopytu je nezáväzné.",
];

export const wellnessCards = [
  {
    title: "Sauna pre 6 osôb",
    text: "Sauna je ideálnym miestom na uvoľnenie tela a mysle. Počas pobytu ju môžu hostia využiť na večerný oddych, regeneráciu po aktívnom dni alebo ako príjemnú súčasť spoločného programu.",
    image: images.sauna,
    alt: "Sauna v Pallovom Dvore",
  },
  {
    title: "Vonkajšia kaďa pod holým nebom",
    text: "Vonkajšia kaďa vytvára príjemný priestor na oddych v exteriéri. Je vhodná na pokojné večery, relax po turistike alebo chvíle, keď si chcete vychutnať teplo vody a atmosféru súkromného pobytu.",
    image: images.tub,
    alt: "Vonkajšia kaďa pri chate Pallov Dvor",
  },
];

export const wellnessAudience = [
  {
    title: "Rodiny",
    text: "Po dni plnom výletov a spoločných aktivít si môžu dopriať pokojný večer v súkromí chaty.",
  },
  {
    title: "Páry a dospelí hostia",
    text: "Sauna a vonkajšia kaďa vytvárajú príjemné prostredie na spomalenie a oddych.",
  },
  {
    title: "Firemné kolektívy",
    text: "Po pracovnom programe alebo teambuildingu ponúka oddychová zóna možnosť neformálneho uvoľnenia a spoločného času.",
  },
];

export const attractionTypes = [
  {
    title: "Prechádzky a príroda",
    text: "Pokojné prechádzky v okolí sú vhodné pre hostí, ktorí si chcú oddýchnuť od každodenného tempa a stráviť čas vonku.",
  },
  {
    title: "Turistika a výlety",
    text: "Okolie ponúka možnosti na kratšie aj dlhšie výlety. Po aktívnom dni sa môžete vrátiť späť do pohodlia chaty.",
  },
  {
    title: "Rodinný program",
    text: "Rodiny s deťmi ocenia nenáročné aktivity, výlety a prechádzky, ktoré môžu doplniť pohodový pobyt v súkromí chaty.",
  },
  {
    title: "Spoločný program pre skupiny",
    text: "Dospelí hostia a firemné kolektívy môžu pobyt doplniť o spoločné aktivity, výlety alebo pokojný teambuildingový program.",
  },
];

export const attractions = [
  {
    title: "Vrátna dolina / Malá Fatra",
    description:
      "Výrazná horská dolina pri Terchovej, vhodná na turistiku, výhľady, prechádzky a zimné aktivity.",
    distance: "cca 30-40 min autom",
    category: "Príroda, turistika, hory",
    suitableFor:
      "Páry, dospelí hostia, rodiny so staršími deťmi, firemné kolektívy",
    image: "/images/attractions/vratna-dolina.jpg",
    url: "https://slovakia.travel/en/vratna-valley-mala-fatra-mts",
    credit: "Foto: Juloml, CC BY-SA 3.0 / GFDL",
  },
  {
    title: "Jánošíkove diery",
    description:
      "Sústava tiesňav a kaňonov v Krivánskej Malej Fatre s lávkami, rebríkmi, reťazami a vodopádmi.",
    distance: "cca 25-35 min autom",
    category: "Príroda, turistika, rodinný výlet",
    suitableFor: "Rodiny, páry, aktívni hostia",
    image: "/images/attractions/janosikove-diery.jpg",
    url: "https://www.terchova.sk/en/navstevnik/turisticke-trasy/janosikove-diery",
    credit: "Foto: Sylwia Botev / Fundacja Nomos, CC BY 3.0 PL",
  },
  {
    title: "Terchová",
    description:
      "Obec pod Malou Fatrou spojená s folklórom a výletmi do okolia. Vhodná ako jednoduchý cieľ na kratší výlet.",
    distance: "cca 20-30 min autom",
    category: "Kultúra, obec, výlety",
    suitableFor: "Rodiny, páry, dospelí hostia",
    image: "/images/attractions/vratna-dolina.jpg",
    url: "https://www.terchova.sk/",
    credit: "Foto: Juloml, CC BY-SA 3.0 / GFDL",
  },
  {
    title: "Veľká Rača / Oščadnica",
    description:
      "Oblasť Kysúc vhodná na turistiku, cyklovýlety, zimné aktivity a rodinný program v horskom prostredí.",
    distance: "cca 45-60 min autom",
    category: "Hory, turistika, rodinné aktivity, zima",
    suitableFor: "Rodiny, aktívni hostia, firemné kolektívy",
    image: "/images/attractions/velka-raca.jpg",
    url: "https://slovakia.travel/en/snowparadise-velka-raca",
    credit: "Foto: Michal Jakubský, CC BY 3.0",
  },
  {
    title: "Slovenský orloj v Starej Bystrici",
    description:
      "Drevený orloj a výrazná dominanta námestia v Starej Bystrici. Pokojný kultúrny tip na kratší výlet.",
    distance: "cca 25-35 min autom",
    category: "Kultúra, technická zaujímavosť, rodinný výlet",
    suitableFor: "Rodiny, páry, dospelí hostia",
    image: "/images/attractions/slovensky-orloj-stara-bystrica.jpg",
    url: "https://slovakia.travel/en/things-to-see-and-do/lets-explore-slovakia-online/slovak-horologe-in-stara-bystrica",
    credit: "Foto: Fry72, Karel Frydrýšek, CC BY-SA 4.0",
  },
  {
    title: "Vychylovka / Múzeum kysuckej dediny",
    description:
      "Skanzen s ľudovou architektúrou a historickou lesnou úvraťovou železnicou.",
    distance: "cca 45-60 min autom",
    category: "Kultúra, história, rodina, technická pamiatka",
    suitableFor: "Rodiny, dospelí hostia, menšie skupiny",
    image: "/images/attractions/vychylovka-lesna-zeleznica.jpg",
    url: "https://slovakia.travel/lesna-zeleznica-vychylovka",
    credit: "Foto: Nils Öberg, CC BY-SA 3.0 / GFDL",
  },
  {
    title: "Hrad Strečno",
    description:
      "Hrad na brale nad riekou Váh s výhľadmi na Strečniansky priesmyk a okolie Malej Fatry.",
    distance: "cca 40-50 min autom",
    category: "História, výhľad, kultúra",
    suitableFor: "Rodiny, páry, dospelí hostia",
    image: "/images/attractions/hrad-strecno.jpg",
    url: "https://slovakia.travel/hrad-strecno",
    credit: "Foto: Pudelek, Marcin Szala, CC BY-SA 3.0",
  },
];

export const stayIdeas = [
  {
    title: "Rodinný víkend v súkromí",
    text: "Pokojný pobyt pre rodiny, ktoré chcú stráviť spoločný čas v chate s praktickým vybavením, oploteným objektom a možnosťou výletov v okolí.",
  },
  {
    title: "Oddych po aktívnom dni",
    text: "Pobyt pre hostí, ktorí chcú spojiť prechádzky, turistiku alebo výlety s večerným relaxom v saune a vonkajšej kadi.",
  },
  {
    title: "Firemný pobyt s oddychom",
    text: "Pobyt pre menšie firemné kolektívy, ktoré hľadajú priestor na pracovné stretnutie, spoločný program a pokojný relax.",
  },
  {
    title: "Pokojný víkend pre dospelých hostí",
    text: "Pobyt pre páry alebo menšie skupiny dospelých, ktoré hľadajú súkromie, rozhovory a oddych.",
  },
];

export const rentalTypeOptions = [
  "1 samostatná ubytovacia jednotka",
  "Celý objekt",
  "Ešte neviem",
];

export const stayTypeOptions = [
  "Rodinný pobyt",
  "Pobyt pre dospelých hostí",
  "Firemný pobyt / teambuilding",
  "Iný typ pobytu",
];

export function pageMetadata({
  title,
  description,
  path,
  image = images.hero,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "sk_SK",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${site.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.url,
      name: site.name,
      alternateName: ["Pallov Dvor Lutiše", "Chata Lutiše", site.subtitle],
      description: site.description,
      inLanguage: "sk-SK",
      publisher: {
        "@id": absoluteUrl("/#pallov-dvor"),
      },
    },
    {
      "@type": "LodgingBusiness",
      "@id": absoluteUrl("/#pallov-dvor"),
      name: site.name,
      alternateName: [
        site.subtitle,
        "Chata Lutiše",
        "Chata na prenájom Lutiše",
        "Ubytovanie Lutiše",
      ],
      url: site.url,
      description:
        "Chata na prenájom v Lutišiach s krátkodobým ubytovaním pre rodiny, skupiny dospelých hostí a menšie firemné stretnutia.",
      slogan: "Chata Lutiše na prenájom s kapacitou až 16 osôb.",
      image: [
        absoluteUrl(images.hero),
        absoluteUrl(images.exterior),
        absoluteUrl(images.interior),
        absoluteUrl(images.saunaTub),
      ],
      logo: absoluteUrl(site.brandLogo),
      telephone: "+421904955600",
      email: contact.email,
      priceRange: "od 159 EUR / noc",
      areaServed: [
        {
          "@type": "Place",
          name: "Lutiše",
        },
        {
          "@type": "Place",
          name: "Kysuce",
        },
        {
          "@type": "Place",
          name: "Terchová",
        },
        {
          "@type": "Place",
          name: "Žilina a okolie",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: "Lutiše",
        addressCountry: "SK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+421904955600",
        email: contact.email,
        contactType: "reservations",
        availableLanguage: ["sk"],
      },
      amenityFeature: [
        "Kapacita až 16 osôb",
        "2 samostatné ubytovacie jednotky",
        "Wi-Fi",
        "Sauna pre 6 osôb",
        "Vonkajšia kaďa",
        "Altánok a gril",
        "4 parkovacie miesta",
      ].map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
    },
  ],
} as const;

export const metadataBase = new URL(siteUrl);
