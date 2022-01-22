// Heranças --> extender classes para outras classes
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

export class Student extends Person {
  getEntireName(): string {
    return 'This comes from student: ' + this.name + ' ' + this.lastName;
  }
}

export class Client extends Person {
  getEntireName(): string {
    return 'This comes from client: ' + this.name + ' ' + this.lastName;
  }
}

const s1 = new Student('Lucas', 'Trindade', 17, '231.323.221-33');
const c1 = new Client('Lucas', 'Trindade', 17, '231.323.221-33');
const p1 = new Person('Lucas', 'Trindade', 17, '231.323.221-33');

console.log(p1.getEntireName());
console.log(s1.getEntireName());
console.log(c1.getEntireName());
