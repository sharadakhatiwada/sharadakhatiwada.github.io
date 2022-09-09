"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser

module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply }; //add all of your function names here that you need for the node mocha tests
*/
/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  let maxNum = a;
  if (maxNum < b) {
    maxNum = b;
  }
  if (maxNum < c) {
    maxNum = c;
  }
  return Number(maxNum);
}

exports.maxOfThree = maxOfThree;

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let tot = 0;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}
exports.sum = sum;

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} multiply of arr numbers
 */
function multiply(arr) {
  let tot = 1;
  for (const number of arr) {
    tot = tot * number;
  }

  return tot;
}
exports.multiply = multiply;
/**
 *
 * @param {string value} words
 * @returns length og longest word
 */
function findLongestWord(words) {
  let LongestWord = "";
  for (let word of words) {
    if (LongestWord.length < word.length) {
      LongestWord = word;
    }
  }
  return LongestWord.length;
}

exports.findLongestWord = findLongestWord;
/**
 *
 * @param {user can input anything} array
 * @returns {new array with the reverse position from input}
 */
/**
 *
 * @param {*} array
 * @returns
 */
function reverseArray(array) {
  const newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

exports.reverseArray = reverseArray;
function reverseArrayInPlace(array) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    let input = array[i];
    array[i] = array[j];
    array[j] = input;
  }
  return array;
}
exports.reverseArrayInPlace = reverseArrayInPlace;

function scoreExams(number, correctAnswer) {
  const totalScore = [];
  for (let i = 0; i < number.length; i++) {
    let count = 0;
    let studentAnswer = number[i];
    for (let j = 0; j < studentAnswer.length; j++) {
      if (studentAnswer[j] === correctAnswer[j]) {
        count++;
      }
    }
    totalScore.push(count);
  }

  return totalScore;
}
exports.scoreExams = scoreExams;

function generateArray(numberOfSubArray, sizeOfSubArray) {
  const finalSubArray = [];
  for (let i = 0; i < numberOfSubArray; i++) {
    let subArray = [];
    for (let j = 1; j <= sizeOfSubArray; j++) {
      subArray.push(j);
    }
    finalSubArray.push(subArray);
  }
  return finalSubArray;
}
exports.generateArray = generateArray;
