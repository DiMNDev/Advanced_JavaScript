//Object Destructuring
const obj = { first: "Josh", last: "Arnold", age: 30 };
const f = obj.first;
const l = obj.last;
const a = obj.age;
console.log(f, l, a);

//This is essentially shorthand "destructuring" that we performed above.
const { first: fn, last: ln, age: an } = obj;
console.log(fn, ln, an);

//We can make it even simpler
const { first, last, age } = obj;
console.log(first, last, age);

//Array Destructuring
const arr = ["a", "b", "c", "d"];
const x = arr[0];
const y = arr[1];

const [m, n, o, p] = arr;
console.log(m, n, o, p);

//Destructuring parameters(objects) in function
function q({ x }) {
  console.log(x);
}
q({ x: 1 });

//We can rename our parameters we pull from an object
function q({ x: goo }) {
  console.log(goo);
}
q({ x: 1 });

//We can also give it a default value
function q({ x = 0 }) {
  console.log(x);
}
q({ x: 1 }); //If nothing is passed into the object it will default to 0 defined on line 37
