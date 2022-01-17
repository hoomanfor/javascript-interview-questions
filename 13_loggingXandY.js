// QUESTION:
// - What is the value of y when it is logged out?
// - What is the value of x when it is logged out?

(function () {
  var x = (y = 200);
})();

console.log("y: ", y); // logs "y:  200"
console.log("x: ", x); // logs an error "ReferenceError: x is not defined"

// ANSWER:
// Why do we get the above values logged?
// We try to log out "x" but we get an error that "x" is not defined.
// "x" is not defined because it is contained within the function scope of the IIFE.
// Therefore; we cannot access our variable "x" outside of the IIFE ...
// .. so we get the error that "x" is not defined because we cannot access it on the global scope.

// Now for the trickier part (i.e variable "y") ...
// Many would assume that variable "y" should function the same way variable "x" did.
// Since variable "y" is defined inside of a function and we are trying to access it from ...
// ... outside of that function, we should get the same error, right?
// Wrong... For some reason; the variable "y" is defined.
// When reading "var x = y = 200;", we assume the following:
// * var y = 200;
// * var x = y;
// That being said; that assumption is wrong and that is not what is actually happening.
// This is what is ACTUALLY happening under the hood:
// * y = 200;
// * var x = y;
// In other words; we are declaring variable "y" equal to "200" as a global variable (i.e. WITHOUT the "var" keyword).
// And then we are saying that variable "x" equals "y" WITH the "var" keyword.

// It would have been useful to use "strict" mode (i.e. "use strict") to catch this unexpected behavior.
// "use strict" would have warned us about writing JavaScript code that is not using best practices.
// By using "strict" mode, I would have seen an error when trying to use a global variable.
