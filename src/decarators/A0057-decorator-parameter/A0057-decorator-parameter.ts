// Parameter decorator -> It's work for see what's the parameters.
// If we return something that it will be ommited, because we can only see and it don't make anything.

function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  // To decorate the parameter, it's necessary take it before the parameter.
  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullname(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullname(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new OnePerson('Andre', 'Pereira', 23);
const method = person.method('Hello world!');
console.log(method);
