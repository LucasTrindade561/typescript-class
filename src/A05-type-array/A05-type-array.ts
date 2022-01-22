// Array
// Duas maneiras:
// <T> --> T = type (podemos botar qualquer tipo, inclusive os nossos tipos)
// T[] --> T = type (podemos botar qualquer tipo, inclusive os nossos tipos)

export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatenateString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const array: readonly string[] = ['Luiz', 'Lucas', 'Fodões']; // Array imutável
const array1: ReadonlyArray<string> = ['Luiz', 'Lucas', 'Fodões']; // Array imutável

const result = multiplyArgs(1, 2, 3);
const resultString = concatenateString('a', 'b', 'c');
const resultToUpperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(resultString);
console.log(resultToUpperCase);
console.log(array);
console.log(array1);

export { result };
