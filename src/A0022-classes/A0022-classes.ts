export class Empresa {
  // por default o atributo é publico.
  public readonly name: string; // o public é redundante
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
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const empresa1 = new Empresa('Udemy', '000000/000-0');
const colaborador1 = new Colaborador('Andre', 'Alves');
const colaborador2 = new Colaborador('Brena', 'Alves');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
console.log(empresa1.mostrarColaborador());
