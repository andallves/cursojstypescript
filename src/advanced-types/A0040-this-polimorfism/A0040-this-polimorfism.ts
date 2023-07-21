/**
    USING THIS LIKE A TYPE

 *
 */

export class Calculator {
  constructor(public number: number) {}

  sum(n: number): this {
    this.number += n;
    return this; // When using 'this', we are returning the instance by itself.
  }
  // This allow to make a chain call.

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

const calculator = new Calculator(10);
calculator.sum(10).mul(2).div(4).sub(5); // This chain call it's only possible because I'm using 'this'.
console.log(calculator);

// This class could to be extends and the 'this' will to refer about the other class. Avoiding problems.

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const subCalculator = new SubCalculator(10);
subCalculator.sum(10).mul(2).div(4).sub(5).pow(2);
console.log(subCalculator);

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
    if (this.method === null || this.url === null) {
      console.log(
        "It's impossible send because important args weren't passed it.",
      );
    }
    console.log(`Sending the data via ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('post').setUrl('http://www.andrealves.com').send();
