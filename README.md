# Understanding TypeScript

Repository for Academind's "Understanding TypeScript" course. More [here](https://www.udemy.com/course/understanding-typescript).

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

Single file:

```
tsc app.ts
```

Watch file changes:

```
tsc app.ts -w
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
| `...`     |

## Union Types

Flexible parameters:

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
