"use strict";
//Define our psuedo class Person
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.full_name = function () {
  return this.first_name + " " + this.last_name;
};
//Define our psuedo class Professional
function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}
//This makes the full_name prototype function accessible from our prof object
Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function () {
  return this.honorific + " " + this.first_name + " " + this.last_name;
};

var prof = new Professional("Dr.", "Josh", "Arnold");
console.log(prof.professional_name());
console.log(prof.full_name());
