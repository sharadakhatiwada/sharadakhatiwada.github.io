"use strict";
class Square {
  constructor(side) {
    this.side = side;
  }
}
function area() {
  return this.side * this.side;
}

Square.prototype.area = area;
const constSquare = new Square(5);

// console.log(constSquare.area());
// //console.log(Object.getOwnPropertyNames);
// console.log(Object.getOwnPropertyNames(constSquare).length);
// console.log(constSquare);

const square2 = Square;
console.log(square2);
