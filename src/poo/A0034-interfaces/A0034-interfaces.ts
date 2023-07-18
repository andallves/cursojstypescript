/*
  Interfaces -> Tanto interface quanto type são em 99% das vezes a mesma coisa,
  servem para criar tipos ou contratos para que classes ou objetos implementem aqui.

  -> Interface está diretamente relacionado a objeto / programação orientada a objetos
*/

interface TipoName {
  name: string;
}

interface TipoLastname {
  lastname: string;
}

interface TipoFullname {
  fullname(): string;
}

type TipoPessoa = TipoName & TipoLastname & TipoFullname; // usando o union para fazer um intersection dos tipos
interface TipoPessoa2 extends TipoName, TipoLastname, TipoFullname {}

export class Pessoa implements TipoPessoa2 {
  constructor(public name: string, public lastname: string) {}

  fullname(): string {
    return this.name + ' ' + this.lastname;
  }
}

const pessoa = new Pessoa('Andre', 'Alves');
console.log(pessoa.fullname());

const pessoaObj: TipoPessoa = {
  name: 'Andre',
  lastname: 'Pereira',
  fullname() {
    return this.name + ' ' + this.lastname;
  },
};
console.log(pessoaObj);
