/*
PUBLIC -> indica que é acessível dentro da classe, fora da classe e em todas as
subclasses (por herança) e não é necessário colocar já que é public por defalt.

PRIVATE -> é mais restrito do que o public, o atributo ou método que contém o
private só é acessível dentro da classe em que foi criado, usado para encapsulamento.

*/

export class Empresa {
  // por default o atributo é publico.
  readonly name: string; // o public é redundante
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  // quando criamos uma classe, também criamos um tipo
  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getName(): string {
    return this.name;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const empresa1 = new Empresa('Udemy', '000000/000-0');
const colaborador1 = new Colaborador('Andre', 'Alves');
const colaborador2 = new Colaborador('Brena', 'Alves');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.mostrarColaborador();
console.log(empresa1.getName(), empresa1.name);
