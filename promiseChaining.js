//Long Version

// const p = Promise.resolve("done");
// p.then((val) => {
//   console.log(val);
//   return "done2";
// });
// p.then((val) => console.log(val));

//If a promise fails, it will look down the chain
// for an error operation to perform

//Shorter Version
// Promise.resolve("done")
//   .then((val) => {
//     console.log(val);
//     return "done2";
//   })
//   .then((val) => console.log(val));

//Promise returns a promise

// Promise.resolve("done")
//   .then((val) => {
//     console.log(val);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("done2");
//       }, 1000);
//     });
//   })
//   .then((val) => console.log(val));

// //Error handling promises
// Promise.reject("fail")
//   .then((val) => console.log(val))
//   .then(
//     (val) => console.log(val), //As long as one statement in the chain handles errors, when an error is triggered
//     //Javascript will find the line in the chain that has a way to handle the error.
//     (err) => console.error(err)
//   );

//Throwing Errors
// new Promise((resolve, reject) => {
//   throw "fail";
// })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => console.log(val, (err) => console.log(err)));

//Catching Errors
Promise.resolve("done")
  .then((val) => {
    return "done!";
  })
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally((_) => console.log("Cleaning Up"));
