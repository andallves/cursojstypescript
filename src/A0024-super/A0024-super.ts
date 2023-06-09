/*
  A classe principal que é extendida também é chamada de super classe.

  SUPER ->
*/
export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}

// utilizo super para executar um método da superclasse

// quando criamos um constructor em uma subclasse para que ele não sobreescreva
// o constructor da superclasse, então é preciso chamá-lo.
export class Student extends Person {

  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public status: boolean,
  ) {
    super(name, lastname, age, cpf);
  }

  getFullname(): string {
    console.log('Do something before');
    const result = super.getFullname();
    return result + ' alterado!';
  }
}
export class Client extends Person {
  getFullname(): string {
    return `This come from client ${this.name} ${this.lastname}`;
  }
}

const person = new Person('Cley', 'Nascimento', 29, '652.048.773-35');
const student = new Student('Andre', 'Alves', 23, '067.865.123-79', true);
const client = new Client('Celsa', 'Maria', 61, '326.865.345-19');

console.log(person.getFullname());
console.log(student.getFullname());
console.log(client.getFullname());
console.log(student);
