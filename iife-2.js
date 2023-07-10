"use strict";
//What is an IIFE?
//Immediatly Invoked Function Expression

var thing = { Hello: "IIFE-2" }; //Immediatly Invoked upon load
console.log("IIFE : ", thing); //Prints second because it's loaded second

//Because iife-2 is called last our global variable 'thing' will have that value.

//Instead of trying to tiptoe around global variables in this way we can rewrite our functions like this

(function () {
  var thing = { Hello: "IIFE-2-1" }; //Thing now has a limited scope
  console.log("IIFE-2-1", thing);
})(); //This will be immediatley invoked after declaration
