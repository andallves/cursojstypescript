export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Luiz', 23);
funcao.apply(new Date(), ['Luiz', 23]);
