//This code throws an error because it calls animalFunc
//from the global scope, therefore the value of this is
//the window, and window does not have the property kind.
// "use strict";
// var animal = {
//   kind: "Cow",
//   which: function () {
//     console.log(this.kind);
//   },
// };
// var animalFunc = animal.which;
// animalFunc();

//This is the object window
//BUT in strict mode "this" will return undefined
"use strict";
function sayHello(last_name) {
  console.log("Hello " + this + " " + last_name);
}
sayHello("Hussain");

//functions as variables(function expressions) can accept the .bind() method
// ("use strict");
// var sayHello = function (last_name) {
//   console.log("Hello " + this + " " + last_name);
// }.bind("Asim");
// sayHello("Hussain");

//Bind cannot be used on functions that are not variables
// "use strict";
// function sayHello(last_name) {
//   console.log("Hello " + this + " " + last_name);
// }.bind("Asim");
// sayHello("Hussain");
