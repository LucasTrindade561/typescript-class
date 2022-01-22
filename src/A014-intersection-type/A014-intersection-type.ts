// Intersection Type --> AND --> && --> interseção de dois tipos
type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;

const person: Person = {
  age: 17,
  name: 'Lucas',
  lastName: 'Trindade',
};

console.log(person);

// Module mode
export { person };
