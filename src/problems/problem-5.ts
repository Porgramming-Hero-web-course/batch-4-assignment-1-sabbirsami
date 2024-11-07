interface PersonType {
  name: string;
  age: number;
}

const getProperty = <T, K extends keyof T>(person: T, key: K): T[K] => {
  return person[key];
};

const person: PersonType = { name: "Alice", age: 30 };

console.log(getProperty(person, "name"));
