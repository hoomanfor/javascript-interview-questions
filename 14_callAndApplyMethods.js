// TASK:
// Describe the JavaScript call() and apply() methods.

// ADDRESS THE FOLLOWING:
// 1. How do they function?
// 2. What arguments do they take?
// 3. How are they different?

// QUESTION:
// What is the "call()" method?

// ANSWER:
// The "call()" method is a native JavaScript method on the function prototype object.
// In other words, any function that you define in JavaScript will be able to use the "call()" method.

// QUESTION:
// What does the "call()" method do?

// ANSWER:
// The "call()" method gives you an alternative way of calling your functions; instead of the way we're used to calling them.
// Let's do an example:
const car1 = {
  brand: "Honda",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
    );
  },
};

// Traditionally; this is how you would call the "getCarDescription()" method:
car1.getCarDescription(15000, 2015, "black");
// logs "This car is a Honda. The price is $15000. The year is 2015. The color is black."

// What if we have another car called "car2" ...
const car2 = {
  brand: "Tesla",
};

// QUESTION:
// How may we use the "getCarDescription()" method from "car1" on "car2"?

// ANSWER:
// We may use the "getCarDescription()" method from "car1" on "car2" by using the "call()" method.
// The "call()" method gives us a different way of passing arguments into our function.
// Also, the "call()" method gives us the ability to change the "this" context.
// For example:
car1.getCarDescription.call(car2, 40000, 2022, "blue");
// logs "This car is a Tesla. The price is $40000. The year is 2022. The color is blue."

// The "apply()" method is essentially the same thing as the "call()" method.
// That being said; there is ONE major difference:
// When we use the "apply()" method we pass all the parameters for the function as an "Array" ...
// ... instead of individually; like we did for the "call()" method.
// For Example:
const car3 = {
  brand: "Ford",
};

car1.getCarDescription.apply(car3, [20000, 2018, "silver"]);
// logs "This car is a Ford. The price is $20000. The year is 2018. The color is silver."
