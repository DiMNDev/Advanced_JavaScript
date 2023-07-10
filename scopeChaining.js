//myVar is outside the scope and we will throw an error

// function foo() {
//   console.log(myVar);
// }
// function goo() {
//   var myVar = 1;
//   foo();
// }
// goo();

//Now with myVar being defined inside the running function we can access myVar
function gooy() {
  var myVary = 1;
  function fooy() {
    console.log(myVary);
  }
  fooy();
}
gooy();
