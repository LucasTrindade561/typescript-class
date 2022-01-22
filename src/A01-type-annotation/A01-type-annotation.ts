/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0xf00d; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numberArray: Array<number> = [1, 2, 3];
let numberArray2: number[] = [1, 2, 3];
let stringArray: Array<string> = ['a, b, c','d'];
let stringArray2: string[] = ['a, b, c','d'];

// Objetos --> ? significa que é opcional
let person: {name: string, age:number, adult?: boolean} = {
  name: 'Lucas',
  age: 30,
  adult: true
}

// Funções                            Retorno da função
function total(x: number, y:number) : number {
  return x + y;
}

const total2: (x: number, y: number) => number = (x, y) => x + y;

const result = total(2, 2);

