"use strict";
/* eslint-disable */
// You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   doubleNums,
//   doubleAges,
//   filterEven,
//   filterOver10,
//   findEvenNum,
//   findEvenAge,
//   includesEvenAge,
//   includesEvenNum,
// }; //add all of your function names here that you need for the node mocha tests
// const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
// const peopleArray = [
//   { name: "Sam", age: 15 },
//   { name: "William", age: 6 },
//   { name: "Lucy", age: 13 },
//   { name: "Barney", age: 80 },
// ];
function doubleNums(arr) {
  return arr.map((num) => num * 2);
}

function doubleAges(arr) {
  return arr.map((item) => {
    const newItem = new Object();
    for (let property in item) {
      newItem[property] = item[property];
    }
    newItem.age = newItem.age * 2;
    return newItem;
  });
}

function filterEven(arr) {
  return arr.filter((item) => item % 2 === 0);
}

function filterOver10(arr) {
  return arr.filter((item) => {
    if (item.age > 10) return item;
  });
}

function findEvenNum(arr) {
  return arr.find((item) => item % 2 === 0);
}

function findEvenAge(arr) {
  return arr.find((item) => item.age % 2 === 0);
}

function includesEvenNum(arr) {
  return arr.filter((item) => item % 2 === 0).length > 0;
}

function includesEvenAge(arr) {
  return arr.filter((item) => item.age % 2 === 0).length > 0;
}
