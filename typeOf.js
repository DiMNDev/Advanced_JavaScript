console.log("What are the types in JavaScript?");
console.log(typeof 1);
console.log(typeof "a");
console.log(typeof true);
console.log(typeof undefined);
console.log(`${typeof null} : null`); //This returns Object
console.log(typeof {});
console.log(typeof NaN); //NaN equal to ANYTHING is always false, even itself.

/*
JavaScript is a dynamically typed language. Meaning the variable types can change during
runtime. If we set the value of a to equal 1 typeof will return a number, however if we
later assign a to have the value of "1", typeof will now return string.

*/

var a;
console.log(a); //Returns undefined

var b = null; //The JavaScript engine will never set a value to null for you, only humans set null to represent no value.
console.log(b); //Returns null

console.log("Loose Comparision");
console.log(null == undefined); //Same value
console.log(undefined == null); //Same value
console.log("Strict Comparision");
console.log(null === undefined); //Same value, Different type
console.log(undefined === null); //Same value, Different type

/* 
Equality operators = , ==, ===
= | This operator is the assignment operator "Assignment"
== | This operator is the value check operator "Loose" - type coercion
=== | This operator is the value and type check operator "Strict"
*/

let n = NaN;
console.log(n);
console.log(NaN == NaN); //Because NaN==NaN returns false it can be hard to check if NaN equals NaN.
console.log(n !== n); //This is really the only way to check if NaN equals NaN.
n = "";
console.log(n !== n);
