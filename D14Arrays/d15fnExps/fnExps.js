"use strict";

/**
 *@returns {number} double the input
 */
function double(number) {
  return number * 2;
}

/**
 * @returns {number} 100 times the input
 */
function times100(number) {
  return number * 100;
}

/**
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arrayInput, funcInput) {
  const newArr = [];
  for (let input of arrayInput) {
    let output = funcInput(input);
    newArr.push(output);
  }
  return newArr;
}
/**
 *
 * @param {number} input
 * @returns  tripple the input
 */
function tripple(input) {
  return input * 3;
}
/**
//  *
//  * @param {Array} inputAsArray
//  * @param {function} funcInput
//  * @returns calculate input as per function
//  */
// const myNewMap = function (inputAsArray, funcInput) {
//   const newArr = [];
//   for (let input of inputAsArray) {
//     let output = funcInput(input);
//     newArr.push(output);
//   }
//   return newArr;
// };
/**
 *
 * @param {Array} inputAsArray
 * @param {function} funcInput
 * @returns calculate input as per function
 */

// const myArrowFunc = (inputAsArray, funcInput) => {
//   const newArr = [];
//   for (let input of inputAsArray) {
//     let output = funcInput(input);
//     newArr.push(output);
//   }
//   return newArr;
// };

const annoTripple = function (input) {
  return input * 3;
};
const arroFuncTripple = (input) => {
  return input * 3;
};

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = {
//   double,
//   times100,
//   myMap,
//   tripple,
//   annoTripple,
//   arroFuncTripple,
// };

//add all of your function names here that you need for the node mocha tests
