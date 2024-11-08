The significance of union and intersection types in Typescript.

In typescript union work like or it allow a variable to have several types for example:

```typescript
type GenderType = "male" | "female" | "others";

// now if a user use this time in his/her variable then

let gender: GenderType;
gender = "male"; // it work ok
gender = "female"; // it work ok
gender = "abc"; // it show error

// or you can use it to define a function parameter type for example

interface Circle {
  shape: "circle";
  radius: number;
}
interface Rectangle {
  shape: "rectangle";
  width: number;
  height: number;
}

const calculateShapeArea = (shape: Circle | Rectangle): number => {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
};
```

One the other hand intersection type combines multiple type into a single type it work like and for example:

```typescript

type PersonType = { name: string } & { age: number };

let person: PersonType = {
    name = "name"; // show error
};
// word ok
let person: PersonType = {
    name = "name";
    age = 39;
};


```
