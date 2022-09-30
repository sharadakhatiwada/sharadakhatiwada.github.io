"use strict";
/* eslint-disable */
/* global Account require  */
// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account {
  constructor(number, interest) {
    // this.number = number;
    super(number);
    this._type = "savings";
    this.interest = interest;
    super(interest);

    this.balance = 0.0;
  }
  getNumber() {
    return this.number;
  }
  getInterest() {
    return this.interest;
  }
  setInterest(interest) {
    this.interest = interest;
  }

  addInterest() {
    this._balance = this._balance + this._balance * (this.interest / 100);
  }

  toString() {
    return (
      "SavingsAccount " +
      this._number +
      ": balance: " +
      this._balance +
      " interest: " +
      this.interest
    );
  }

  endOfMonth() {
    this.addInterest();

    return (
      "Interest added SavingsAccount " +
      this._number +
      ": balance: " +
      Number(this._balance.toFixed(1)) +
      " interest: " +
      this.interest
    );
  }
}

/* global exports */

exports.SavingsAccount = SavingsAccount;
