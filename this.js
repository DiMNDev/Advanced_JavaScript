/*
This is unstable, it is not determined by how to code is written on the page but by
context, how a function is executed. We can stablize it by 
*/

console.log(this);

this.asim = 1;

console.log(this.asim);
console.log(window.asim);
console.log(asim);

function checkThis() {
  console.log(this);
}
checkThis();

//Line 17 and line 21 print out the same object
var checkThisOBJ = {
  checkThis: function () {
    console.log(this);
  },
};
checkThisOBJ.checkThis();
console.log(checkThisOBJ);
//This demonstrates how the this keyword can change and point to other objects based on how they are called
var func = checkThisOBJ.checkThis;
func(); //This now points to the window

//checkThisOBJ with a nested function
console.log("nested function in object");
var checkThisOBJ2 = {
  checkThis: function () {
    console.log(1, this);
    function checkOther() {
      console.log(2, this);
    }
    checkOther();
  },
};
checkThisOBJ2.checkThis();
console.log(3, checkThisOBJ2);
//This demonstrates how the this keyword can change and point to other objects based on how they are called
var func = checkThisOBJ2.checkThis;
func(); //This now points to the window

//checkThisOBJ with a nested function : tell this what to point to
console.log("nested function in object");
var checkThisOBJ3 = {
  checkThis: function () {
    let self = this;
    console.log(1, self);
    function checkOther() {
      console.log(2, self);
    }
    checkOther();
  },
};
checkThisOBJ3.checkThis();
console.log(3, checkThisOBJ3);
//This demonstrates how the this keyword can change and point to other objects based on how they are called
var func = checkThisOBJ3.checkThis;
func(); //This now points to the window
