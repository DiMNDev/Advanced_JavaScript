"use strict";

function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.full_name = function () {
    return first_name + " " + last_name;
  };
}

Person.prototype.full_name_prototype = function () {
  return this.first_name + " " + this.last_name;
};
//Using the new keyword here it will tell JavaScript we want a new object of Person, this makes the this work? constructor?
var dude = new Person("Josh", "Arnold");
dude.first_name = "frank";
console.log(dude.full_name_prototype());
console.log(dude.full_name());
//This is another way to create a "new" object?
// var dude = {};
// Person.call(dude, "asim", "hussain");
