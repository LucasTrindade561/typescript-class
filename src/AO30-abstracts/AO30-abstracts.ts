// Abstracts --> todas as classes que extenderem da classe abastrata terão o mesmo tipo
// E também que todas classes tenham determinado método ou determinado produto

// com a palavra abstract, agora só podemos usar em subclasses dela (apenas em classes concretas), não pode ser instanciada
export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected hit: number,
    protected hp: number,
  ) {}

  hitting(character: Character): void {
    this.scream();
    character.lostHp(this.hit);
  }

  lostHp(hitBasic: number): void {
    if (!this.hp) return console.log(`${this.name} died`);
    this.hp -= hitBasic;
    console.log(`${this.emoji} ${this.name} has now ${this.hp} of hp...`);
  }

  abstract scream(): void; // agora todas as classes de character precisam ter um scream
}

export class Cavalier extends Character {
  protected emoji = '\u{1F9DD}';

  scream(): void {
    console.log(this.emoji + ' CAVALIER IN ATTACK');
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  scream(): void {
    console.log(this.emoji + ' MONSTER IN ATTACK');
  }
}

const cavalier = new Cavalier('Cavalier', 100, 1000);
const monster = new Monster('Monster', 87, 1000);
// const character = new Character('Alo', 9000, 100000); --> erro pois é uma classe abstrata

cavalier.hitting(monster);
cavalier.hitting(monster);
cavalier.hitting(monster);
monster.hitting(cavalier);
