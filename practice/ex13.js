// Question 5 of 6	2 Points
// Recall the makeCounter code:

// function makeCounter() {

//   let count = 0;

//   return function() { return count++; };

// }
// Now modify makeCounter so that the callback it returns accepts an argument for the increment value, and also it returns a warning string whenever it has been incremented by a value greater than 1.  E.g.,

// const mycounter = makeCounter();

// myCounter(10);  //will return "Warning:  increment was by value greater than 1: " + x

// where x is the current count value as normal.

// Also, your counter should still handle the case where it is called with no argument and increments by 1 as normal.

// You can write this in vscode or an editor and then copy paste here.

function makeCounter() {
  let count = 0;

  return function (x) {
    if (x > 1) {
      const warning =
        "Warning:  increment was by value greater than 1: " + count;
      count = count + x;
      return warning;
    }
    if (x === undefined) x = 1;
    count = count + x;
    return count;
  };
}
const myCounter = makeCounter();

console.log(myCounter());
console.log(myCounter());
