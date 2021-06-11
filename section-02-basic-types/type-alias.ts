type numberOrString = number | string;

const printNumberOrString = (myInput: numberOrString) => {
  console.log(myInput);
};

printNumberOrString(99);
printNumberOrString("olá");
