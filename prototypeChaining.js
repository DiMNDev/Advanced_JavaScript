var animal = {
  kind: "human",
};

console.log(animal);

//Creates a new object of animal and assigns it to josh
var josh = Object.create(animal, { food: { value: "mango" } });
//Assign animal as a prototype for josh
//var josh = {};
// josh.__proto__ = animal;

console.log(josh.kind); //josh does not directly have the property kind, but is found in the prototype chain
console.log(animal.isPrototypeOf(josh)); //Checks to see if animal is a prototype of josh
animal.kind = "igloo"; //Changes the property kind to reflect the new value igloo
console.log(josh.kind); //Because we changed the animal object property kind to equal igloo josh.kind now reflects the new value found in our animal object
animal.kind = "human";
josh.kind = "igloo";
console.log(animal.kind);
console.log(josh.kind);

/*
--Key Take Aways--
- Objects are linked to other objects in JavaScript through prototype chaining
- JavaScript will traverse/search this chain for our properties before it returns undefined
- We can change/add properties to the chain using .__proto__ 
- We can also use Object.create() to add a protoype to an object as the first parameter
- Using the Object.create() method we can specify originating properties by creating additional parameters at the call site
*/
