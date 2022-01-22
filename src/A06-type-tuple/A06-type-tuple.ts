// Tuple --> arrays com tipos e tamanhos bem especificos

const clientData1: [number, string] = [1, 'Lucas'];
const clientData2: readonly [number, string, string] = [1, 'Lucas', 'Trindade'];
const clientData3: [number, string, string?] = [1, 'Lucas'];
const clientData4: [number, string, ...string[]] = [1, 'Lucas', 'legal'];

clientData1[0] = 100;
clientData1[1] = 'Trindade';

// clientData2.pop();
// clientData1[2] = 'Schmitz'; Nao consegue add valores em novos indices

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);
