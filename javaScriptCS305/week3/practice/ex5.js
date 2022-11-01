"use strict";
/* eslint-disable */
const calculator = {
  setValue: function (operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  },
  sum: function () {
    return this.operand1 + this.operand2;
  },
  mul: function () {
    return this.operand1 * this.operand2;
  },
};
calculator.setValue(5, 10);
console.log(calculator.sum());
console.log(calculator.mul());
