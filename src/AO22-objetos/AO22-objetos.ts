// classes em typescript
export class Company {
  public readonly name: string; // public não é necessario
  private readonly contributors: Contributor[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addContributors(contributors: Contributor): void {
    // this.contributors = 'other value'; --> nao pode
    this.contributors.push(contributors);
  }

  showContributors(): void {
    for (const contributor of this.contributors) {
      console.log(contributor);
    }
  }
}

export class Contributor {
  // eslint-disable-next-line no-unused-vars
  constructor(public readonly name: string, public readonly lastName: string) {}
}

const company1 = new Company('LTS', '11.111.111/0001-11');
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

console.log(company1);
company1.showContributors();
