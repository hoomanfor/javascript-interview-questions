// PROBLEM:
// - Write a function that keeps track of how many times it was called and returns that number.
// - All functionality should be inside of the function; none outside.

function myFunc() {
  // code goes here
}

console.log(myFunc()); // should log 1
console.log(myFunc()); // should log 2
console.log(myFunc()); // should log 3

// SOLUTION:
// One of the best ways to have a function keep track of itself is by using a "Closure".
function myFuncWithClosure() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

// If we log out "myFuncWithClosure" as is ... a "[Function (anonymous)]" is returned.
// This makes sense because we are returning an anonymous function.
console.log(myFuncWithClosure()); // logs "[Function (anonymous)]"

// QUESTION:
// How do we get "myFuncWithClosure" to keep track of its count properly?

// ANSWER:
// Create an instance of the "myFuncWithClosure" function.
const instanceOne = myFuncWithClosure();
const instanceTwo = myFuncWithClosure();

console.log("instanceOne: " + instanceOne()); // logs instanceOne: 1
console.log("instanceOne: " + instanceOne()); // logs instanceOne: 2
console.log("instanceTwo: " + instanceTwo()); // logs instanceTwo: 1
console.log("instanceTwo: " + instanceTwo()); // logs instanceTwo: 2
console.log("instanceOne: " + instanceOne()); // logs instanceOne: 3
console.log("instanceOne: " + instanceOne()); // logs instanceOne: 4
