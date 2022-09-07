// 6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits.
// Input Output
// 123 6
// 102 3
// 8 8
const prompt = require("prompt-sync")();
let input = prompt("Enter a number ");
let splitInput = input.split("");
let sum = 0;
for (let i = 0; i < splitInput.length; i++) {
  sum = sum + parseInt(splitInput[i]);
}
console.log(sum);
