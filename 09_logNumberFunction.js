// QUESTION:
// What will be logged out into the console when the "logNumber" function is ran?
var num = 50;

function logNumber() {
  // The "num" variable is being "hoisted" to above the "console.log(num)" like this "var num;"
  // At this point, "num" is "undefined".
  console.log(num);
  var num = 100;
}

logNumber(); // logs undefined

// To understand why "undefined" is logged, we need to remember how variable "hoisting" works.
// When we declare a variable with the "var" keyword, that variable is function scoped.
// As a result, the variable declaration is "hoisted" to the top of the function that it is in.
// The "num" variable is being "hoisted" to above the "console.log(num)" like this "var num;"

// Alternatively, in ES6;
let num2 = 50;

function logNumber2() {
  console.log(num2);
  let num2 = 100;
}

logNumber2(); // logs error i.e. "ReferenceError: Cannot access 'num2' before initialization"
