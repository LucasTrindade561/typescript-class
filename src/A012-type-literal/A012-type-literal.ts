// tipos literais --> usar valores como tipos

let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10; // tipo literal, pois ele é constante a 10
const a = 100;

const person = {
  name: 'Lucas' as const, // agora o valor do name sera Lucas
  lastName: 'Trindade',
};

function chooseColor1(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

// person.name = 'Lucas1';

console.log(chooseColor1('Red'));
console.log(person);
console.log(x + y + a);

// module mode
export default 1;
