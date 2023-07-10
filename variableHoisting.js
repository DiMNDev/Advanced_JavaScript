"use strict";

//What is Variable Hoisting?

//Hoisting Variables

//var a;
//JavaScript will "hoist" our variable declaration above where we call it.
//which is why we get undefined instead of throwing an error that a is not defined.
console.log(a); //returns undefined
var a = 1;

//Function Hoisting

moo(); //Calling the function before it is declared, JavaScript will also "hoist" functions
//which is why we don't see an error here when calling the function before it is defined
function moo() {
  console.log(a); //returns the value of a which is 1
}

//Functions as Variables Hoisting

//let foo;
//When we call foo() before it is declared in this manner we result in an error
//because foo is undefined it cannot run the function that is defined later in our code.
foo();

let foo = function () {
  console.log(a);
};
