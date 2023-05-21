// ASSERTIONS TYPE

/* RECOMMENDED */

// Conditional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion -> this is recommended assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* NOT RECOMMENDED */

// Non-null assertions (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

const body4 = document.querySelector('body') as unknown as number;
