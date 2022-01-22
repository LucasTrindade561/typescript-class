// Encadeamento opcional e Operador de coalescência nula
// Encadeamento opcional --> ? --> quando não sabemos se iremos receber algum obj, nós usamos isso, se existe dentro do obj
// Operador de coalescência nula --> checar se o valor do lado esquerdo do operador é um não valor (null | undefined) --> como se fosse nulo
type Doc = {
  title: string;
  text: string;
  date?: Date;
};

const doc: Doc = {
  title: 'Mine',
  text: 'Minecraft war five was the war bigger in the history',
  // date: new Date(),
};

console.log(doc.date?.toDateString() ?? `1 Don't exist date.`); //Encadeamento opcional ocorrendo aqui
console.log(undefined ?? `2 Don't exist date.`);
console.log(null ?? `3 Don't exist date.`);
console.log(false ?? `4 Don't exist date.`);
