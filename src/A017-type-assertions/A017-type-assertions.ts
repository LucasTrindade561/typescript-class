// type assertions --> são types casting, ou seja, converter um tipo para outro

/* Recomendado */
// Condicional --> quando não tem certeza do tipo
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion --> quando tem certeza do tipo
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Type assertion --> não pode jogar qualquer tipo aqui, apenas subtipos
// const body4 = document.querySelector('body') as number;
// body4.style.background = 'red';

// Não recomendável
const body4 = document.querySelector('body') as unknown as number;
console.log(body4);

// Non-null assertion (!) --> ! está dizendo que o objeto não pode ser nulo
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
