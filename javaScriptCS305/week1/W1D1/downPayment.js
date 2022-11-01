// 5. Cost of House Down Payment
// Make a defining table and then write a program that calculates down payment for a home loan based
// on following rules. Your program should prompt for the cost and write the down payment amount to
// the console.
// Cost of House Down Payment
// $0 to less than 50K 5% of the cost
// $50K to less than 100K $1000 + 10% of (cost - $50K)
// $100K to less than 200K $2000 + 15% of (cost - $100K)
// $200K and above $5000 + 10% of (cost - $200K)
"use strict";
const prompt = require("prompt-sync")();
let downPayment = 0;

const cost = prompt("Enter Cost: ");
if (cost >= 0 && cost < 50000) {
  downPayment = cost * (5 / 100);
} else if (cost >= 50000 && cost < 100000) {
  downPayment = 1000 + (10 / 100) * (cost - 50000);
} else if (cost >= 100000 && cost < 200000) {
  downPayment = 2000 + (15 / 100) * (cost - 100000);
} else {
  downPayment = 5000 + (10 / 100) * (cost - 200000);
}
console.log("Your DownPayment is $" + downPayment);
