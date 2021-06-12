const addNumbers = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult1 = (num: number) => {
  console.log("result: ", num);
};

printResult1(addNumbers(5, 10));
