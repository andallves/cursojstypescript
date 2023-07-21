// RESTRICTIONS
// -> Inside generics the word 'extends' represent a restriction
// -> People called it by 'constraints

// I'm saying to typescript that K is at most one key of O = 'K extends keyof O'
type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
  color: 'Orange',
  vaccines: ['Vaccine 1', 'Vaccine 2'],
};

const vaccines = getKey(animal, 'vaccines');
const colors = getKey(animal, 'color');
console.log(vaccines, colors);
