"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser

module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply }; //add all of your function names here that you need for the node mocha tests
*/
/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  let maxNum = a;
  if (a < b) {
    maxNum = b;
  }
  if (b < c) {
    maxNum = c;
  }
  if (a < c) {
    maxNum = c;
  }
  return Number(maxNum);
}

exports.maxOfThree = maxOfThree;

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let tot = 0;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}
exports.sum = sum;

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} multiply of arr numbers
 */
function multiply(arr) {
  let tot = 1;
  for (const number of arr) {
    tot = tot * number;
  }

  return tot;
}
exports.multiply = multiply;
