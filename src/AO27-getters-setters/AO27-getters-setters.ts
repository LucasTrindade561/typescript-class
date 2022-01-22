// getters and setters
// usado quando queremos fazer algo antes
export class Person {
  constructor(
    private _name: string,
    private lastName: string,
    private _age: number,
    private _cpf: string, // atributo que sustenta o valor (que não é o getter nem o setter)
  ) {
    this.cpf = _cpf; //chamando o setter aqui
  }

  set cpf(value: string) {
    console.log('Setter chamado');
    this._cpf = value;
  }

  get cpf(): string {
    console.log('getter chamado');
    return this._cpf.replace(/\D/g, '');
  }

  set age(value: number) {
    this._age = value;
  }

  get age(): number {
    return this._age;
  }

  set name(value: string) {
    this._name = value.toUpperCase();
  }

  get name(): string {
    return this._name;
  }

  get entireName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Lucas', 'Trindade', 17, '123.456.789-00');
// person.age = 17;
// person.name = 'lucas trindade';
person.cpf = '123.456.789-11'; // chama o setter com o sinal de =
console.log(person.cpf);
