// Write code to create an array named scores and fill it with 5 test scores 10,
// 20, 30, 40 and 50.

"use strict";

function findAverage(score) {
  let sum = 0;

  for (let i = 0; i < score.length; i++) {
    sum = sum + score[i];
  }
  let average = sum / score.length;
  return average;
}
const average = console.log("Average is " + findAverage([10, 20, 30, 40, 50]));

const randomArray = console.log(
  "Average is " + findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
