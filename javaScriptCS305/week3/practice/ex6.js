"use strict";
/* eslint-disable */

const numbers = [1, 5, 18, 2, 77, 108];
// let number = numbers.filter((item) => {
//   return item % 2 === 0;
// });
let number = numbers.find((item) => item % 2 === 0);
let indexOfFirstEven = numbers.findIndex((item) => item % 2 === 0);
console.log(number);
console.log(indexOfFirstEven);
