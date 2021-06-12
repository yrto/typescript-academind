const addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

// const printResult1 = (num: number): void => {
//   console.log("result: ", num);
// };

const addAndHandle = (
  n1: number,
  n2: number,
  someCallback: (num1: number) => void
) => {
  const result = n1 + n2;
  someCallback(result);
};

// let combineValues: (a: number, b: number) => number;

// combineValues = addNumbers;

// printResult1(combineValues(5, 15));

addAndHandle(10, 20, (result) => {
  console.log("result: ", result);
});
