// Interfaces --> identicos a type alias --> ambos sao para criar tipos ou contratos
// Interfaces x Types --> Interface geralmente usamos interfaces para modular objetos, porem
// com o types temos menos restricoes, ou seja, conseguimos fazer qualquer coisa
interface NameType {
  name: string;
}

interface CompleteNameType {
  completeName(): string;
}

interface LastNameType {
  lastName: string;
}

type PersonType = NameType & LastNameType & CompleteNameType;
interface PersonType2 extends NameType, LastNameType, CompleteNameType {}

export class Person2 implements PersonType2 {
  constructor(public name: string, public lastName: string) {}

  public completeName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const personObj: PersonType2 = {
  name: 'Lucas',
  lastName: 'Trindade Obj',
  completeName() {
    return this.name + ' ' + this.lastName;
  },
};

const person2 = new Person2('Lucas', 'Trindade');

console.log(person2.completeName());
console.log(personObj.completeName());
