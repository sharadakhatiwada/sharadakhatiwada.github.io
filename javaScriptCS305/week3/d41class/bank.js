"use strict";
/* eslint-disable */
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;

class Bank {
  constructor() {
    this._accounts = [];
  }
  addAccount() {
    this._accounts.push(new Account(this._accounts.length + 1));
  }
  addSavingsAccount(interest) {
    const savingsAccount = new SavingsAccount(
      this._accounts.length + 1,
      interest
    );
    this._accounts.push(savingsAccount);
  }
  addCheckingAccount(overdraft) {
    const checkingAccount = new CheckingAccount(
      this._accounts.length + 1,
      overdraft
    );
    this._accounts.push(checkingAccount);
  }
  closeAccount(number) {
    let accounttoClose = this._accounts.find((item) => item._number === number);
    let toClose = this._accounts.indexOf(accounttoClose);
    this._accounts.splice(toClose, 1);
  }
  accountReport() {
    let report = "";
    for (let account of this._accounts) {
      report = report + account.toString() + "\n";
    }
    return report;
  }
  endOfMonth() {
    let report = "";
    for (let account of this._accounts) {
      report = report + account.endOfMonth() + "\n";
    }
    return report;
  }
}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// exports.Bank = Bank;
