// Void --- quer dizer que uma função ou método não retorna nada --- tipo um undefined

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Trindade',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Lucas', 'Trindade', 'Schmitz');
pessoa.showName();

export { pessoa };
