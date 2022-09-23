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


let group = {
  title: "Our group",
  students: ["John", "Pete", "Alice"], 
  showList(){
    this.students.forEach(function (student)=>{
        console.log("title:"  + this.title, "student:" + this.student)
    });
  }
};
group.showList(); 