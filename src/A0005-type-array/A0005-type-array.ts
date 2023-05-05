// Array<T> - T[]
export function multiplierArgs(...args: Array<number>): number {
  return args.reduce((multiply, value) => multiply * value, 1);
}

export function concatenateString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplierArgs(2, 4, 6);
const concatenation = concatenateString('a', 'b', 'c');
const upper = toUpperCase('andre alves');

console.log(result);
console.log(concatenation);
console.log(upper);

// readonly
const array: readonly string[] = ['Luiz', 'Otávio'];
const array1: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array);
console.log(array1);
