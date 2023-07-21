// Optinal chaing and null coalescence operator('??' check non-value - null & undefined)

type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const documento: Documento = {
  title: 'The title',
  text: 'The text',
  date: new Date(),
};

// Using the optinal chaing '?', so if it doesn't exist the method it isn't called.
console.log(documento.date?.toDateString() ?? '1 - Ixi, não existe data.');
console.log(undefined ?? '2 - Ixi, não existe data.');
console.log(null ?? '3 - Ixi, não existe data.');
