// any - representa uma falta de tipo --- é oq nao queremos receber
// Utilize any apenas em ultimo caso

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage(['1, 2, 3']));
console.log(showMessage('Okay'));
