function doAsyncTask(cb) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 0);
}

doAsyncTask(() => console.log("Done!"));

/*
Callback hell is where we have multiple asynchronous functions that all
rely on one another and call another function and another,
and another and it looks like hell.
*/
