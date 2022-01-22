// associacao --> um objeto apenas usa um outro objeto num determinado momento do codigo
// agregacao --> um objeto precisa de outro objeto para funcionar
// composicao --> um objeto tem outro objeto como parte dele
export class Car {
  private readonly motor = new Motor(); // composicao

  turnOn(): void {
    this.motor.turnOn();
  }
  speedUp(): void {
    this.motor.speedUp();
  }
  turnOf(): void {
    this.motor.turnOf();
  }
  stopped(): void {
    this.motor.stopped();
  }
}

export class Motor {
  turnOn(): void {
    console.log('Motor is turned on...');
  }
  speedUp(): void {
    console.log('Motor is speeding up...');
  }
  turnOf(): void {
    console.log('Motor is turned of...');
  }
  stopped(): void {
    console.log('Motor is stopped...');
  }
}

const car = new Car();
car.turnOn();
car.speedUp();
car.stopped();
car.turnOf();
