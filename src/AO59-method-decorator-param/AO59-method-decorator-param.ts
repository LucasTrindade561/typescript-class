function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index); // posicao do parametro no metodo
  return 'qualquer coisa';
}

export class APerson {
  name: string;
  lastName: string;
  age: number;

  constructor(
    @decorator name: string,
    @decorator lastName: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get completeName(): string {
    return this.name + ' ' + this.lastName;
  }

  set completeName(value: string) {
    const word = value.split(/\s+/g);
    const firstName = word.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = word.join(' ');
  }
}

const aPerson = new APerson('Lucas', 'Trindade', 17);
const method = aPerson.method('Hello world');
console.log(method);
