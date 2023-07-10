function doAsyncTask() {
  const promise = new Promise((resolve, reject) => {
    //resolve? reject?
    console.log("Async Work Complete");
    if (true) {
      //Toggling this will return Success! or Failed!
      resolve("Success!");
    } else {
      reject("Error!");
    }
  });
  return promise;
}
doAsyncTask().then(
  (val) => console.log(val),
  (err) => console.log(err)
);

let promise = Promise.resolve("Successful!");
promise.then((val) => console.log(val));
// let promise = Promise.reject("Failed!");

//Promises are asynchronous by default
//Callbacks are NOT asynchronous by default
