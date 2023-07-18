// O never indica que a função ou metodo nunca vai retornar nada.
// Geralmente é ultizada em loops infinito onde trava a aplicação ou lança um erro.

export function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
