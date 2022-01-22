// type guard --> refinando o tipo, ou seja, deixando ele mais seguro para não ocorrer erro
export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} + ${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOurAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

export class Dog implements Animal {
  type: 'animal' = 'animal';
  constructor(public color: string) {}
}

function showName(obj: PersonOurAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log('This is a animal', obj.color);
      return;
  }
}

function showColor(obj: PersonOurAnimal): void {
  if ('color' in obj) console.log(obj.color);
}

showName(new Student('Tetas'));
showName({ type: 'animal', color: 'Yellow' });
showColor(new Dog('Black'));
