// metodos statics --> metodos que podem ser acessado sem instanciar a classe
export class Person {
  static patternAge = 0;
  static patternCpf = '000.000.000-00';

  constructor(
    public _name: string,
    public _lastName: string,
    public _age: number,
    public _cpf: string, // atributo que sustenta o valor (que não é o getter nem o setter)
  ) {}

  normalMethod(): void {
    console.log(Person.patternAge, Person.patternCpf); // nao conseguimos usar o this com metodos ou atributos estaticos, portanto temos que fazer isso
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.patternAge, Person.patternCpf);
  }
}
const person1 = new Person('Lucas', 'Trindade', 17, '123.456.789-11');
const person2 = Person.createPerson('Sarah', 'Trindade');
person1._cpf = '123.456.789-11'; // chama o setter com o sinal de =
console.log(person2);
console.log(person1);
person1.normalMethod();
console.log(Person.patternCpf, Person.patternCpf);
