// type-alias --> basicamente criar um apelido para o tipo

type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  preferColor?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type PreferColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Lucas',
  age: 17,
  salary: 200_000, // 200 mil --> typeScript entende assim
};

export function setPreferColor(person: Person, color: PreferColor): Person {
  return { ...person, preferColor: color };
}

console.log(setPreferColor(person, 'Blue'));
console.log(person);
