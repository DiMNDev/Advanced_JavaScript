"use strict";

//CALL

function myFunc() {
  console.log(this);
}

myFunc.moo = 1; //Sets the property moo of myFunc to 1
console.log(myFunc.name); //Prints the name of the function
console.log(myFunc.toString()); //Prints the code of the function as a string
myFunc.call(myFunc); //Using the call method we can specify the this we want

console.log("nested function in object");
var checkThisOBJ = {
  checkThis: function () {
    console.log("checkThis", this);
    function checkOther() {
      console.log("checkOther", this);
    }
    checkOther.call(this);
  },
};
checkThisOBJ.checkThis();

//.call method with parameters
function a(b, c, d) {
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}
//The first parameter we pass call is the this we want,
//all trailing parameters are passed into the function
a.call(a, 2, 3, 4); //Use call unless you need a variable number of parameters
//then use apply, which accepts the parameters as an array.
a.apply(a, [2, 3, 4]);
//Here's a better example of when we might want to use apply

//APPLY

function sum() {
  console.log(this);
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
    console.log(total);
  }
  return total;
}

var things = [1, 2, 3, 54, 3, 2, 56, 7, 9, 88];
//Again the first parameter is our "this" we wish
//The second parameter is an array of parameters to be passed into the function
var x = sum.apply(sum, things);
console.log(x);

//BIND
//Bind only works on functions that are declared as variables
var t = function () {
  console.log(this);
}.bind(1);
t();

var bound = {
  func: t,
};

bound.func();

var boundFunc = {
  bindThis: function () {
    var checkOther = function () {
      console.log(this);
    }.bind(this);
    checkOther();
  },
};
boundFunc.bindThis();
