type Constructor = new (...args: any[]) => any;

@otherDecorator('param1')
@invertNameAndColor('value 1', 'value2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

function invertNameAndColor(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
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
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function otherDecorator(param: string) {
  return function (target: Constructor) {
    console.log('I am the other decorator' + ' ' + param);
    return target;
  };
}

const animal = new Animal('bilu', 'blue');
console.log(animal);
