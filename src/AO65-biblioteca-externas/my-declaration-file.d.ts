// Aqui estamos botando esse metodo dentro da tipagem do lodash
// Esta fazendo o declaration marge com o namespace do lodash e dps fez declaration marge da interface
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}
declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}
