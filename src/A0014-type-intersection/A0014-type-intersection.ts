// INTERSECTION TYPE
// & - AND

type TemNome = { name: string };
type TemSobrenome = { lastname: string };
type TemIdade = { age: number };
type Person = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

const a: Intersection = 'A';
console.log(a);

const person: Person = {
  name: 'Andre',
  lastname: 'Alves',
  age: 23,
};

// Module mode
export { person };
