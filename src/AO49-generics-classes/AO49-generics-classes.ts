// quando voce instancia uma classe, metodo, ou uma funcao com valores, o ts consegue inferir um tipo
// quando voce nao instancia com valores e vao ser criados dps de um tempo, ele nai conseguir inferir
export default class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter]; // pegando o elemento para delete e salvando numa variavel
    delete this.elements[this.counter]; // deletando o valor recuperado
    return element; // retornando o valor delete
  }

  isEmpty(): boolean {
    return this.counter === 0; // true
  }

  length(): number {
    return this.counter;
  }

  pick(element: T): void {
    const lastElement = (this.elements[this.counter] = element);
    console.log(lastElement);
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
