//Functions assigned to variables are "function expressions"
let callBack = () => {
  console.log("setTimeout called!");
};
//callBack and cb are essentially the same.
let cb = function () {
  console.log("setTimeout called!");
};

setTimeout(callBack, 1000);
//Fat arrow anon function expression
setTimeout(() => {
  console.log("Big Arrow Anon Func");
}, 2000);

//Long fat arrow with single operation
let addLong = (a, b) => {
  return a + b;
};
console.log(addLong(1, 2));

//Shot fat arrow with single operation
let addShort = (a, b) => a + b;
console.log(addShort(1, 2));

//The fat arrow will help us stabilize our this keyword
let obj = {
  name: "myOBJ",
  sayLater: function () {
    //Using fat arrow syntax it always takes the this from where it is defined.
    console.log(this.name);
    setTimeout(() => {
      //using the function keyword as an anon function it will return blank
      //using the fat arrow here returns the "this" we want
      console.log(`${this.name}`);
    }, 2500);
  },
};
obj.sayLater();

/*
It's important to note that arrow functions (() => {}) 
behave differently when it comes to this. They don't bind 
their own this context but instead inherit this from 
the surrounding scope.

To summarize, regular functions have their own this
binding based on how they are called, while arrow 
functions inherit this from their surrounding scope 
where they are defined.
 -ChatGPT
*/
