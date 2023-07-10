/*
1: init
2: Object.create(param1,param2{})
3: Facorty Function
*/

var Person = {
  //1:
  //   init: function (first_name, last_name) {
  //     this.first_name = first_name;
  //     this.last_name = last_name;
  //     return this;
  //   },
  full_name: function () {
    return this.first_name + " " + this.last_name;
  },
};

// Person.prototype.full_name_prototype = function () {
//     return this.first_name + " " + this.last_name;
//   };

//2:
// var josh = Object.create(person, {
//   first_name: {
//     value: "Josh",
//   },
//   last_name: {
//     value: "Arnold",
//   },
// });

//3:
// function PersonFactory(firstName, lastName) {
//   var person = Object.create(Person);
//   person.first_name = firstName;
//   person.last_name = lastName;
//   return person;
// }
// josh = PersonFactory("Josh", "Arnold");
// 1:
// josh.init("Josh", "Arnold");

var Professional = Object.create(Person, {
  init: {
    value: function (honorific, first_name, last_name) {
      this.honorific = honorific;
      this.first_name = first_name;
      this.last_name = last_name;
    },
  },
  professionalName: {
    value: function () {
      return this.honorific + " " + this.first_name + " " + this.last_name;
    },
  },
});
var josh = Object.create(Professional);
josh.init("Mr.", "Josh", "Arnold");
console.log(josh.full_name());
console.log(josh.professionalName());
