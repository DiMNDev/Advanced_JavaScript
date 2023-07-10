function sum(a, b) {
  console.log(arguments); //Logs the arguments passed into the function
  return a + b;
}

let val = sum(1, 2, 3, 4); //JavaScript will ignore the extra parameters
//passing a single parameter will return NaN
console.log(val);

function sumWithArgLoop() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumWithArgLoop(1, 2, 3, 4));
console.log("arguments is not an array");
function login(method) {
  //var options = arguments.slice(1);
  var options = Array.prototype.slice.call(arguments, 1);
  console.log(method);
  console.log(options);
}
login("facebook", 1, 2, 3, 4);

//rest operator
console.log("rest operator");
function loginRest(method, ...options) {
  //We can't have any other parameters after the rest operator
  //Using ...options will return the "rest" of the parameters
  console.log(method);
  console.log(options);
}
loginRest("facebook", 1, 2, 3, 4);

//spread operator
console.log("spread operator");
var ar1 = [4, 5, 6];
var ar2 = [...ar1]; //copy an array
ar1[0] = -1;
console.log(ar1);
console.log(ar2);

//rest+spread
console.log("rest+spread operator");
const meth = "twitter";
const opts = ["key", "callbackURL"];
function loginRest(method, ...options) {
  //We can't have any other parameters after the rest operator
  //Using ...options will return the "rest" of the parameters
  console.log(method);
  console.log(options);
}
loginRest(meth, ...opts);
