/*
  Implementando tipos
  -> Ao utilizar type não é possível usar protected ou private, ou seja, se for
  preciso usar esses encapsulamento é melhor usar abstract class
*/

// export abstract class TipoPessoa {
//   protected abstract name: string;
//   protected abstract lastname: string;
//   protected abstract fullname(): string;
// } -> transformando em type alias

type TipoNome = {
  name: string;
  lastname: string;
};

type TipoNomeCompleto = {
  fullname(): string; // or fullname: () => string;
}; // -> O tipo também funciona como um contrato, porém eu só defino o tipo e não algo relacionado ao corpo da class.

// Sempre que eu utilizar um tipo, ao invés de usar a palavra extends, uso implements.
export class Pessoa implements TipoNome, TipoNomeCompleto {
  // É possível implementar vários tipos.
  constructor(public name: string, public lastname: string) {}

  fullname(): string {
    return this.name + ' ' + this.lastname;
  }
}

const pessoa = new Pessoa('Andre', 'Pereira');
console.log(pessoa.fullname());

// Ou podemos implementa o tipo da seguinte forma:

// type TipoPessoa = TipoNome & TipoNomeCompleto; // usando o union para fazer um intersection dos tipos

// export class Pessoa implements TipoPessoa {
//   // É possível implementar vários tipos.
//   constructor(public name: string, public lastname: string) {}

//   fullname(): string {
//     return this.name + ' ' + this.lastname;
//   }
// }
