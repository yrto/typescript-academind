const addNumbers = (
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) => {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  return result;
};
