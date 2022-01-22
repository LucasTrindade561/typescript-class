// public --> acessado em qualquer lugar dentro ou fora da classe e em todas as subclasses
// private --> só é acessado dentro da classe que foi foi criado (usado mto com encapsulamento e com dados sensiveis)
// protected --> mesma coisa que private, com a unica diferença que o protected conseguimos fazer alterações dentro das subclasses

export class Company {
  public readonly name: string; // public não é necessario
  protected readonly contributors: Contributor[] = []; // encapsulamento --> ocorrendo aqui
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addContributors(contributors: Contributor): void {
    this.contributors.push(contributors);
  }

  showContributors(): void {
    for (const contributor of this.contributors) {
      console.log(contributor);
    }
  }
}

export class LTS extends Company {
  constructor() {
    super('LTS', '11.111.111/0001-11');
  }

  popContributor(): Contributor | null {
    const contributor = this.contributors.pop();
    if (contributor) return contributor;
    return null;
  }
}

export class Contributor {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const company1 = new LTS();
const contributors1 = new Contributor('Lucas', 'Trindade');
const contributors2 = new Contributor('Rafaela', 'Trindade');
const contributors3 = new Contributor('Camila', 'Trindade');
company1.addContributors(contributors1);
company1.addContributors(contributors2);
company1.addContributors(contributors3);
// company1.addContributors({
//   name: 'Pedro',
//   lastName: 'Dias',
// });
const removedContributor = company1.popContributor();
console.log(removedContributor);
console.log(company1);
// company1.showContributors();
