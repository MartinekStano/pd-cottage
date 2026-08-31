# Aktuálne udalosti v okolí

## Účel

Stránka dopĺňa stále tipy na výlety o časovo obmedzené podujatia, ktoré môžu hostia spojiť s pobytom v Pallovom Dvore. Aktuálna verzia pokrýva celý september 2026 a obsahuje výber kultúrnych, rodinných, gastronomických a športových udalostí v Čadci a Žiline.

Trasa:

- `/aktualne-udalosti`

Stránka je dostupná v podmenu položky `Atrakcie` a odkazuje späť na letné a zimné atrakcie.

## Obsah stránky

Hero:

- nadpis: `Aktuálne udalosti v okolí`,
- časové označenie: `September 2026`,
- CTA: `Overiť dostupnosť termínu` a `Pozrieť atrakcie`.

Kalendár obsahuje deväť chronologicky zoradených podujatí od 3. septembra do podujatia začínajúceho 30. septembra. Výber pokrýva hudbu a tanec, street food, rodinné divadlo, koncert, literatúru, festival svetla, šport, talkshow a architektúru.

Každá karta udalosti obsahuje:

```ts
{
  date: "3.",
  month: "SEP",
  dateTime: "2026-09-03T14:30:00+02:00",
  time: "14:30 – 20:30",
  title: "Názov podujatia",
  description: "Stručný overený opis programu.",
  location: "Miesto a mesto",
  category: "Kategória",
  url: "https://oficialny-zdroj.example",
  source: "Názov organizátora"
}
```

Dáta sú centralizované v `lib/events-data.ts` a karty vykresľuje `components/event-card.tsx`.

## Zdroje a údržba

Aktuálne zdroje:

- Žilinské kultúrne leto: https://kulturneleto.eu/podujatia/
- Dom kultúry v Čadci: https://www.kultura.mestocadca.sk/kulturne-podujatia.html
- TIK mesta Žilina: https://www.tikzilina.eu/
- Žilinský mestský polmaratón: https://polmaraton.zilina.run/

Ide o časovo citlivý obsah. Pred začiatkom nového mesiaca:

1. nahraď skončené udalosti novým overeným výberom,
2. skontroluj dátum, čas, miesto, cenu alebo registráciu a cieľový odkaz,
3. aktualizuj metadata, hero text, názov mesiaca a dátum posledného overenia,
4. zachovaj upozornenie, že organizátor môže program zmeniť,
5. spusti lint a produkčný build.

Nevymýšľaj chýbajúce termíny ani program. Ak organizátor údaje ešte nezverejnil, podujatie nezaraďuj alebo neistotu jasne pomenuj.
