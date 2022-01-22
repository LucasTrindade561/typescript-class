// utility types --> generics que ja existem pelo o ts
// record --> um tipo onde vc fala o tipo da chave do obj e qual é o tipo do valor do objeto
const obj1: Record<string, string | number> = {
  name: 'Lucas',
  lastName: 'Trindade',
  age: 30,
};

console.log(obj1);

// Required
type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Required --> transforma tudo que é opcional em requisitado
type PersonRequired = Required<PersonProtocol>;

// Partial --> transforma tudo que era requerido em opcional
type PersonPartial = Partial<PersonRequired>;

// Readonly --> transformar tudo em readonly
type PersonReadonly = Readonly<PersonRequired>;

// Pick --> escolhe as coisas dentro do obj que vc quer utilizar
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>;

const obj2: PersonRequired = {
  name: 'Lucas',
  lastName: 'Trindade',
  age: 17,
};
console.log(obj2);

// Extract and Exclude
// Exclude --> computa todos os tipos que estao em abc e nao em cde
// Extract --> computa todos os tipos que estão em abc que podem ser atribuidos em cde
type ABC = 'A' | 'B' | 'C'; // vai sobrar A B
type CDE = 'C' | 'D' | 'E'; // apenas o c
type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

// example
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  lastName: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdasddsadsadsa_asdasdds',
  name: 'Lucas',
  age: 17,
  lastName: 'Trindade',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
