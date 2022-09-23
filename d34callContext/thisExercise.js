"use strict";
/* eslint-disable */
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach((student) => {
      console.log(this.title + ": " + student);
    });
    this.students.forEach(
      function (student) {
        // Error: Cannot read property 'title' of undefined

        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};

group.showList();
