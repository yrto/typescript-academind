// unnecessarily specific object types

const person1: {
  name: string;
  age: number;
} = {
  name: "Ayrton",
  age: 30,
};

// preferred inferred object types

const person2 = {
  name: "Ayrton",
  age: 30,
};

console.log(person2.name);
