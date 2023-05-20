// UNION TYPES
// string | number | boolean;

export function sum(a: number, b: number): number {
  return a + b;
}

// Sem essa verificação dar erro, pois a operação só será feita se os dois tiverem o mesmo tipo, caso contrário não.
export function sumOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}
console.log(sum(10, 22));
console.log(sumOrConcat(10, 20));
console.log(sumOrConcat('10', '20'));
console.log(sumOrConcat('10', 20));
console.log(sumOrConcat(10, '20'));
console.log(sumOrConcat(true, true));
