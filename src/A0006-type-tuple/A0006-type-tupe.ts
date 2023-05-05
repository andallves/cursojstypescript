// Tuple
const dataClient1: [number, string] = [1, 'Andrew'];
const dataClient2: [number, string, string] = [1, 'Andrew', 'Alves'];
const dataClient3: [number, string, string?] = [1, 'Andrew']; // Quando utilizo '?' depois do tipo significa que aquele valor é opcional.

dataClient1[0] = 10;
console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
