function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

// @decorador -> We using here if we want to decorate a class.
export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  @decorator // -> We using here if we want to decorate a method.
  method(msg: string): string {
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
