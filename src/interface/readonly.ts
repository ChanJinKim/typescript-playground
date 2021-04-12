interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
  // obj.prop = 'hello';
}

// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  home.resident.age++;
  console.log(`Happy birthday ${home.resident.name}! your ages ${home.resident.age}`);
}

visitForBirthday({
  resident: {
    name: 'cjkim',
    age: 19,
  },
});
