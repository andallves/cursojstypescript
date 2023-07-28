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

  export namespace AnotherNamespace {
    export const name = 'Andre';
  }
}

const namespaceConst = 'Valor da const do namespace';
