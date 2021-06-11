const double = (
  myInput: number | string,
  resultConversionType: "as-number" | "as-text"
) => {
  if (typeof myInput === "number" || resultConversionType === "as-number")
    return +myInput * 2;
  else {
    return myInput.toString().repeat(2);
  }
};

const doubleAsNumber = double(30, "as-number");
const doubleAsString = double("30", "as-text");

console.log(doubleAsNumber);
console.log(doubleAsString);
