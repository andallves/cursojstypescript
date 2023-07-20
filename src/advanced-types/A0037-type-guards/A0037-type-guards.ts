/**
 * TYPE GUARDS
 * -> This function it's a kind of TYPE GUARDS because it do a sum when the params
 *  were numbers and it do concatenation when the params were a string.
 * -> Let's the code more safy.
 */

export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(4, 8));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal) {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name); // This is a type guard as well.
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;

    case 'animal':
      console.log(obj.color);
      return;
  }
}

showName(new Student('Andre'));
showName({ type: 'animal', color: 'Pink' });

// All of theses checks are to refinery the type and they are called TYPE GUARDS
// when it's done a type verifications.
