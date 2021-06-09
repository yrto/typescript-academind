function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  return result;
}

const number1 = 10;
const number2 = 6.3;
const printResult = true;
const resultPhrase = "The result is ";

add(number1, number2, printResult, resultPhrase);
