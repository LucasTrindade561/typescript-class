// Object --> objetos em geral

// Record<string, unknown> ---> objeto totalmente aberto
const objectA: {
  readonly keyA: string; // readonly --> nao pode alterar o valor da chave
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // Quando não sabemos qual vai ser o nome da chave e de que tipo ela será
} = {
  keyA: 'Value a',
  keyB: 'Value b',
};

// objectA.keyA = 'Other value';
objectA.keyB = 'Other value';
objectA.keyC = 'New key';
objectA.keyD = 'new Key again';

console.log(objectA);
