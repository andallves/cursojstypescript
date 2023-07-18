// Declaration merging -> as duas interfaces serão unidas
// para formar um objeto maior.

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
} // -> Caso não tenha readonly no array é possível adicionar elementos com o push.

interface Pessoa {
  readonly idade?: number; // Por ser um optional, pode ser declarada ou não.
  // Uma propiedade optional poder ser readonly, ou seja, se ela
  // existe não pode ser alterada.
}

// Todos que implementarem a interface Pessoa terá que declarar nome e sobrenome

const pessoa: Pessoa = {
  nome: 'Andre',
  sobrenome: 'Alves',
  enderecos: ['Av. Brasil'],
};

console.log(pessoa);
