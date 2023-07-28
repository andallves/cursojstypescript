/* eslint-disable @typescript-eslint/triple-slash-reference */

// This works like a import, but all file will be imported, anything.
/// <reference path="module/module.ts" />
console.log(MyNamespace.NamespacePerson);
console.log(namespaceConst);

//npx tsc src/namespaces/creating-namespace/index.ts --outFile src/namespaces/creating-namespace/index.js
