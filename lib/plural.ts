// Slovak plural forms: 1 noc, 2–4 noci, 5 a viac nocí.
export function plural(count: number, one: string, few: string, many: string) {
  return `${count} ${count === 1 ? one : count >= 2 && count <= 4 ? few : many}`;
}
