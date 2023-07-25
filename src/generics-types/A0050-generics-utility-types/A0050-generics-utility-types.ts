// This is Record
// -> We say which is the type of the key
// -> We say which is the type of the value
const objecto1: Record<string, string | number> = {
  name: 'Andre',
  lastname: 'Alves',
  age: 23,
};
console.log(objecto1);

// This type has optional values;
type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required -> Using required all of values are required now.
type PersonRequired = Required<PersonProtocol>;

// Partial -> Using partial all of values required became optional.
type PersonPartial = Partial<PersonRequired>;

// Readonly -> Using readonly all of values became readonly and it cannot to be modified.
type PersonReadonly = Readonly<PersonRequired>;

// Pick -> Allow you choose the key inside of object that you want it.
type PersonPick = Pick<PersonRequired, 'name' | 'lastname'>;

const object2: PersonReadonly = {
  name: 'Andre',
  lastname: 'Pereira',
  age: 23,
};
console.log(object2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// -> The exclude computes all the type in ABC that it isn't in CDE.
type TypeExclude = Exclude<ABC, CDE>; // 'A' | 'B'

// -> The extract computes all the type in ABC that it can to be assing in type CDE.
type TypeExtract = Extract<ABC, CDE>; // 'C'

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'alfjaldfahfkasf',
  name: 'Andre',
  age: 23,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
