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
