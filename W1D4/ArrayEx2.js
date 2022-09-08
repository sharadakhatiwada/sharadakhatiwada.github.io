"use strict";
/**
 *
 */
const exp = ["{", "}", "{", "{", "}", "}"];
let stack = [];
function balance(arr) {
  for (let express of exp) {
    if (express === "}") {
      stack = exp.pop;
    }
    if (express === "{") {
      stack = exp.push(express);
    }
  }
}
