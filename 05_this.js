// Question: What is the "this" keyword in JavaScript and how is it used?
// Answer: The "this" keyword refers to whatever object it is directly inside of.
// To better understand the "this" keyword, please perform the following steps:
// 1. Open a Console from within a Google Chrome Browser.
// 2. Enter "console.log(this)"
// Result: The global "Window" object is returned.

let house = {
  price: 200000,
  squareFeet: 1000,
  owner: "Tim",
  getPricePerSquareFoot: function () {
    // The "this" keyword refers to the object that "this" is in the context of.
    return this.price / this.squareFeet;
  },
};

console.log(house.price); // logs 200000
console.log(house.getPricePerSquareFoot()); // logs 200
