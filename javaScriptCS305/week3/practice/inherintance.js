"use strict";
/* eslint-disable */
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit.jumps); // ? (1)

// delete rabbit.jumps;

// console.log(rabbit.jumps); // ? (2)

// delete animal.jumps;

// console.log(rabbit.jumps);

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
// };
// table.__proto__ = head;
// let bed = {
//   sheet: 1,
//   pillow: 2,
// };
// bed.__proto__ = table;

// let pockets = {
//   money: 2000,
// };
// pockets.__proto__ = bed;
// console.log(pockets.sheet);
// console.log(pockets.glasses);

// "use strict";

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
//   name: "xyz",
//   setName(nameS) {
//     this.name = nameS;
//   },
// };

// let speedy = {
//   __proto__: hamster,
//   stomach: [],
// };

// let lazy = {
//   __proto__: hamster,
//   stomach: [],
// };

// // This one found the food
// speedy.eat("apple");
// console.log(speedy.stomach); // apple
// speedy.setName("rajiv");
// console.log(speedy.name);
// console.log(lazy.name);

// // This one also has it, why? fix please.
// lazy.eat("orange");
// console.log(lazy.stomach); // apple

// function Rabbit() {
//   this.eats = false;
// }
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;

// let rab = new Rabbit();
// console.log(rab.eats);
// console.log(rabbit.eats);
// console.log(rabbit);
// // delete rabbit.eats;
// console.log(rabbit.__proto__);
// console.log(rabbit.__proto__.eats);
// console.log(rabbit.eats);
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.toString());
