// this como tipo --> permite fazer cadeias de ações
export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  less(n: number): this {
    this.number -= n;
    return this;
  }
  multiplicate(n: number): this {
    this.number *= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

// const number = new SubCalculator(10);
// number.add(20).multiplicate(2).less(20).pow(2);
// console.log(number);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    if (this.method === null)
      console.log('Needs to set method before send your data');
    if (this.url === null)
      console.log('Needs to set url before send your data');
    console.log(`Seeding data by ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('get').send();
