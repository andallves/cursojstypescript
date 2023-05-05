const objectA: {
  readonly keyA: string; // Com o readonly não é possível alterar o valor da chave.
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'valueA',
  keyB: 'valueB',
};
objectA.keyB = 'Another value';
objectA.keyC = 'New key';
