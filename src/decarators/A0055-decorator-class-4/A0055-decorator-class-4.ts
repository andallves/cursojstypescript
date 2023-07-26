// Decorator composition

@anotherDecorator('O parâmetro do outro decorador') // We can using more than one decorator in the class
@invertString('Value1', 'Value2') // To passe the parameters to the class
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

interface Constructor {
  new (...args: any[]): any;
}

function anotherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorador' + param1);
    return target;
  };
}

// The function is used to receive the parameters, but it must to return a decorator
// fuction.
function invertString(param1: string, param2: string) {
  // Closure
  return function <T extends Constructor>(target: T): T {
    console.log('Sou o decorador e recebi:', target);
    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }

      invert(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

const animal = new Animal('Violet-Backed Starling', 'purple');
console.log(animal);
