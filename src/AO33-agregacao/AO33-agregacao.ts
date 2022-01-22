// agregação --> quando uma classe depende da outra para funcionar corretamente
// Aqui shopping precisa de produtos para funcionar corretamente
export class Shopping {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      if (!this.products.includes(product)) this.products.push(product);
      return console.log('Product already exists');
    }
  }
  productQuantity(): number {
    return this.products.length;
  }
  totalValue(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('T-shirt', 49.9);
const product2 = new Product('Gun', 1.9);
const product3 = new Product('T-shirt', 49.9);

const s1 = new Shopping();
s1.insertProduct(product1);
s1.insertProduct(product2, product3);
console.log(s1);
// console.log(s1.totalValue());
// console.log(s1.productQuantity());
