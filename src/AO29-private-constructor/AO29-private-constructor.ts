// private constructor --> quando não queremos que ocorra mais de uma instancia
// ou criamos uma nova instancia ou recuperamos a instancia ja determinada no sistema
// Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Factory Method - GoF --> cria um novo objeto dentro de uma classe
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia ja criada');
      return Database.database;
    }
    console.log('Criando nova instancia criada');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', '123456');
db3.connect();
