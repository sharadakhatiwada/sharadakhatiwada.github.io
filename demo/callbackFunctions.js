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

let a = { x: 1 };
let b = { x: 1 }; // two independent objects
console.log(a == b); // false
