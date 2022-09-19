"use strict";
/* eslint-disable */
function add(a, b) {
  let sum = a + b;
  return sum;
}
function mult(a, b) {
  let multiply = a * b;
  return multiply;
}
function execution(abc, num1, num2) {
  let result = abc(num1, num2);
  return result;
}
console.log(execution(mult, 10, 20));
