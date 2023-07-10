"use strict";

var asim = 1; //Global Scope

window.moo = 1; //Global Scope
//All global variables are properties of the window object.
console.log(window.asim);

function moo() {
  var foo = 1; //Local Scope
}
//This throws an error because foo is defined inside the function, it is only accessible inside the functions local scope.
// console.log(foo);

for (var i = 0; i < 4; i++) {
  var j = 7; //Defining j here and i above with the var keyword defines them in the Global Scope
}
console.log(i);
console.log(j);

//Let
for (let a = 0; a < 4; a++) {
  let b = 7; //Defining b here and a above with the let keyword we define them in the Block's Scope
}
//Each log will throw an error because a and b are outside the scope.
// console.log(a);
// console.log(b);

{
  const s = "Block"; //Defining with const shares the same Block Scope as the let keyword
  {
    console.log(s);
  }
  console.log(s);
  //Variables defined with const cannot be mutated after being defined
  //   s = "Square";
}
//Throws an error because it is outside of the Block Scope where it was defined
// console.log(s);
