// never --> nunca vai retornar nada\
// Normalmente utilizada para tratar um erro ou num loop infinito
export function createError(): never {
  throw new Error('Any error');
}

createError();
