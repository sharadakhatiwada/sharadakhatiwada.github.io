"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests

function copyArray(arr) {
  return [...arr];
}

function concat(arr1, arr2) {
  return arr1.concat(arr2);
}

function findMin(...numbers) {
  return Math.min(...numbers);
}

function combineObjs(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
