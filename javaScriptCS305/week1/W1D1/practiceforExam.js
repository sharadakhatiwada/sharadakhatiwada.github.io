// "use strict";

// let x = 5;
// let y = "7";
// let test = true;

// let result = x + y;
// console.log(result);
// console.log(typeof result);

// result = x + test;
// console.log(result);
// console.log(typeof result);

// result = test + y;
// console.log(result);
// console.log(typeof result);

// result = y * 2;
// console.log(result);
// console.log(typeof result);

// function sum(num1 = 0, num2 = 3) {
//   return num1 + num2;
// }
// console.log(sum());
// "use strict";
// if ("false") console.log(0);
// else console.log(1);

// function a() {
//   return b;
// }
// function b() {
//   console.log("b");
// }
// console.log(a()());

function Square(side) {
  this.side = side;
  function area() {
    return this.side * this.side;
  }
}
