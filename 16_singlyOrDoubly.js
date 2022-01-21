// TASK:
// Build out a function called "getTotal" that returns the total of two numbers ...
// ... added together.
// The "getTotal" function must be able to be called by passing in two numbers by ...
// ... a single invocation [ e.g. getTotal(10, 20) ] or ...
// ... by passing a single number into each of two invocations [ e.g. getTotal(10)(20) ] ...
// ... i.e. a "curried" function.

// As you can see, we have defined our function so that it takes no arguments in ...
// ... but we know that this function will actually take in either one or two arguments.
// QUESTION:
// How do we handle these arguments if they are not passed in?
function getTotal() {
  // ANSWER:
  // We are going to use the "arguments" keyword.
  // The "arguments" keyword is built into the JavaScript language.
  // What the "arguments" keyword does is it gives us access to whatever arguments are ...
  // ... passed into our function.
  //  By using the arguments keyword we do not need to define how many arguments OR ...
  // ... what arguments are passed into our function because we have access to them with ...
  // ... the "arguments" keyword.

  // QUESTION:
  // What is the following line doing?
  // var args = Array.prototype.slice.call(arguments);

  // ANSWER:
  // The "arguments" object is considered an Array-like object. An Array-like object is ...
  // ... similar to an Array because the properties are numbered like the indexes of an Array are ...
  // ... but it does not have many of the useful methods on it that an Array has because it's an object.

  // QUESTION:
  // How can we turn this Array-like object into an actual Array that would be more useful to us?

  // ANSWER:
  // We can use the Array "slice()" method on our Array-like object, so we call that ...
  // ... method by saying Array.prototype.slice.call(arguments);
  // We are binding the context of the "slice()" method to our "arguments" object ...
  // ... by saying ".call(arguments)".
  // As a result; we now have an actual Array of arguments stored in our "args" variable.
  // This is possible because our "arguments" object is an Array-like object.
  // ... So, the "slice()" method works here but this is a special case.
  // It would not work on any regular old object.
  var args = Array.prototype.slice.call(arguments);
  // Now we have access to all the arguments passed into our function and we have ...
  // ... stored them in our "args" variable as an Array.
  console.log(args);
  // Now that we have access to these arguments, the rest of this function should be a piece of cake.
  // We can handle the first case in which we pass two arguments into our function by saying ...
  if (args.length === 2) {
    return args[0] + args[1];
  } else if (args.length === 1) {
    // This is the case where we are "Currying" the function.
    // ... also known as invoking our expression a second time.
    // We must return a function from our "getTotal" function so that we can do a second invocation.
    return function (num2) {
      return args[0] + num2;
    };
  }
}

console.log(getTotal(10, 20)); // logs 30

console.log(getTotal(10)(20)); // logs 30
