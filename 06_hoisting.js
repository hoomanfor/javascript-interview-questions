// TASK:
// Describe what variable and function "hoisting" is and how it works.

// In JavaScript; variables and functions are all "hoisted" to the top of the scope in which they are declared.
// The scope is usually either the "global scope" or a "function scope".
// Variable and function "hoisting" is basically the process in which the JavaScript interpreter ...
// ... looks ahead in the code to find all of the variable and function declarations ...
// ... and then it "hoists" those declarations to the top of the file.

// The following is an example of variable and function "hoisting":
// Let's say that we have a variable called "color" defined and it is set equal to the value, "blue".
var color = "blue";

// Behind the scenes; this is what the JavaScript interpreter is doing.
// The JavaScript interpreter hoists the color variable to the top of the file and declares it there.
// However; at the top of the file, the JavaScript interpreter does not set it equal to anything.
var color;
console.log(color); // logs undefined

// The JavaScript interpreter moves to the file where the "color" variable was originally declared.
// From there, the JavaScript interpreter sets the variable equal to the correct value.
color = "blue";
console.log(color); // logs blue

// Function "hoisting" works the same ways as Variable "hosting"
// When a function is declared in the following format using the "var", "let", or "const" keyword ...
// ... it is called a "Function Expression".
console.log(getProduct(2, 3)); // logs an error message (i.e. "TypeError: getProduct is not a function").

var getProduct = function (num1, num2) {
  return num1 * num2;
};

console.log(getProduct(2, 3)); // logs 6

// We can also declare a function without the "var", "let", or "const" keywords ...
// ... and this is called a "Function Declaration" written as follows:
console.log(getSum(2, 2)); // logs 4

function getSum(num1, num2) {
  return num1 + num2;
}
// One important difference between a "Function Expression" and a "Function Declaration" is ...
// ... that they are "hoisted" differently.
// For a "Function Declaration", the whole function including it's definition is "hoisted" ...
// .. to the top of the file.

// If you are declaring variables and functions inside of a parent function then ...
// ... the "hoisting" of those variables and functions only takes place inside of the ...
// ... encompassing function.
// Please see example below:
var globalVar = "global";

(function () {
  // The variables and functions inside this encompassing function will be "hoisted" here.
  // This behavior is the result of "Function Scoping" in JavaScript.
  var name = "John";

  var getAge = function () {
    return "30";
  };

  function getState() {
    return "Maine";
  }
})();

// When using the "var" keyword, there are two scopes that a variable or function can be hoisted to the top of:
// 1. global scope
// 2. function scope

// When using the "const" or "let" keywords, there are three scopes that a variable or function can be hoisted to the top of:
// 1. global scope
// 2. function scope
// 3. block scope

// A "block scope" is present whenever there is a block of code, for example:
// * a "for loop"
// * an "if/else statement"
// * a "while loop"

// When we declare a "const" or "let" variable within a "block scope" that variable declaration will only be "hoisted" ...
// ... to the top of that block that it is in.
// It will not be "hoisted" to the top of the parent function, or to the top of the global scope.
// Please see example below:

function getTotal() {
  // "total" is hoisted to the top of the "getTotal" function
  // Because it is "function scoped"
  let total = 0;

  for (var i = 0; i < 10; i++) {
    // "valueToAdd" is hoisted to the top of the "for loop"
    // Because "let" and "const" are "block scoped"
    let valueToAdd = i;
    // "multiplier" is hoisted to the top of the "getTotal" function
    // Because it is "function scoped"
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

console.log(getTotal()); // logs 90

// Variables declared with "let" or "const" cannot be accessed until they are declared.
function getTotal2() {
  console.log(total); // logs an error "ReferenceError: total is not defined"
  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

// A simple way to describe "hoisting" in JavaScript in one sentence:
// "Variables and functions are hoisted to the top of the scope that they are declared in."
// It could be the "global scope", "function scope", or "block scope".
// It all depends on the "keyword" you used to declare the variable or functions (i.e. "var", "let", or "const").
