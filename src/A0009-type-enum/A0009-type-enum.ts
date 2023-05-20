enum Cores {
  VERMELHO, //0
  AZUL, // 1
  AMARELO = 300, // 300, se eu quiser atribuir um valor difernte, é possível
  ROXO = 'ROXO',
  VERDE = 200,
  CINZA, // 201
}
// Também podemos mergir dois em enums

enum Cores {
  LARANJA = 'LARANJA',
}

function chooseAColor(cor: Cores): void {
  console.log(Cores[cor]);
}

chooseAColor(Cores.LARANJA);
