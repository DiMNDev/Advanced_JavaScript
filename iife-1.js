"use strict";
//What is an IIFE?
//Immediatly Invoked Function Expression

var thing = { Hello: "IIFE-1" }; //Immediatly Invoked upon load
console.log("IIFE : ", thing); //Prints first because it's loaded first

//Because iife-2 is called last our global variable 'thing' will have that value.

//Instead of trying to tiptoe around global variables in this way we can rewrite our functions like this

(function () {
  var thing = { Hello: "IIFE-1-1" }; //Thing now has a limited scope
  console.log("IIFE-1-1", thing);
})(); //This will be immediatley invoked after declaration
