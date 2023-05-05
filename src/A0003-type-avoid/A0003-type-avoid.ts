// O tipo void significa que não retorna nada
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Andre', 'Alves', 'Pereira');

const person = {
  name: 'Andre',
  lastname: 'Pereira',

  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

person.showName();

export { person };
