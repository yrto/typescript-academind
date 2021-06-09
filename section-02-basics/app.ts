// unnecessarily specific object types

const person0: {
  name: string;
  age: number;
} = {
  name: "Ayrton",
  age: 30,
};

// preferred inferred object types

const person1 = {
  name: "Ayrton",
  age: 30,
  hobbies: ["gaming", "cooking"],
};

let favoriteActivities: string[]; // array of strings: totally specific
let favoriteSports: any[]; // elements of any type: flexible but not really the point in TS

console.log(person1.name);

for (const hobby of person1.hobbies) console.log(hobby.toUpperCase());
