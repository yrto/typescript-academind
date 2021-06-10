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
