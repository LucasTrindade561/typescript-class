// Declaration Merging
interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const p1: Person = {
  name: 'Lucas',
  lastName: 'Trindade',
  address: ['Av. Bento'],
  age: 17,
};

console.log(p1);
