// global constants use case for the "enum" custom type

enum Role {
  ADMIN = 5, // possible to assign/start any value
  USER,
  GUEST,
}

// unnecessarily specific object types, better for tuples

const person0: {
  name: string;
  age: number;
  role: [number, string]; // tuple
} = {
  name: "Ayrton",
  age: 30,
  role: [2, "developer"], // tuple, array of fixed length and types
};

// preferred inferred object types, if tuples are not in the mix

const person1 = {
  name: "Ayrton",
  age: 30,
  hobbies: ["gaming", "cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[]; // array of strings: totally specific
let favoriteSports: any[]; // elements of any type: flexible but not really the point in TS

// tests

console.log(person1.name);

for (const hobby of person1.hobbies) console.log(hobby.toUpperCase());

if (person1.role === Role.ADMIN) {
  console.log("is admin");
}
