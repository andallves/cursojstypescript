export class Person {
  constructor(
    private _name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {}

  get name(): string {
    return this.name;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, ''); // usando expressões regulares vou
    // substituir todos os caracteres que que não forem número por '', ou seja,
    // vou retornar somentes os números.
  }

  get fullname(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Andre', 'Pereira', 23, '145.553.745-00');
person.cpf = '875.459.321-89'; // ao usar o sinal de igual '=' estou chamando o setter.
console.log(person.cpf); // ao chamar o atributo, estou chamando o getter
