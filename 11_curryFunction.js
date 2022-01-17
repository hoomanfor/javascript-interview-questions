// TASK:
// Take the given "getProduct" function and "Curry" it.

function getProduct(num1, num2) {
  return num1 * num2;
}

console.log(getProduct(10, 20)); // logs 200

// Convert the "getProduct" function that takes multiple arguments into a sequence ...
// ... of functions that each take one or part of the arguments.
function curryGetProduct(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

console.log(curryGetProduct(10)(20)); // logs 200

// QUESTION:
// Why is "Currying" a useful technique? Also; how can the "Currying" technique be used
// ... when programing a real-world application?
// For example:
function getTravelTime(distance, speed) {
  // distance is in km and speed is km per hour
  return distance / speed;
}

console.log(getTravelTime(600, 50)); // logs 12 hours

// What if we only travel between Boston and New York City (i.e. 400 km)
// In this case; our distance would never change (i.e. 400 km).
// If we wanted to calculate the time it would take to travel from Boston to ...
// ... New York City at different speeds we could call our "getTravelTime" function ...
// ... like this:
console.log(getTravelTime(400, 50)); // logs 8 hours
console.log(getTravelTime(400, 20)); // logs 20 hours
console.log(getTravelTime(400, 80)); // logs 5 hours
// Instead of entering the same 400 km speed over and over again ...
// .. we can use "Currying" to set our distance to always be 400 km.
// This is helpful because we won't have to keep writing in 400 km.

// The first thing we'll need to do is "Curry" the "getTravelTime" function.
function curryGetTravelTime(distance) {
  return function (speed) {
    return distance / speed;
  };
}

// To create a function that is specific to the distance between Boston and ...
// ... New York City; we are going to write the following:
const travelTimeBosNyc = curryGetTravelTime(400);
const travelTimeAtlMia = curryGetTravelTime(600);

console.log(travelTimeBosNyc(50)); // logs 8 hours
console.log(travelTimeAtlMia(60)); // logs 10 hours
