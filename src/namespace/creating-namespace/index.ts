// Module it's a namespace, but it's from typescript
// The namespace create a scoop local
// We can create anything inside this namespace e.g: 'const, let, class, function'

/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export const name = 'Andre';

  // If I want to use outside of this scoop it's necessary export
  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const personNamespace = new NamespacePerson('Andre');
  console.log(personNamespace);

  export namespace AnotherNamespace {
    export const name = 'Andre';
  }
}

// We call the namespace.className
const personNamespace = new MyNamespace.NamespacePerson('Andre');
console.log(personNamespace);
console.log(MyNamespace.name);
console.log(MyNamespace.AnotherNamespace.name);
