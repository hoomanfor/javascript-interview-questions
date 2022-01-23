// QUESTION:
// What order are the numbers (1, 2, 3, 4) logged out in?

function logNumbers() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers(); // logs 1, 4, 3, 2

function logNumbersExplained() {
  // The first "console.log()" is a regular statement that is not wrapped ...
  // ... in a "setTimeout()".
  // As a result; the number, 1, is logged out first.
  console.log(1);
  // The second "console.log()" logs out the number, 2.
  // However; it is wrapped in a 1 second (i.e. 1000 ms) "setTimeout()".
  // As a result, the the number, 2, is the last number logged out.
  // The number, 2, is the last number logged about because no other "console.log()" ...
  // ... has a "setTimeout()" longer than 1 second (i.e. 1000 ms).
  setTimeout(function () {
    console.log(2);
  }, 1000);
  // The third "console.log()" logs out the number, 3, after a 0 millisecond delay.
  // That being said; our console logs out the number, 3, after the number, 4.

  // QUESTIONS:
  // Why does the third "console.log()" log after the fourth "console.log()"?
  // In other words; why do they not log in order (i.e. 3, 4)?
  // Why does wrapping a "console.log()" in a zero second "setTimeout()" make ...
  // ...the third "console.log()" log after the fourth "console.log()"?

  // ANSWER:
  // Even though the third "console.log()" is wrapped in a zero second "setTimeout()" ...
  // ... the "setTimeout()" still affects how long it takes the third "console.log()" ...
  // ... statement to run.
  // This is the result of the "event loop" in the browser.

  // QUESTION:
  // What is the "event loop"?

  // ANSWER:
  // The "event loop" is a queue in which all events taking place in the browser are placed.
  // These events can include "click" events, ajax calls, callback functions, callbacks placed ...
  // ... in a "setTimeout()"/"setInterval()", and etc...
  // All of the aforementioned events are pushed into the "event loop" queue ...
  // ... and then processed one at a time; in the order that they were placed in the queue.
  // Even though the third "console.log()" is wrapped in a zero second "setTimeout()" ...
  // ... it is still pushed into the "event loop" because it is inside of a callback function.
  setTimeout(function () {
    console.log(3);
  }, 0);
  // While the aforementioned third "console.log()" is waiting in the "event loop" ...
  // ... the fourth "console.log()" runs instantly.
  // The fourth "console.log()" runs instantly because it is not placed into the "event loop".
  console.log(4);
  // Once the third "console.log()" reaches the top of the "event loop", it runs.
  // As a result; we get the final log ... 3 ... logged out onto the screen.
  // In closing; it is because of the "event loop" that we get the following sequence of numbers ...
  // ... logged onto the screen: 1, 4, 3, 2
}
