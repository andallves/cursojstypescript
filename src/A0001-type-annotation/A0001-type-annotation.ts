/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Andre'; // Qualquer tipo de string '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numbersArray: Array<number> = [1, 2, 3, 5];
let numbersArray2: number[] = [1, 2, 3, 5];
let stringsArray: Array<string> = ['a', 'b', 'c'];
let stringsArray2: string[] = ['a', 'b', 'c'];

// Objects
let person: { name: string, age: number, adult?: boolean } = {
  name: 'Andre',
  age: 23,
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
