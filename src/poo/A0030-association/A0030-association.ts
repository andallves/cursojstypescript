/*
  Ligação entre objetos
- Herança é um tipo de relação 'é um/is a'
- Associação é uma relação fraca do tipo 'tem um', podemos ligar diferente objetos
sem que um dependa do outro.
*/

export class Escritor {
  private _ferramenta: Ferramenta | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    return this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _name: string) {}
  abstract escrever(): void;

  get name(): string {
    return this._name;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const escritor = new Escritor('Andre');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Datilografo');

// console.log(escritor.name);
// console.log(caneta.name);
// console.log(maquinaEscrever.name);
escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
