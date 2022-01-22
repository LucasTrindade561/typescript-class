// decorators --> ele finge ser o seu objeto mas no meio do caminho, ele pode decorar(observar, modificar ou substituir) o seu objeto
@decorator // decorator vai passar sempre pelo o animal
export class Animal {
  constructor(public name: string, public color: string) {}
}

// target --> classe que vc quer decorar
// new (...args: any[]) => any --> tipando o constructor da classe
function decorator<T extends new (...args: any[]) => any>(target: T) {
  // extends uma classe anonima
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
