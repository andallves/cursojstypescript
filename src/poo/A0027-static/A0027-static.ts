// Podemos criar atributo ou método estático -> um método que pode ser acessado sem instanciar a classe.

export class Person {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-91';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.defaultAge, Person.defaultCpf);
  }
}

const person1 = new Person('Andre', 'Pereira', 23, '145.553.745-00');
console.log(person1);

const person2 = Person.createPerson('Andre', 'Pereira');
console.log(person2);
