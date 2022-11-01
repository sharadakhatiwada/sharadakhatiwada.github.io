"use strict";
/* eslint-disable */

let newObj = {};
let arr = [4, 5, 6, 8, 9];
let result = arr.map((element, index) => (newObj[index] = element));
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths); // 5,7,6
console.log(newObj);
