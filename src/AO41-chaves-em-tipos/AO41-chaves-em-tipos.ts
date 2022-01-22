type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  marca: Vehicle['brand'];
  ano: Vehicle['year'];
  name: string;
};

const car: Car = {
  marca: 'Porsche',
  ano: '2021',
  name: 'Panamera',
};

console.log(car);
