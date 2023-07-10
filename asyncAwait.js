//1:
// const doAsyncTask = () => Promise.resolve("done");
// doAsyncTask().then((val) => console.log(val));
// console.log("here");

//2:
// const doAsyncTask = () => Promise.resolve("done");
// async function josh() {
//   let value = await doAsyncTask();
//   console.log(value);
// }
// josh();

//3:
// const doAsyncTask = () => Promise.resolve("done");
// (async function () {
//   let value = await doAsyncTask();
//   console.log(value);
//   console.log("done2");
// })();

//4:
// const doAsyncTask = () => Promise.resolve("done");
// (async function () {
//   doAsyncTask().then((val) => console.log(val));
//   console.log("done2");
//   //.then does not run "block" like await
//   //does in example 3 above. That is why we get done2
//   //first in the console here.
// })();

//5:
// const doAsyncTask = () => Promise.resolve("done");
// let asyncFunction = async function () {
//   let value = await doAsyncTask();
//   console.log(value);
//   console.log("2");
//   return "3"; //Whatever we return is like a resolve
// };
// asyncFunction().then((v) => console.log(v));
//We can use .then to chain off the asyncFunction

//6:
// const doAsyncTask = () => Promise.reject("error");
// const asyncFunction = async function () {
//   try {
//     const value = await doAsyncTask();
//   } catch (e) {
//     console.error("Moo: ", e);
//     return;
//   }
// };
// asyncFunction();

const doAsyncTask = (delay) => {
  return () =>
    new Promise((resolve) => setTimeout(() => resolve(delay), delay));
};

let tasks = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)];

// Promise.all(tasks).then((values) => console.log(values));

(async () => {
  for (let task of tasks) {
    console.log(await task());
  }
})();

/*
Async Await vs. Promises
-Async Await isn't a nicer way of dealing with promises, its a way to take 'non-blocking(promises)'
 code, and making it block scoped. Async Await is slower than .then and promises?
*/
