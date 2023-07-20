// type ObjColors = {
//   red: string;
//   green: string;
//   blue: string;
// }; -> We can deleting this type;

type ObjColors = typeof objColors;
// This works like the first object type.
type KeysColors = keyof ObjColors; // I'm taking only key of the object;

const objColors = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
};

function translateColor(
  color: KeysColors,
  colors: ObjColors,
  // colors: typeof objColors,
  // This 'typeof' isn't from javascript, it's from typescript it's because is
  // like a type.
) {
  return colors[color];
}

console.log(translateColor('red', objColors));
