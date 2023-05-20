// LITERAL TYPE
export default 1;

let x = 10; // eslint-disable-line
// x = 0b01010;
// const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Andre' as const,
  lastname: 'Alves',
};
console.log(person);

function chooseColor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(chooseColor('Amarelo'));
