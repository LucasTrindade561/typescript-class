/*eslint-disable @typescript-eslint/no-namespace*/
// um recurso para criar um namespace dentro de um arquivo (um modulo)
namespace MyNewSpace {
  export const nameFromNewSpace = 'Lucas';

  export class PersonFromNameSpace {
    constructor(public name: string) {}
  }

  const person = new PersonFromNameSpace('Lucas');
  console.log(person);

  export namespace OtherNameSpace {
    export const nameFromOtherNewSpace = 'Lucas';
  }
}

const personFromNewSpace = new MyNewSpace.PersonFromNameSpace('Rafaela');
// console.log(personFromNewSpace);
// console.log(MyNewSpace.nameFromNewSpace);
// console.log(MyNewSpace.OtherNameSpace.nameFromOtherNewSpace);
