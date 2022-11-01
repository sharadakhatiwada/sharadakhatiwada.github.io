"use strict";

// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
//   sayHi();
// }

// const bar = foo.bind(car);
// const car = {
//   name: "mazda",
// };

// function foo() {
//   console.log("name = " + this.name);
// }

// function wrapper(foo) {
//   return function (...args) {
//     return foo.apply(car, args);
//   };
// }

// foo = wrapper(foo);
// foo();

// const bar = foo(car);
// function foo() {}
// const wrapper = () => {
//   return foo.car;
// };

const user = {
  name: "bob",

  loginOk: function (login) {
    if (login === this.namme) {
      return true;
    } else {
      return false;
    }
  },
};

const loginOk = user.loginOk.bind(user);

const loginHi = user.loginOk.call(user);
console.log(loginHi);
