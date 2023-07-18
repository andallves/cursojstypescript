/*
  HERANÇA -> utilizada para o polifomorfismo (o mesmo método agir de formas
    diferentes) e para a reutilização de códgio.
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

// Podemos sobreescrever um método da classe principal dentro da subclassse,
// o que caracteriza o polimorfismo.
export class Student extends Person {
  getFullname(): string {
    return `This come from student ${this.name} ${this.lastname}`;
  }
}
export class Client extends Person {
  getFullname(): string {
    return `This come from client ${this.name} ${this.lastname}`;
  }
}

const person = new Person('Cley', 'Nascimento', 29, '652.048.773-35');
const student = new Student('Andre', 'Alves', 23, '067.865.123-79');
const client = new Client('Celsa', 'Maria', 61, '326.865.345-19');

console.log(person.getFullname());
console.log(student.getFullname());
console.log(client.getFullname());
