function doAsyncTask(cb) {
  setTimeout(() => {
    cb("Error", "Correct Data"); //The first parameter is our error
  }, 0);
}
doAsyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("Data", data);
  }
  console.log(message);
});
let message = "Callback Called";
