// 3. Cost of House Down Payment
// Make a defining table and then write a function that calculates down payment for a home loan based on
// following rules. Your function should have a parameter for the cost and return the down payment
// amount.
// Cost of House Down Payment
// $0 to less than 50K 5% of the cost
// $50K to less than 2500+100K $2500 + 10% of (cost - $50K)
// $100K to less than 200K $7500 + 15% of (cost - $100K)
// $200K and above $20000 + 10% of (cost - $200K)
// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));

// Defining Table
// input: cost
// output: down Payment
// process: calculate downpayment using cost and percentage on cost
const assert = require("assert");
/**
 *
 * @param {cost of house/property} cost
 * @returns down payment
 */

function calculateDownpayment(cost) {
  let downPayment = 0;
  if (cost >= 0 && cost < 50000) {
    downPayment = cost * (5 / 100);
  } else if (cost >= 50000 && cost < 100000) {
    downPayment = 2500 + (cost - 50000) * (10 / 100);
  } else if (cost >= 100000 && cost < 200000) {
    downPayment = 7500 + (cost - 100000) * (15 / 100);
  } else {
    downPayment = 20000 + (cost - 200000) * (10 / 100);
  }
  return downPayment;
}
console.log("expect 2000: ", calculateDownpayment(40000));
console.log("expect 2500: ", calculateDownpayment(50000));
console.log("expect 7500: ", calculateDownpayment(100000));
console.log("expect 25000: ", calculateDownpayment(250000));

exports.calculateDownpayment = calculateDownpayment;
