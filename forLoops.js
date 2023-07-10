let array = [1, 2, 3];

//Traditional for loop
for (let i = 0; i < array.length; i++) {
  console.log("Traditional", array[i]);
  //   continue; won't execute lines after, but restarts
  //   break; will break out of the for loop entirely
}

//ForEach loop
array.forEach(function (value) {
  console.log("ForEach", value);
  //Break and Continue do NOT work here
});

//ForEach inside a function with early return

function myLoop() {
  array.forEach(function (value) {
    console.log("ForEachFunc", value);
    return;
    console.log("Hello"); //Will not run
  });
}
myLoop();

//For-in loop over array
for (let index in array) {
  console.log(index);
  console.log(typeof index); //returns a string; this function is mainly used for objects
  console.log("for-in ARR", array[index]);
}

//For-in loop over object
let obj = { a: 1, b: 2, c: 3 };
for (let number in obj) {
  console.log("for-in OBJ", number);
}

//For-of loop over an array
for (let value of array) {
  console.log("for-of ARR", value);
  console.log(typeof value);
}
