// overload --> baseado nos parametros que uma função recebe, faz a função se
// comportar de uma maneira diferente
type Adder = {
  // no overload pode tambem receber tipos diferentes a cada overload, no primeiro poderia ser string, no segundo um array
  (x: number): number;
  (x: number, y: number): number; // isso é um overload
  (...arg: number[]): number; // isso é um overload
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3, 9));
