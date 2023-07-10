//Use strict mode
"use strict";

//Undefined variable error
var theVal = 0;
thval = 1;
if (theVal > 0) {
  console.log("Sooper Strict");
}

//Reserved keyword error

var let = 1;

//Delete unqualified
var foo = 1;
delete foo;

function moo(arg1) {
  delete arg1;
}
delete moo;

//a is not defined, in non-strict mode a will leak a log will print
eval("var a = 1");
console.log(a);
