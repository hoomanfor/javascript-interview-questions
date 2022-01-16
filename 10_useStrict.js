// It is considered a good practice to place the string "use strict" ...
// ... at the beginning of JavaScript source files.
// This is referred to as using "strict mode"
"use strict";

// QUESTION:
// What does using "strict mode" do to your code?
// What are the benefits of using "strict mode"?

// ANSWER:
// The main purpose of the "use strict" option at the beginning of a file ...
// ... is to enforce stricter parsing and error handling in your JavaScript code.
// The following is a list of important things that "use strict" does:
// 1. Prevents the use of global variables.
// For example:
city = "London";

console.log(city); // logs an error, "ReferenceError: city is not defined"

// 2. All parameters names for a function must be unique.
// For example:
function myFunc(a, a, b) {
  console.log(a, a, b); // logs an error, "SyntaxError: Duplicate parameter name not allowed in this context"
}

myFunc(1, 2, 3);

// 3. Throws an error if we try to delete any properties on objects that cannot be deleted.
// For example, we get a TypeError stating that we cannot delete said property in the following line:
delete Object.prototype;

// One of the greatest benefits of "strict mode" is that it helps us FAIL FAST & and FAIL LOUDLY.
// This means that if there is an error in our code, or, we are doing something that is not a good practice ...
// ... then "use strict" will let us know about that error before we start building MORE code ...
// ... on top of that error; which will just lead to more problems for us down the line.
