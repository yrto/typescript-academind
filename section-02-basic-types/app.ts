let userInput: unknown;
let userName: string;

userInput = "Ayrton";

if (typeof userInput === "string") {
  userName = userInput;
  console.log(userName);
}

// Not as flexible as `any`, needs to check the type:
