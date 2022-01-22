// Union types - Quando pode ter mais de um tipo

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('1', '2'));
console.log(addOrConcat(10, '2'));
console.log(addOrConcat('10', 2));
console.log(addOrConcat(true, true));
