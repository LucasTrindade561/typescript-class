// Super classe --> classe mãe
export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getEntireName(): string {
    return this.name + ' ' + this.lastName;
  }
}

// Subclasses --> classe filha
export class Student extends Person {
  constructor(
    // aqui estamos recebendo valores, tirando o studentClass que foi criado
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public studentClass: string,
  ) {
    super(name, lastName, age, cpf); // fazendo super --> recebendo os valores
  }

  getEntireName(): string {
    console.log('Fazendo algo antes');
    const result = super.getEntireName(); // super - acesso a super classe
    return result + ' FODAAAAAAAA';
  }
}

export class Client extends Person {
  getEntireName(): string {
    return 'This comes from client: ' + this.name + ' ' + this.lastName;
  }
}

const s1 = new Student('Lucas', 'Trindade', 17, '231.323.221-33', '210');
const c1 = new Client('Lucas', 'Trindade', 17, '231.323.221-33');
const p1 = new Person('Lucas', 'Trindade', 17, '231.323.221-33');

// console.log(p1.getEntireName());
console.log(s1);
// console.log(c1.getEntireName());
