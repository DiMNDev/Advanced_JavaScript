//1:
//This will
// function doAsyncTask(cb) {
//   cb();
// }
// doAsyncTask(function () {
//   console.log(message);
// });
// let message = "Callback Called";

//2:
//Throw automatically triggers catch
// Promise.resolve("done")
//   .then((val) => {
//     // return val;
//     throw "fail";
//   })
//   .then((val) => console.log(val))
//   .catch((err) => console.error(err));

//3:
//When chaining handlers we must return values for them to be passed on to the next.
//   Promise.resolve("done")
//   .then(val => {
//     console.log(val);
//   })
//   .then(val => console.log(val));

//4:
// const doAsyncTask = () => Promise.resolve("done");

// function foo() {
//     let x = await doAsyncTask();
//     return x;
// }

// console.log(foo());
