const combine2 = (input1: number | string, input2: number | string) => {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  return input1.toString() + input2.toString();
};

const combinedAges2 = combine2(30, 26);
const combinedNames2 = combine2("Ayrton", "Mugnaini");

console.log(combinedAges2);
console.log(combinedNames2);
