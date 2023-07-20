type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca']; // Here I'm taking what's inside in the key from Veiculo.
  year: Veiculo['ano'];
  // This ways always the keys changing in one, it's will change in another too.
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '2022',
  name: 'Ford Ka',
};

console.log(carro);
