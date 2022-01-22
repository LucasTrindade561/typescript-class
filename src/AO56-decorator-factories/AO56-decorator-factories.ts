@invertNameAndColor('value 1', 'value2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}
// isso aqui é uma decorator factories, ele basicamente engloba um função para conseguir receber parametros e dps retorna o decorator
function invertNameAndColor(param1: string, param2: string) {
  // closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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

const animal = new Animal('bilu', 'blue');
console.log(animal);
