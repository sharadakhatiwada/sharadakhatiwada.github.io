"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) return null;
  let maxSalary = 0;
  let maxName = "";
  for (let item of Object.entries(salaries)) {
    let [name, salary] = item;
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
