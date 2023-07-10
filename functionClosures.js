"use strict";

//What are function closures?

function sayHello(name) {
  var text = "Hello " + name;
  return function () {
    console.log(text);
  };
}
sayHello("Josh")(); //To immediatly invoke a function that is returned from another function

//Interview Question

var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function () {
    return i;
  };
}

// console.log(foo[0]());
// console.log(foo[1]());
console.log(foo[2]());

var fooy = [];
for (var i = 0; i < 10; i++) {
  (function (y) {
    fooy[y] = function () {
      return y;
    };
  })(i);
}

// console.log(foo[0]());
// console.log(foo[1]());
console.log(fooy[2]());

//When using strict mode, the eval(code) does not leak out of the eval block
var myName = "igloo";
var code = "var myName = 'asim';";
eval(code);
console.log(myName);

// What will this code print?
(function () {
  var a = 3;
})();
console.log("a defined? " + (typeof a !== "undefined"));

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(4)
);
//Original Salary was undefined : because the function was immediatly invoked
var salary = "1000$";
(function () {
  console.log("Original salary was " + salary);
  var salary = "5000$";
  console.log("My New Salary " + salary);
})();
