// Generic in the interface and type it's like a function, you assign a default
// value, but when you call this type you need to pass the value for them.

// We can assign a default value to generics
interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

// Interface and type works the same way.
type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  name: 'Andre',
  lastname: 'Pereira',
  age: 23,
};

const student2: PersonProtocol = {
  name: 'Andre',
  lastname: 'Alves',
  age: 23,
};

const student3: PersonProtocol2<number, number> = {
  name: 123,
  lastname: 456,
  age: 23,
};

console.log(student1, student2, student3);
