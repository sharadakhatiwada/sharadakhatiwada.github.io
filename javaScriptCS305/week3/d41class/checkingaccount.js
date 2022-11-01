"use strict";
/* global Account  */
/* eslint-disable */
// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }
  getNumber() {
    return this._number;
  }
  setOverdraft(limit) {
    this._overdraft = limit;
  }
  getOverdraft() {
    return this._overdraft;
  }
  withdraw(amount) {
    if (amount > this._balance + this._overdraft) {
      throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
    }
    this._balance -= amount;
  }
  toString() {
    return (
      "CheckingAccount " +
      this._number +
      ": balance: " +
      this._balance +
      " overdraft limit: " +
      this._overdraft
    );
  }
  endOfMonth() {
    if (this._balance < 0) {
      return (
        "Warning, low balance CheckingAccount " +
        this._number +
        ": balance: " +
        this._balance +
        " overdraft limit: " +
        this._overdraft
      );
    } else return "";
  }
}

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// exports.CheckingAccount = CheckingAccount;
