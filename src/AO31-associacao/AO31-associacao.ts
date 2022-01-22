// associação --> ligar um objeto sem que eles sejam dependentes (relação do tipo tem um)
export class Writer {
  private _tools: Tools | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tools(tools: Tools | null) {
    this._tools = tools;
  }

  get tools(): Tools | null {
    return this._tools;
  }

  write(): void {
    if (this.tools === null) {
      console.log(`Can't write without tool`);
      return;
    }

    this.tools.write();
  }
}

export abstract class Tools {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tools {
  write(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class WriteMachine extends Tools {
  write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const writer = new Writer('Lucas');
const pen = new Pen('Bic');
const writeMachine = new WriteMachine('We R');

// console.log(writer.name);
// console.log(pen.name);
// console.log(writeMachine.name);

writer.tools = pen; // fazendo associação
writer.tools = writeMachine;
writer.tools = null;
writer.write();
