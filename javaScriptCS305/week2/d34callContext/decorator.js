// Fix the code below using an arrow function and then using bind
"use strict";
/* eslint-disable */
// module.exports = { spy };

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
