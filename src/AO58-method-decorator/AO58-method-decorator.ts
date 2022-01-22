function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  // retorno ou proptery descriptor ou void
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class APerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
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
