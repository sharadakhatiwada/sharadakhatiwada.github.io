// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));
"use strict";
const assert = require("assert");
const {
  convertFahrenheit,
} = require("../W1D2functions/assignment/calculatingTemperature");
const {
  computeSalesCommission,
} = require("../W1D2functions/assignment/commissionComputation");

const {
  compoundInterest,
} = require("../W1D2functions/assignment/compoundInterest");

const {
  calcDistance,
} = require("../W1D2functions/assignment/distanceCalculation");

const {
  calculateDownpayment,
} = require("../W1D2functions/assignment/downPayment");

const {
  sumDigits,
  multDigits,
} = require("../W1D2functions/assignment/sumDigits");

// Compound Interest Test
describe("test of compoundInterest", function () {
  it("test compound interest when princple is 100, interest is 10 and number of year is 1", function () {
    assert.strictEqual(compoundInterest(100, 10, 1), 110.47);
  });
  it("tests of compoundInterest when principle is 10000, interest rate is 5 and year id 10", function () {
    assert.strictEqual(compoundInterest(10000, 5, 10), 16470.09);
  });
});

// sales commission test

// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));

describe("test of ComputSalesCommission", function () {
  it("tests salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function () {
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
});

// Down Payment Test
describe("test of calculateDownPayment", function () {
  it("test 40000 cost", function () {
    assert.strictEqual(calculateDownpayment(40000), 2000);
  });
  it("test 50000 downpayment", function () {
    assert.strictEqual(calculateDownpayment(50000), 2500);
  });
  it("test 100,000 cost", function () {
    assert.strictEqual(calculateDownpayment(100000), 7500);
  });
  it("test 250000 downpayment", function () {
    assert.strictEqual(calculateDownpayment(250000), 25000);
  });
});

//Sum Digit of Number Test
describe("sum every digit of the number", function () {
  it("sum of 1234 is", function () {
    assert.strictEqual(sumDigits(1234), 10);
  });
  it("sum of 102", function () {
    assert.strictEqual(sumDigits(102), 3);
  });
  it("sum of 8", function () {
    assert.strictEqual(sumDigits(8), 8);
  });
});

// Multiply Digit of Number Test
describe("multiply every digit of number", function () {
  it("multiply 1234", function () {
    assert.strictEqual(multDigits(1234), 24);
  });
  it("multiply 102", function () {
    assert.strictEqual(multDigits(102), 0);
  });
  it("multiply 8", function () {
    assert.strictEqual(multDigits(8), 8);
  });
});

// Covert Fahrenheight

describe("convert fahrenheit into celcius", function () {
  it("coverting 32 fahrenheit into celsius", function () {
    assert.strictEqual(convertFahrenheit(32), 0);
  });
  it("converting 0 fahrenheit into celcius", function () {
    assert.strictEqual(convertFahrenheit(0), -17.7778);
  });
  it("converting 212 fahrenheit into celcius", function () {
    assert.strictEqual(convertFahrenheit(212), 100);
  });
  it("converting 100 fahrenheit into celcius", function () {
    assert.strictEqual(convertFahrenheit(100), 37.7778);
  });
});

// Calculate Distance
describe("calculatting distance of two points of x-coordinate and y-coordinate", function () {
  it("calcute distance of x1,x2, y1, y2", function () {
    assert.strictEqual(calcDistance(0, 0, 5, 5), 7.07);
  });
});
