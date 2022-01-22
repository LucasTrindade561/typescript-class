export function funcao(this: Date, arg: string, age: number): void {
  console.log(this);
  console.log(arg);
  console.log(age);
}
export function funcao2(this: string, arg: string): void {
  console.log(this);
  console.log(arg);
}

// Primeiro argumento é quem vai ser o this da função e o segundo vai ser os argumentos
funcao.call(new Date(), 'mine', 20);
funcao2.apply('nome', ['foda']);
