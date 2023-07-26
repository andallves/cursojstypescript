// Type of class's constructor
type Constructor = new (...args: any[]) => any;

// Class
function classDecorator(constructor: Constructor): any {
  // Called in class creation
  console.log('CLASS');
  console.log(constructor);
  console.log('###');
}

// Instance of method (normal)
function methodDecorator(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called in method creation (It isn't needed call the method)
  console.log('NORMAL METHOD');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');
}

// Static method
function staticMethodDecorator(
  classConstructor: Constructor,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called in method creation (It isn't needed call the method)
  console.log('STATIC METHOD');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyDescriptor);
  console.log('###');
}

// Method's parameter
function methodParameterDecorator(
  classPrototype: any,
  methodName: string,
  propertyIndex: number,
): any {
  // Called in method creation
  console.log('METHOD PARAMETER');
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');
}

// Static method's parameter
function staticMethodParameterDecorator(
  classConstructor: any,
  methodName: string,
  propertyIndex: number,
): any {
  // Called in method creation
  console.log('STATIC METHOD PARAMETER');
  console.log(classConstructor);
  console.log(methodName);
  console.log(propertyIndex);
  console.log('###');
}

// Property
function propertyDecorator(classPrototype: any, propertyName: string): any {
  // Called in property creation
  console.log('PROPERTY DECORATOR');
  console.log(classPrototype);
  console.log(propertyName);
  console.log('###');
}

// Static property
function staticPropertyDecorator(
  classConstructor: Constructor,
  propertyName: string,
): any {
  // Called in property creation
  console.log('STATIC PROPERTY DECORATOR');
  console.log(classConstructor);
  console.log(propertyName);
  console.log('###');
}

// Getter/Setter
function normalGetterAndSetterDecorator(
  classPrototype: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called in method creation
  // (Only can to be apply in getter or setter, but in both in the same time isn't allowed it.)
  console.log('GETTER/SETTER normal');
  console.log(classPrototype);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');
}

// Static Getter/Setter
function staticDecoratorGetterAndSetter(
  classConstructor: Constructor,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Called in method creation
  // (Only can to be apply in getter or setter, but in both in the same time isn't allowed it.)
  console.log('GETTER/SETTER normal');
  console.log(classConstructor);
  console.log(propertyName);
  console.log(propertyDescriptor);
  console.log('###');
}

// The class and the decorator using.
@classDecorator
export class OnePerson {
  @propertyDecorator
  name: string;
  lastname: string;
  age: number;

  @staticPropertyDecorator
  static staticProperty = '';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  @methodDecorator
  method(msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @staticMethodDecorator
  static staticMethod(@staticMethodParameterDecorator msg: string): string {
    return OnePerson.staticProperty + msg;
  }

  @normalGetterAndSetterDecorator
  get fullname(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullname(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @staticDecoratorGetterAndSetter
  static get staticPropertyGetterSetter(): string {
    return OnePerson.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    OnePerson.staticProperty = value;
  }
}

const person = new OnePerson('Andre', 'Pereira', 23);
const method = person.method('Hello world!');
console.log(method);
