// Question: What is an IIFE and why are they used?
// Answer: An IIFE (pronounced if...e) is an Immediately Invoked Function Expression.

// Question: What is a "Function Expression" ?
// Answer: A "Function Expression" is a function that is executed right after it is created. 

// Below; I have created a function named "doubleNumber"
function doubleNumber(num) {
  return num * 2;
}

// Normally; I would call the "doubleNumber" function like this:
doubleNumber(2);
console.log(doubleNumber(2)); // logs 4

// Question: What do I have to do to make the "doubleNumber" function into an IIFE (i.e. Immediately Invoked Function Expression)?
// Wrap the "doubleNumberAsIIFE" function declaration in parenthesis.
(function doubleNumberAsIIFE(num) {
  return num * 2;
  // Place another pair of parenthesis immediately after the first pair of parenthesis.
  // Additionally; pass the argument into this second pair of parenthesis (i.e. 2).
})(2); // returns 4

// Question: Why would a developer ever need to use an IIFE?
// Answer: The main reason to use an IIFE is to preserve the private scope within your function.  