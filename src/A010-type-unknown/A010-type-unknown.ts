// Unknown --- ele não permite tudo que nem o any, primeiro precisamos checar o valor (tipo um any porem mais seguro)
let x: unknown;
x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
