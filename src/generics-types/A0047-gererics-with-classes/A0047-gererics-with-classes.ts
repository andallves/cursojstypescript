// When we've a class using the generics almost all the times the typescript can
// infere the types.
export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

// All of this works.
// const person1 = new Person('Andre', 23);
// const person2 = new Person(['Andre'], 23);
// const person3 = new Person('Andre', { age: 23 });
// const person4 = new Person<string, number>('Andre', 23);

export class Stack<T> {
  private account = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.account] = element;
    this.account++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.account--;
    const element = this.elements[this.account];
    delete this.elements[this.account];
    return element;
  }

  isEmpty(): boolean {
    return this.account === 0;
  }

  length(): number {
    return this.account;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.showStack();
