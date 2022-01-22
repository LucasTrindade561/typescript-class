/*eslint-disable @typescript-eslint/no-namespace*/
// um recurso para criar um namespace dentro de um arquivo (um modulo)
var MyNewSpace;
(function (MyNewSpace) {
  MyNewSpace.nameFromNewSpace = 'Lucas';
  var PersonFromNameSpace = /** @class */ (function () {
    function PersonFromNameSpace(name) {
      this.name = name;
    }
    return PersonFromNameSpace;
  })();
  MyNewSpace.PersonFromNameSpace = PersonFromNameSpace;
  var person = new PersonFromNameSpace('Lucas');
  console.log(person);
  var OtherNameSpace;
  (function (OtherNameSpace) {
    OtherNameSpace.nameFromOtherNewSpace = 'Lucas';
  })(
    (OtherNameSpace =
      MyNewSpace.OtherNameSpace || (MyNewSpace.OtherNameSpace = {})),
  );
})(MyNewSpace || (MyNewSpace = {}));
var personFromNewSpace = new MyNewSpace.PersonFromNameSpace('Rafaela');
// console.log(personFromNewSpace);
// console.log(MyNewSpace.nameFromNewSpace);
// console.log(MyNewSpace.OtherNameSpace.nameFromOtherNewSpace);
/*eslint-disable @typescript-eslint/triple-slash-reference*/
/// <reference path="modules.ts" />
// Para tudo funcionar tudo deveria estar no mesmo arquivo mas como não esta, ele ocorre um erro
console.log(MyNewSpace.nameFromNewSpace);
