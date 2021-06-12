# Understanding TypeScript

Repository for Academind's [Understanding TypeScript](https://www.udemy.com/course/understanding-typescript) course.

## Installing

Global:

```
npm install -g typescript
```

Local:

```
npm install typescript --save-dev
```

## Initializing

Create `tsconfig.json` in the folder:

```
tsc --init
```

## Compiling

Compile single file (if installed globally):

```
tsc app.ts
```

Compile all files:

```
npx tsc
```

Watch file changes (if installed globally):

```
tsc app.ts -w
```

Watch all file changes:

```
npx tsc -w
```

## Core Types

| Type      | Example                | Notes                                                        |
| --------- | ---------------------- | ------------------------------------------------------------ |
| `number`  | `1, 5.8, -10`          | Integers, floats etc.                                        |
| `string`  | `` "Hi", 'Hi', `Hi` `` | All text values                                              |
| `boolean` | `true or false`        |
| `object`  | `{ age: 30 }`          | Pairs of `key` and `type` ending with `;` that can be nested |
| `array`   | `[1,2,3]`              |
| `tuple`   | `[1,2]`                | Array of fixed-length (TS extension)                         |
| `enum`    | `enum { NEW, OLD }`    | Enumerated constant identifiers (TS extension)               |
| `any`     | `*`                    | No specific type assignment                                  |

## Union Type

Allows flexibility with parameters, but may require extra logic to handle:

```typescript
const combine = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
};

const combinedAges = combine(30, 26);
const combinedNames = combine("Ayrton", "Mugnaini");

console.log(combinedAges);
console.log(combinedNames);
```

## Literal Type

Parameter(s) should be equal to predetermined value(s). Very powerful when combined with union types:

```typescript
const double = (
  myInput: number | string,
  resultConversionType: "as-number" | "as-string"
) => {
  if (typeof myInput === "number" || resultConversionType === "as-number")
    return +myInput * 2;
  else {
    return myInput.toString().repeat(2);
  }
};

const doubleAsNumber = double(30, "as-number");
const doubleAsString = double("30", "as-string");

console.log(doubleAsNumber);
console.log(doubleAsString);
```

## Type Alias

Uses the reserved word `type` to declare a type (or union type!) alias.

```typescript
type numberOrString = number | string;

const printNumberOrString = (myInput: numberOrString) => {
  console.log(myInput);
};

printNumberOrString(99);
printNumberOrString("olá");
```

It's also possible to provide an alias to a (possibly complex) object type. This avoids unnecessary repetition.

```typescript
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };
```

## Function Type

Alow us to describe the structure of a function we want as a type:

```typescript
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

let combineValues: (a: number, b: number) => number;

combineValues = add;
```

Also great for handling callbacks:

```typescript
const addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

const addAndHandle = (
  n1: number,
  n2: number,
  someCallback: (num1: number) => void
) => {
  const result = n1 + n2;
  someCallback(result);
};

addAndHandle(10, 20, (result) => {
  console.log("result: ", result);
});
```

## Unkown Type

More restrictive than `any`, needs a type check before handling assignments:

```typescript
let userInput: unknown;
let userName: string;

userInput = "Ayrton";

if (typeof userInput === "string") {
  userName = userInput;
  console.log(userName);
}
```
