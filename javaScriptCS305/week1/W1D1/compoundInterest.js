// 3. Make a defining table and program to print out the balance of a savings account that
// compounds interest monthly. Prompt the user for the
// • initial amount
// • annual interest rate
// • number of years to compound
"use strict";
const prompt = require("prompt-sync")();

let initialAmount = prompt("Enter your initial amount: ");
let annualInterestRate = prompt("Enter your annual interest rate: ");
let numberOfYear = prompt("Enter year: ");
const interestInYear = 12;
// P(1 + r/n)nt
let compoundInterestRate =
  initialAmount *
  Math.pow(
    1 + annualInterestRate / 100 / interestInYear,
    interestInYear * numberOfYear
  );

console.log("Your annual compound interest is: " + compoundInterestRate);
