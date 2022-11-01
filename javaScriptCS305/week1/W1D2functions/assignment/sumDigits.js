// . Write functions sumDigits and multDigits that take an integer parameter and return the sum or
// product of the digits in the number. Use the / and % operators to find the digits.
// Input sumDigits Output multDigits Output
// 1234 10 24
// 102 3 0
// 8 8 8

/**
 *
 * @param {any number} input
 * @returns sum of every digit of input
 */
function sumDigits(input) {
  let sum = 0;
  while (input >= 10) {
    let remainder = parseInt(input % 10);
    input = parseInt(input / 10);
    sum = sum + remainder;
  }
  sum = sum + input;
  return sum;
}

/**
 *
 * @param {any number} input
 * @returns Multiplication of every digit of input
 */
function multDigits(input) {
  let multiply = 1;
  while (input >= 10) {
    let remainder = parseInt(input % 10);
    input = parseInt(input / 10);
    multiply = multiply * remainder;
  }
  multiply = multiply * input;
  return multiply;
}
console.log("Sum of 1234 is ", sumDigits(1234), multDigits(1234));
console.log("Sum of 102 is ", sumDigits(102), multDigits(102));
console.log("Sum of 8 is ", sumDigits(8), multDigits(8));

exports.sumDigits = sumDigits;
exports.multDigits = multDigits;
