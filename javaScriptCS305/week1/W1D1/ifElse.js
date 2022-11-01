// 1. Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (exclusive)
// • 2% for sales above $500
// • If the salesman is not salaried then
// • 2% for sales between $300 and $500 (exclusive)
// • 3% for sales above $500
"use strict";
const prompt = require("prompt-sync")();
let salaried = prompt("Enter yes if you are salaried, if not enter no : ");

while (!(salaried === "yes" || salaried === "no")) {
  console.log("Please enter valid value.");
  salaried = prompt("Enter yes if you are salaried, if not enter no : ");
}

const sales = prompt("Enter your sales: ");
let commission = 0;
if (salaried === "yes") {
  if (sales < 300) {
    console.log("No Commission !");
  } else if (sales >= 300 && sales < 500) {
    commission = sales * (1 / 100);
    console.log("your commission: " + commission);
  } else if (sales >= 500) {
    commission = sales * (2 / 100);
    console.log("your commission: " + commission);
  }
} else {
  if (sales >= 300 && sales < 500) {
    commission = sales * (2 / 100);
    console.log("your commission: " + commission);
  } else if (sales >= 500) {
    commission = sales * (3 / 100);
    console.log("your commission: " + commission);
  }
}
