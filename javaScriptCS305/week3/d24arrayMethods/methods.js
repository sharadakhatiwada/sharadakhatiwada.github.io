"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   groupById,
//   unique,
//   filterRangeInPlace,
//   filterRange,
//   Calculator,
// }; //add all of your function names here that you need for the node mocha tests

function filterRange(arr, a, b) {
  let filteredArray = arr.filter((element) => element >= a && element <= b);
  return filteredArray;
}

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] >= a && arr[i] <= b)) {
      arr.splice(i, 1);
    }
  }
}

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (input) {
    let splittedInput = input.split(" ");
    let num1 = Number(splittedInput[0]);
    let operator = splittedInput[1];
    let num2 = Number(splittedInput[2]);
    return this.methods[operator](num1, num2);
  };

  this.addMethod = function (operator, callBack) {
    this.methods[operator] = callBack;
  };
}

function unique(arr) {
  let uniqueArr = [];
  for (let element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  return uniqueArr;
}

function groupById(array) {
  if (array.length === 0) return {};
  return array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}
