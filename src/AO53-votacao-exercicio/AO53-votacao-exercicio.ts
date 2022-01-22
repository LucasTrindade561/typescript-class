type VotationOption = {
  numberOfVotes: number;
  option: string;
};

// Estamos configurando o votation a base da votação (as opcoes de votacao e o proprio voto)
export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(voteIndex: number): void {
    if (!this._votationOptions[voteIndex]) return;
    this._votationOptions[voteIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

// Aqui adiciona a votacao e mostra ela depois com os detalhes
export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log('###');
    }
  }
}

const v1 = new Votation('Qual sua linguagem de programação favorita?');
v1.addVotationOption({ option: 'Javascript', numberOfVotes: 0 });
v1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
v1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
v1.vote(1);
v1.vote(0);
v1.vote(2);

const v2 = new Votation('Qual sua cor favorita?');
v2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
v2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
v2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
v2.vote(1);
v2.vote(0);
v2.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(v1);
votationApp.addVotation(v2);
votationApp.showVotations();
