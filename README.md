# Understanding TypeScript

Repository for Academind's "Understanding TypeScript" course. More [here](https://www.udemy.com/course/understanding-typescript).

### Installing

Global:

`npm install -g typescript`

Local:

`npm install typescript --save-dev`

### Initializing

Create `tsconfig.json` in the folder:

`tsc --init`

### Compiling

Single file:

`tsc app.ts`

Watch file changes:

`tsc app.ts -w`

### Core Types

| Type      | Example                | Notes                 |
| --------- | ---------------------- | --------------------- |
| `number`  | `1, 5.8, -10`          | Integers, floats etc. |
| `string`  | `` "Hi", 'Hi', `Hi` `` | All text values       |
| `boolean` | `true or false`        |                       |
| `...`     |                        |                       |
