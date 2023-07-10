const myButton = document.querySelector(".button");

myButton.addEventListener(
  "click",
  () => {
    console.log("Triggered: Capturing Phase");
  },
  true
);

myButton.addEventListener(
  "click",
  () => {
    console.log("Triggered: Bubbling Phase(Default)");
  },
  false
);
