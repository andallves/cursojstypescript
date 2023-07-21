type myType = number;

// const arrayNumbers: number[] = [1, 2, 3, 4, 5];
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5]; // This is a generics comes by default.
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<myType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 100);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
