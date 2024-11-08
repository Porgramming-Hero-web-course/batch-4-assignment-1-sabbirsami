{
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in obj);
  };

  type PersonType = {
    name: string;
    age: number;
    email: string;
  };
  const person: PersonType = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(validateKeys(person, ["name", "age"]));
}
