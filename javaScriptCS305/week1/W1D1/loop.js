// 2. Write a loop that continually prompts for age until you enter age older than 18
// • Write both while and do while versions.
"use strict";
const prompt = require("prompt-sync")();

// using while loop
let age1 = prompt("Enter Your age: ");
while (age1 < 18) {
  age1 = prompt("Enter Your age: ");
}

// using Do while loop
let age2;
do {
  age2 = prompt("Enter Your age: ");
} while (age2 < 18);
