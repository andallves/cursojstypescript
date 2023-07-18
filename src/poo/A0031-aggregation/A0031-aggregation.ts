/*
  Agregação -> Um tipo de relação onde um objeto agrega outro para funcionar corretamente.
*/

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.price, 0);
  }
}

export class Produto {
  constructor(public name: string, public price: number) {}
}

const produto1 = new Produto('Camiseta', 50);
const produto2 = new Produto('Bermuda', 78.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2);
console.log(carrinhoDeCompras.valorTotal());
