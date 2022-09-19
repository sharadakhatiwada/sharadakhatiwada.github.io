"use strict";
const student1 = {
  studentId: "s101",
  quizAnswer: [1, 1, 2, 4],
};
const student2 = {
  studentId: "s102",
  quizAnswer: [2, 1, 2, 2],
};
const student3 = {
  studentId: "s103",
  quizAnswer: [3, 1, 3, 4],
};

const quiz = [student1, student2, student3];

/**
 *
 * @param {array} quiz array of students  objects
 * @param {array} correctAnswer list of correct answer
 * @returns{array} score of student
 */
function gradeQuiz(quiz, correctAnswer) {
  let finalArray = [];
  for (let eachStudent of quiz) {
    let score = 0;
    let ans = eachStudent.quizAnswer;
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] === correctAnswer[i]) {
        score++;
      }
    }
    finalArray.push(score);
  }
  return finalArray;
}
console.log(gradeQuiz(quiz, [3, 1, 2, 4]));

("use strict");
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum = sum + salaries[key];
// }
// console.log(sum);
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}
console.log(multiplyNumeric(menu));

// let arr1 = [1, 2];
// let arr2 = [1, 2];
// console.log(arr1 == arr2);

// function area() {
//   //   return this.side * this.side;
// }
// area();

// function averageLength(input) {
//   let words = input.split(" ");
//   let sum = words.reduce((accum, item) => {
//     accum = accum + item.length;
//     return accum;
//   }, 0);
//   let average = sum / words.length;
//   return average;
// }
// console.log(averageLength("what a great day"));

// function area() {
//   console.log(this);
//   console.log(this.side);
//   return this.side * this.side;
// }
// const square1 = {
//   side: 5,
//   area: area,
// };
// console.log(area());
// console.log(square1.area());
// console.log("hello hi".split(" "));

// let student = { id: 123, name: "john" };
// const { id: studentId, name: name } = student;
// console.log(name);

// console.log(studentId);

// function vowelCount(input) {
//   let letters = input.split("");
//   let vowelCountObj = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0,
//   };
//   const vowels = ["a", "e", "i", "o", "u", "I"];
//   for (let letter of letters) {
//     if (vowels.includes(letter)) {
//       vowelCountObj[letter.toLowerCase()] =
//         vowelCountObj[letter.toLowerCase()] + 1;
//     }
//   }
//   return vowelCountObj;
// }
// console.log(vowelCount("It is a cold day in january"));

function reverseAll(input) {
  let words = input.split(" ");
  words.reverse();
  let reverseWord;
  let stringWord = "";
  //   let letter = words.split("");
  for (let i = 0; i < words.length; i++) {
    reverseWord = words[i].split("");
    reverseWord.reverse();
    stringWord = stringWord + " " + reverseWord.join("");
  }
  return stringWord;
}
console.log(reverseAll("Hi how are you"));
