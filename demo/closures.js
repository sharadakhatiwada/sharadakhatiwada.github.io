"use strict";
/* eslint-disable */
function makeCounter() {
  let count = 0;
  function innerfunc() {
    return count++;
  }
  return innerfunc;
}
const myCount = makeCounter();
const myCount1 = makeCounter();
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount1());

const a = 10;
function foo() {
  console.log(a);
}
function bar() {
  const a = 20;
  foo();
}
bar();

let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi();
