// typeof && keyof
type ColorObj = typeof colorObj; // o tipo inferido dentro de colorObj foi transferido para ca
type KeyColor = keyof ColorObj;

const colorObj = {
  red: 'Vermelho',
  blue: 'Azul',
  green: 'Verde',
  purple: 'Roxo',
};

function translateColor(color: KeyColor, colors: ColorObj) {
  return colors[color];
}
console.log(translateColor('blue', colorObj));
console.log(translateColor('red', colorObj));
console.log(translateColor('green', colorObj));
