// No tipo apenas definimos os tipos
// Quando queremos usar modificadores de acesso, é melhor usar as classes abstratas
// Aqui podemos implementar quantas tipos nos queremos, na classes abstratas apenas um
type PersonType = {
  name: string;
  lastName: string;
  completeName(): string;
};

type NameType = {
  name: string;
};

type CompleteNameType = {
  completeName(): string;
};

type LastNameType = {
  lastName: string;
};

export class Person1 implements PersonType {
  // implements é quando usamos type alias
  constructor(public name: string, public lastName: string) {}

  public completeName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Person2 implements NameType, LastNameType, CompleteNameType {
  constructor(public name: string, public lastName: string) {}

  public completeName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person1 = new Person1('Lucas', 'Trindade');
const person2 = new Person2('Lucas', 'Trindade');
console.log(person1.completeName());
console.log(person2.completeName());
