// QUESTION:
// Take a look at the following code...
// What is logged to the console when the method "myCar.logColor()" is ran?
var myCar = {
  color: "Blue",
  logColor: function () {
    // The "this" keyword references the object it is inside of.
    // "this" is referencing the "myCar" object.
    // Setting the variable "self" equal to "this" is common practice in JavaScript
    // Its purpose is to store a reference to a certain scope or context that you will need to use later on.
    var self = this;
    console.log("In logColor - this.color: " + this.color); // logs Blue
    console.log("In logColor - self.color: " + self.color); // logs Blue
    (function () {
      // Here, we are inside of the scope of the unnamed, IIFE function.
      // Since the IIFE function is NOT a method of the "myCar" object ...
      // ... our "this" keyword has lost reference to the "myCar" object.
      // Instead, it is now referencing the global object.
      // In many cases; if you use the "this" keyword inside of nested functions ...
      // ... you are more than likely going to lose reference to the object you are inside of.
      // Resulting in your "this" keyword referencing the global object.
      console.log("In IIFE - this.color: " + this.color); // logs undefined
      console.log("In IIFE - self.color: " + self.color); // logs Blue
    })();
  },
};

myCar.logColor(); // logs the following...
// In logColor - this.color: Blue
// In logColor - self.color: Blue
// In IIFE - this.color: undefined
// In IIFE - self.color: Blue
