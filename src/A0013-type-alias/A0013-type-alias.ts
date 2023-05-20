// TYPE ALIAS
// mode module

type Age = number;

type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type rgbColor = 'Vermelho' | 'Verde' | 'Azul';
type cmykColor = 'Ciano' | 'Margenta' | 'Amarelo' | 'Preto';
type favoriteColor = rgbColor | cmykColor;

const person: Person = {
  name: 'Andre',
  age: 23,
  salary: 3000,
};

export default function setFavoriteColor(person: Person, cor: favoriteColor): Person {
  return { ...person, favoriteColor: cor };
}

console.log(setFavoriteColor(person, 'Ciano'));
