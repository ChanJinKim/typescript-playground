interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

const writablePerson: Person = {
  name: 'Person McPersonface',
  age: 42,
};

// works
const readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'

// readonly properties can also change via aliasing.
writablePerson.age++;

console.log(readonlyPerson.age); // prints '43'
