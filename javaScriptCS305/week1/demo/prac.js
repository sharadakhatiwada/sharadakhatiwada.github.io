"use strict";
/* eslint-disable */
// let name = "John";
// function sayHi() {
//   console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?
// let name = "John";
// function makeWorker() {
//   return function () {
//     console.log(name);
//   };
// }
// name = "Pete";
// // create a function
// let work = makeWorker();
// console.log(work());

// function makeCounter() {
//   let count = 1;
//   return function innerFunc() {
//     count++;
//     return count;
//   };
// }
// let counter1 = makeCounter();
// console.log(counter1());

// let counter2 = makeCounter();
// console.log(counter2());

// console.log(counter1());

// function b() {
//   function a() {
//     const x = 9;
//     console.log(x);
//   }
//   const x = 10;
//   a();
// }
// const x = 20;
// b();

// const john = {
//   name: "John",
//   surname: "Smith",
//   isAdmin: false,
//   birthday: { year: 2000, month: "February", day: 3 },
//   friends: [0, 1, 2, 3],
// };
// let jsonStr = JSON.stringify(john);

// console.log(jsonStr);

// let johnClone = JSON.parse(jsonStr);

// console.log(john === johnClone);
// const data = JSON.parse(jsonString);

// let [firstName, surname] = "Ilya Kantor".split(" ");
// const arr1234 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr1234;
// console.log(c);

// function makeWorker() {
//   let name = "John";
//   return function () {
//     console.log(name);
//   };
// }
// let name = "Pete";
// // create a function
// let work = makeWorker();
// // call it
// work();

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList() {
//     this.students.forEach(function (student) {
//       console.log(this.title + ": " + student);
//     });
//   },
// };

// let group = {
//   title: "Our group",
//   students: ["John", "Pete", "Alice"],
//   showList(){
//     this.students.forEach(function (student)=>{
//         console.log("title:"  + this.title, "student:" + this.student)
//     });
//   }
// };
// group.showList();
// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     console.log(`${phrase}, ${this.user}`);
//   }

//   sayHi(); //what will this show?  Assume running in nonstrict mode
// }
// let animal = { eats: true };
// // function Rabbit(name) { this.name = name;}

// let rabbit = { sleeps: true };
// rabbit.__proto__ = animal;

// console.log(rabbit.eats); // true
// function User(firstname, lastname, birthDate) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.birthDate = birthDate;
// }
// let user1 = new User("John", "Smith", new Date("2000-10-01"));
// let user2 = new User("Edward", "Hopkins", new Date("1991-11-14"));
// function getFullName() {
//   return this.firstname + " " + this.lastname;
// }
// function getAge() {
//   return new Date().getFullYear() - this.birthDate.getFullYear();
// }
// User.prototype.getFullName = getFullName;
// User.prototype.getAge = getAge;
// console.log(user1.getFullName());
// console.log(user1.getAge());

// let rabbit = {
//   jump: true,
//   run: function () {
//     console.log(this.jump);
//   },
// };
// const x = function () {
//   rabbit.run();
// };
// x();
// const y = rabbit.run.bind(rabbit);
// y();
// rabbit.run.call(rabbit);
// rabbit.run.apply(rabbit);
// const f = foo.call(abc, 1, 2, 3);
// foo.apply(abc, [1, 2, 3]);

// function Person() {
//   this.age = 15;
// }

// function Player(name, age) {
//   this.age = age;
//   this.name = name;
// }

// Player.prototype.play = function () {
//   return this.name + " is playing";
// };
// Player.prototype.name = "harry";
// let fred = new Player("Fred", 12);
// console.log(fred.age === 12);
// console.log(fred.__proto__.age);
// console.log(Player.__proto__.name);
// console.log(Player.__proto__.name === "Fred");
// console.log(Player.prototype.play() === "Fred is playing");
// console.log(Player.prototype.play());
// console.log(fred.play() === "Fred is playing");
// let pete = new Player("Pete", 15);
// console.log(Player.prototype.name === "Pete");
// console.log(Player.prototype.name);
// console.log(pete.__proto__ === fred.__proto__);
// console.log(pete.__proto__);

// const animal = {
//   eat: true,
// };

// const rabbit = {
//   eat: false,
//   jump: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit.jump);
// console.log(rabbit.__proto__.eat);

function Person(name) {
  console.log("Person1 this: ", this);

  this.name = name;
  console.log("Person2 this: ", this);
}
// const person1 = new Person("fred");
function Doctor(name, department) {
  console.log(this);

  Person.call(this, name, department);
  console.log(this);

  this.dept = department;
  console.log(this);
}

Doctor.prototype.report = function () {
  return "medical report";
};
Doctor.prototype.report1 = function () {
  return "medical report";
};
function Surgeon(name, department) {
  console.log(this);

  Doctor.call(this, name, department);
  console.log(this);
}
Surgeon.prototype.operate = function () {
  return "operation performed.";
};
Surgeon.prototype.__proto__ = Doctor.prototype;
const surg1 = new Surgeon("Fred", "Cardiology");
console.log(surg1.dept);

console.log(surg1.name);

console.log(surg1.report());

console.log(surg1);

console.log(surg1.__proto__);

console.log(surg1.prototype);

console.log(Surgeon.__proto__);

console.log(Surgeon.prototype);

console.log(Surgeon.prototype.__proto__);
