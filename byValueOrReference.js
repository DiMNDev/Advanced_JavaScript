// "use strict";

//Passing a variable -passed by value
var a = true; //Set initial value
function foo(a) {
  //Passes a copy of a into the function
  a = false; //Does NOT change the original value defined on line 4
  console.log(a); //Will log false set from line 6
}
foo(a);
console.log(a); //Will log true set from line 4

//Passing an object -passed by reference
var b = {};
function moo(b) {
  b.moo = false; //Actually references the objects and will mutate it
}
moo(b);
console.log(b);
