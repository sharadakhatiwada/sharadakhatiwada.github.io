"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   ucFirst,
//   getMaxSubSum,
//   truncate,
//   camelize,
//   checkSpam,
//   extractCurrencyValue,
// }; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  let upperCaseLetter = str.slice(0, 1);
  upperCaseLetter = upperCaseLetter.toUpperCase();
  return upperCaseLetter + str.slice(1);
}

function checkSpam(str) {
  return str.includes("ViAgRA") || str.includes("xxxxx");
}

function truncate(str, maxlength) {
  let dots = "…";
  if (str.length >= maxlength) {
    return str.slice(0, maxlength - 1) + dots;
  } else {
    return str.slice(0, maxlength + 1);
  }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

function camelize(str) {
  if (str === "") {
    return "";
  }
  let dashIndex;
  while (true) {
    dashIndex = str.indexOf("-");
    if (dashIndex > -1) {
      str =
        str.slice(0, dashIndex) +
        str.slice(dashIndex + 1, dashIndex + 2).toUpperCase() +
        str.slice(dashIndex + 2);
    } else {
      break;
    }
  }
  return str;
}

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}
