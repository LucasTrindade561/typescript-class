// retrições nos generics --> para deixar os generics mais seguros
// K extends keyof O --> k é uma chave de O
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'red',
  vaccines: ['covid vaccine', 'pneumonia vaccine', 'hot vaccine'],
  age: 10,
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');
console.log(vaccines, color, getKey(animal, 'age'));

export { vaccines, color };
