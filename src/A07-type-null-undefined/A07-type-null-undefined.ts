// Tipo null e undefined --> representam não valor

// undefined --> algo que não foi definido
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string, // Paremetros
  lastName?: string,
): {
  firstName: string; // Tipo de retorno da função
  lastName?: string;
} {
  return {
    firstName, // Retorno da função
    lastName,
  };
}

// null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwoNumber * 2);
}

if (squareOfTwoString === null) {
  console.log('Conta invalida');
} else {
  console.log(squareOfTwoString * 2);
}
