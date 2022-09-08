// Put your solutions for the following into your GitHub course repository according to the instructions in
// Sakai > Resources > lab helpers > setupGithubRepository.pdf. Be sure to include function calls that test
// your functions.
// 1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// number argument for salesAmount. It should return the sales commission based on following
// rules. First make a defining table for the function.
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// first 500)
// • If the salesman is not salaried then
// • no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500)
// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));
const assert = require("assert");
const prompt = require("prompt-sync")();

function computeSalesCommission(Boolean, sales) {
  let commission = 0;
  if (sales < 300) {
    0;
  } else if (Boolean === true) {
    if (sales >= 300 && sales <= 500) {
      commission = sales * (1 / 100);
    } else if (sales > 500) {
      commission = 500 * (1 / 100) + (sales - 500) * (2 / 100);
    }
  } else {
    if (sales >= 300 && sales <= 500) {
      commission = sales * (2 / 100);
    } else if (sales > 500) {
      commission = 500 * (2 / 100) + (sales - 500) * (3 / 100);
    }
  }
  return commission;
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

exports.computeSalesCommission = computeSalesCommission;
