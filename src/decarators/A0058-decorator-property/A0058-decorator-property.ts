function decorator(classPrototype: any, nameProperty: string | symbol): any {
  let propertyValue: any;
  return {
    // Here I can to change property description (writable, enumerable, configurable...)
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.toUpperCase();
        return;
      }
      propertyValue = value;
    },
  };
}

export class OnePerson {
  // I insert the decorator here, before the property that I want to decorate.
  @decorator
  name: string;
  @decorator
  lastname: string;
  @decorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  // To decorate the parameter, it's necessary take it before the parameter.
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
