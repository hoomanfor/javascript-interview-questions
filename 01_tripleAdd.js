// Question:
// Write a function called "tripleAdd" that is called like this:
tripleAdd(10)(20)(30)
// ... and returns the total of all 3 numbers.
// In other words; write a function with a triple invocation that returns the total of all 3 numbers. 

// Answer:
// We are not invoking the "tripleAdd" function three times but instead; we are first invoking the "tripleAdd" function one time (i.e. tripleAdd(10))
// Next, we are invoking whatever is returned to us from the "tripleAdd" function.
// If we are invoking what is returned to us from the "tripleAdd" function; then that must mean that another function is being returned to us.
// It is safe to say that another function is being returned to us because the only thing that we can invoke in JavaScript is a function.
// Next, we are invoking a third time; which means that whatever is returned from our second function must be a function as well.
// After we invoke a third time; we get our answer.

// In simplest terms; in order to make our "tripleAdd" function work properly, it must return a function ... that returns another function
// ... that returns our answer. 

function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
}

console.log(tripleAdd(10)(20)(30))  // logs 60

// It is important to note that the "tripleAdd" function can be referred to as a "curried" function.
// Question: What is "Currying" a function?
// Answer: "Currying" a function is the technique translating one function that takes multiple arguments into a sequence of functions
// ... that each take a single argument.

// The following is a new example to better understand "Currying" a function.
// I have created a new function named "tripleAdd1".
// The "tripleAdd1" function takes in three parameters (i.e. num1, num2, and num3).
function tripleAdd1(num1, num2, num3) {
  // The "tripleAdd1" function will return the sum of num1, num2, and num3.
  return num1 + num2 + num3;
}

console.log(tripleAdd1(10, 20, 30)); // logs 60

// The "tripleAdd1" function is a "single" function that takes in multiple arguments and
// ... it returns to us the total of those arguments added together.
// Question: How may I "Curry" the "tripleAdd1" function?
// ... in other words; How can I turn my "tripleAdd1" function into a sequence of functions that each take one argument?
// Answer: I have already "Curried" the "tripleAdd1" function by creating the original "tripleAdd" function.
// In conclusion; the original "tripleAdd" function is the curried version of the "tripleAdd1" function.
// Traditionally; an engineer would begin by writing the the single function and then the engineer would "Curry" it
// ... so that it becomes a sequence of functions. 

// The following is a new example of a "Curried" function that takes in multiple arguments.
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    }
  }
}

console.log(quadrupleAdd(10)(20)(30, 40)); // logs 100