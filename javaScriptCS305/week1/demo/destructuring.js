"use strict";

// destructure the team array onto variables with the same names as the elements, but all lower case
// console.log("expect Bob", bob );
// console.log("expect Jim", jim);

// const team = ["Bob", "Fred", "Jim"];
// let(first, second, third )= team;
// console.log(first);

//object sestructuring
// const teams:{ point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" };

const john = {
  name: "John",
  surname: "Smith",
  isAdmin: false,
  birthday: { year: 2000, month: "February", day: 3 },
  friends: [0, 1, 2, 3],
};
const johnJSON = johnJSON.stringify(john);
console.log("john string is ", johnJSON);
const johnClone = JSON.parse(johnJSON);
console.log(" john clone is ", johnClone);
