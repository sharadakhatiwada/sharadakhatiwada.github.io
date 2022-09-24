"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
 */
// module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
function myMap(arr, func) {
  //IMPLEMENTATION NEEDED
  const numberArray = [];
  for (let number of arr) {
    numberArray.push(func(number));
  }
  return numberArray;
}

/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
function myFilter(arr, func) {
  const numberArray = [];
  for (let number of arr) {
    if (func(number)) {
      numberArray.push(number);
    }
  }
  return numberArray;
}

/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
function myReduce(arr, func, initialValue) {
  for (let number of arr) {
    let result = func(initialValue, number);
    initialValue = result;
  }
  return initialValue;
}
