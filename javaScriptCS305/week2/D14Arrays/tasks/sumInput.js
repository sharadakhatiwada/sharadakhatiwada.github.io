"use strict";
const prompt = require("prompt-sync")();
/**
 *
 * @returns
 */
function sumInput() {
  let subArrayOfInput = [];

  while (1) {
    let input = prompt("Please Enter Number");
    if (input === "" || input === null || !isFinite(input)) {
      break;
    }
    subArrayOfInput.push(+input);
  }
  let sum = 0;
  for (let number of subArrayOfInput) {
    sum = sum + number;
  }
  return sum;
}
console.log(sumInput());
