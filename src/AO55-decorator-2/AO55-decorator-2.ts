// decorator é chamado no momento da criação da classe
@invertNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

function invertNameAndColor<T extends new (...args: any[]) => any>(target: T) {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.invert(args[0]);
      this.color = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('bilu', 'blue');
console.log(animal);
