interface PersonProtocol<T, U> {
  name: T;
  lastName: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U;
};

const student: PersonProtocol<string, number> = {
  name: 'Lucas',
  lastName: 'Trindade',
  age: 17,
};

const student1: PersonProtocol<number, number> = {
  name: 1213,
  lastName: 4124,
  age: 17,
};

const student2: PersonProtocol2 = {
  name: 'exepmlo',
  lastName: 'explo',
  age: 17,
};

console.log(student);
console.log(student1);
console.log(student2);
