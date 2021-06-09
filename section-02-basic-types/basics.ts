const addNumbers1 = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) => {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  return result;
};

const number1: number = 10; // it's possible, but unnecessary
const number2 = 6.3; // TS is capable of inferring types
const printResult = true;
const resultPhrase = "The result is ";

addNumbers1(number1, number2, printResult, resultPhrase);
