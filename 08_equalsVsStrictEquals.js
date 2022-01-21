// QUESTION:
// What is the difference between the comparison operators "==" and "==="?
// In other words; what is the difference between the comparison operators ...
// ... double equals "==" and triple equals "==="?

// ANSWER:
// "==" is known as "equals" and it tests for abstract equality.
// "===" is known as "strict equals" and it tests for strict equality.

// In more simple terms; the double equals (i.e. "=="), does NOT test for data type.
// The triple equals (i.e. "==="), DOES test for data type.

// FOR EXAMPLE:
// Does 7 as a number equal to "7" as a string?
// Since we are comparing two different types of data;
// One being a number and the other being a string ...
// The double equals (i.e. "==") will convert both pieces of data to the same type ...
// ... and then compare them.
console.log(7 == "7"); // logs true

// Changing the comparison operator to a triple equals logs "false".
// "false" is logged because the triple equals is "strict" and it DOES test for the type of each piece of data.
console.log(7 === "7"); // logs false

// QUESTION:
// What happens "under the hood" when using == to compare compare pieces of data?

// ANSWER:
// If we are comparing a "number" & "string":
// 1. "string" is converted to a "number"
// 2. comparison is made

// If we are comparing a "boolean" & "non-boolean":
// 1. "non-boolean" is converted to a "boolean"
// 2. comparison is made

// If we are comparing an "object" & "primitive data-type" (e.g. "number" or "string"):
// 1. "object" is converted to a "primitive data-type" (e.g. "number" or "string")
// 2. comparison is made
