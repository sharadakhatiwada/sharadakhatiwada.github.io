"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
function inArray(arr) {
  return function (item) {
    return arr.includes(item);
  };
}

/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
function inBetween(low, high) {
  return function (number) {
    if (number >= low && number <= high) return true;
    else return false;
  };
}

/**
 *
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
  return function (a, b) {
    if (a[fieldName] < b[fieldName]) return -1;
    else if (a[fieldName] > b[fieldName]) return 1;
    else return 0;
  };
}

/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  const newArray = [];
  for (let i = 0; i <= 5; i++) {
    const func = function () {
      return i;
    };
    newArray[i] = func;
  }
  return newArray;
}

let army = makeArmy();

//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
