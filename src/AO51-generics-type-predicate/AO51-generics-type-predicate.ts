// quando uma funcao retorna um boolean, pode falar para o ts que quando for true, ela vai retornar determinado tipo
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function plus<T>(...args: T[]): number | null {
  const returnPlus = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return returnPlus;
}

console.log(plus(1, 2, 3));
console.log(plus(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(plus('a', 'b', 'c'));
