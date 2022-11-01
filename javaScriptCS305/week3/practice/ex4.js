"use strict";
/* eslint-disable */
function Item(id, name, price, discount, freeshipping) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.discount = discount;
  this.freeshipping = freeshipping ? freeshipping : false;
  this.getFinalPrice = function () {
    return this.price - this.price * (this.discount / 100);
  };
}
const item1 = new Item(1, "cell phone", 500, 10);
const item2 = new Item(2, "book", 50, 0, true);
const item3 = new Item(3, "table", 500, 1);
const item4 = new Item(4, "adapter", 40, 2, true);
let shoppingCart = [item1, item2, item3, item4];
function getCheckoutPrice() {
  let finalPrice = 0;
  for (let item of shoppingCart) {
    let priceAfterDiscount = item.getFinalPrice();
    if (!item.freeshipping) {
      priceAfterDiscount = priceAfterDiscount + 3;
    }
    finalPrice = finalPrice + priceAfterDiscount;
  }
  return finalPrice;
}
console.log(getCheckoutPrice(shoppingCart));
function getItemsPricedOver100() {
  const getArray = [];
  for (let item of shoppingCart) {
    if (item.price > 100) {
      getArray.push(item);
    }
  }
  return getArray;
}
console.log(getItemsPricedOver100(shoppingCart));

function findCheapestItem() {
  let cheapestItemPrice = 10000;
  let cheapestObject = {};
  for (let item of shoppingCart) {
    if (cheapestItemPrice > item.getFinalPrice()) {
      cheapestItemPrice = item.getFinalPrice();
      cheapestObject = { name: item.name, price: cheapestItemPrice };
    }
  }
  return cheapestObject;
}
console.log(findCheapestItem(shoppingCart));
const array123 = [1, 2, 3];
let newArray = array123.map((item) => item * item);
console.log(newArray);

let sum = array123.reduce((accum, item) => {
  accum = accum + item;
  return accum;
});
console.log(sum);
/* write a function, maxPoints, to find and return the maximum points of any single player.  Do it 

first with a for .. of loop and then using reduce */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 4:",  maxPoints(players)); 

Use reduce to find the sum of an array.
Use reduce to find the largest element of an array.
[you may run out of time for these in the quiz, but they will be good practice later for the exam. Note that there are 0 points in this quiz for this question.]

Maximum number of characters (including HTML tags added by text editor): 32,