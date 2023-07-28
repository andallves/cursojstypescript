// When we are using the typescript it's necessary install the package and packeage's types

// npm install package-name
// npm install @types/package-name

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('andrealves@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
