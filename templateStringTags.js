function h1(strings) {
  return "<h1>" + strings[0] + "</h1>";
}
console.log(h1`asim`);

function printStrings(strings, ...values) {
  for (string in strings) {
    console.log(strings[string] + values[string]);
  }
  console.log(values);
}
let myName = "Josh";
let myPlace = "World";
printStrings`Hello ${myPlace}, my name is ${myName}`;

function wrapH2(strings, ...values) {
  let body = "";
  for (let i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || ""); //If we have more string than values passed we opt to replace the non existent values with an empty string
  }
  return `<h2>${body}</h2>`; //Returns our tag with our string wrapped in <h2></h2>
}

console.log(wrapH2`Hello ${myPlace}, my name is ${myName}`);
