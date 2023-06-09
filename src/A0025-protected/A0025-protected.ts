/*
  PROTECTED -> encapsula similamente ao private com a diferença que no private
  só pode ser acessado dentro da classe em que foi criado e no protected a
  propriedade pode ser acessada dentro da classe e também pelas subclasses.
*/

export class Empresa {
  // por default o atributo é publico.
  readonly name: string; // o public é redundante
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '00.000.000/000-01');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Andre', 'Alves');
const colaborador2 = new Colaborador('Brena', 'Alves');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);

const removedColaborador = empresa1.popColaborador();
empresa1.mostrarColaborador();
console.log(removedColaborador);
