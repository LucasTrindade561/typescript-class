// enum --> uma estrutura de dados não ordenada, utilizada quando tem mais de uma opção para determinada coisa e precisamos enumera-los

enum Colors {
  RED = 10, // 0
  BLUE = 100, // 1
  YELLOW = 200, // 2
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINk,
}

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.PURPLE);
chooseColor(122345);

// console.log(Colors);
// console.log(Colors.RED);
// console.log(Colors[100]);
// console.log(Colors.ROXO);
