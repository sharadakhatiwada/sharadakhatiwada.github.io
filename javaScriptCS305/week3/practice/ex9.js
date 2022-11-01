"use strict";
/* eslint-disable */
function getAverageAge(array) {
  let sum = 0;
  for (let person of array) {
    sum = sum + person.age;
  }

  let averageAge = sum / array.length;
  //   return Number(averageAge.toFixed(2));

  let newArray = array.reduce((accum, item) => {
    if (accum.age < item.age) {
      accum = item;
    }
    return accum;
  });
  return newArray;
}

let array = [
  { name: "ram", age: 29 },
  { name: "syam", age: 40 },
  { name: "ganga", age: 19 },
];
console.log(getAverageAge(array));

let myObj = {
  user1: {
    fname: "john",
    lname: "doe",
  },
  user2: {
    fname: "john",
    lname: "doe",
  },
  equals: function () {
    return this.user1 === this.user2;
  },
};
console.log(myObj.equals());
