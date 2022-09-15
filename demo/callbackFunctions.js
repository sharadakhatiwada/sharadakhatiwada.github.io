"use strict";
// function myCallBack(func, arg) {
//   function cube(number) {
//     number = number * number * number;
//     return number;
//   }
//   function isEven(number) {
//     if (number % 2 === 0) return true;
//     else false;
//   }
// }
// console.log(myCallBack(cube, 10));

// ➢ Create 3 objects, student1, student2, student3
// ➢ property studentId : s101, s102, s103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively

// const student1 = {
//   studentId: "s101",
//   quizAnswers: [1, 1, 2, 4],
// };
// const student2 = {
//   studentId: "s102",
//   quizAnswers: [2, 1, 2, 2],
// };
// const student3 = {
//   studentId: "s103",
//   quizAnswers: [3, 1, 3, 4],
// };
// const quiz = [];
// quiz.push(student1, student2, student3);
// console.log(quiz);

// function gradeQuiz(students, correctAnswer) {
//   for (let student of students) {
//     let studentAns = student.quizAnswers;
//     let count;
//     for (let i = 0; i < studentAns.length; i++) {

//     }
//   }
// }

// let a = { x: 1 };
// let b = { x: 1 }; // two independent objects
// console.log(a == b); // false
// function getProperties(obj) {
//   const arrayOfObj = [];
//   for (let property in obj) {
//     arrayOfObj.push(property);
//   }
//   return arrayOfObj;
// }
// const gradeReport = { s101: 3, s102: 2, s103: 3 };
// console.log(getProperties(gradeReport));

// function circumference(r) {
//   if (isNaN(parseFloat(r))) {
//     return 0;
//   }
//   return parseFloat(r) * 2.0 * Math.PI;
// }
// console.log(circumference("abcdefgh"));

// let str = "Widget with id";
// console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
// console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive
// console.log(str.indexOf("id"));
// console.log(str.indexOf("with"));

// function Calculator() {
//   //implement this
//   this.setValues = function (a, b) {
//     this.a = a;
//     this.b = b;
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.multiply = function () {
//     return this.a * this.b;
//   };
// }

// Calculator();

// const abc = {
//   a: 1,
//   calc: function () {
//     console.log(this.a);
//   },
// };

// abc.calc();

// console.log(+"1234");
// console.log(parseInt("0"));
// const arr = [1, 5, 16, 3, 108];
// arr.forEach((element) => {
//   if (element % 2 === 0) console.log(element);
// });
// [1, 5, 16, 3, 108]
// function logEvens(element){
//   if(element% 2 ==0){
//     console.log(element);
//   }
// }

// const numbers = [1, 5, 18, 2, 77, 108];
// let newArr = numbers.filter((element) => element % 2 === 0);
// console.log(newArr);
// let greaterFifty = numbers.filter((num) => num > 50);
// console.log(greaterFifty);
// let findFirstEven = numbers.find((element) => element % 2 === 0);
// console.log(findFirstEven);

// let firstEvenIndex = numbers.findIndex((element) => element % 2 === 0);
// console.log(firstEvenIndex);

// let students = [
//   { name: "John", scores: [30, 40, 25, 70] },
//   { name: "Cena", scores: [35, 50, 20, 60] },
// ];

// let studentName = "Cen";
// find all scores greater than 30 for given student
// let findStudent = students.filter((student) => studentName === student.name);
// console.log(findStudent);
// let scoreAboveThirty = findStudent.filter((score) => score > 30);

// console.log(scoreAboveThirty);
// for (let student of students) {
//   if (studentName === student.name) {
//     let score = student.scores;
//     let scoreAboveThirty = score.filter((item) => item > 30);
//     console.log(scoreAboveThirty);
//     break;
//   }
// }

// function getMaxSubSum(arr) {
//   let sum = 0;
//   arr.reduce((element, sum) => element + sum), 0;
// }
// console.log(getMaxSubSum[(1, 2, 3)]);

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
console.log(camelize("aLotOf"));
