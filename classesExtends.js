/* 
What is a class?
- A class is a blueprint for creating an object. 
*/
class Person {
  _firstName = "";
  _lastName = "";
  //Constructor is a function called when a new Object of the class is created
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    if (name === "") {
      console.error("firstName cannot be blank");
    } else {
      this._firstName = name;
    }
  }

  get lastName() {
    return this._lastName;
  }

  fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  whoAreYou() {
    return `Hi i'm ${this.fullName()}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and i'm studying ${this.course}`;
  }
}

let josh = new Student("Josh", "Arnold", "Software Development");
console.log(josh.fullName());
// josh.firstName = "goo";
console.log(josh.firstName);
console.log(josh.lastName);
console.log(josh.whoAreYou());

/*
ES5 style inheritance is laid out in the form of prototype
chaining.
by using prototypes we can chain together functions that are
designed as objects that have their own methods and properties.
In ES6, classes and inheritance using extends is effectively
the same as prototype chaining, just with syntactical sugar.
*/
