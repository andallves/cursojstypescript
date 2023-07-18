// A class abstrata é um contrato, ela serve apenas como molde para subclasses,
// mas não pode ser instânciada diretamentente.
// Os metodos abstratos só podem está dentro de class abstrata.
// Quando usado a palavra abstract todas as subclasses que herdam da superclass são obrigadas a implementar esse metodo.

export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.name} perdeu ${forcaAtaque} de vida - resta ${this.vida}`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(this.emoji + ' Super guerreira em ataque...');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(this.emoji + ' Monstro gosta de dar uma surraaaaaa');
  }
}

const guerreira = new Guerreira('Guerreira', 80, 1000);
const monstro = new Monstro('Monstro', 50, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
