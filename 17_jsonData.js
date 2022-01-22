// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace the [`placeholder text`] with the corresponding data type ...
// ... and make sure it is properly formatted as JSON.

const myJsonObj = {
  myString: [`some string`],
  myNumber: [`some number`],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined],
  myArray: [`some array`],
  myFunction: [`some function`],
  myObject: [`some object`],
};

// QUESTION:
// What is JSON format?

// ANSWER:
// * JSON stands for "JavaScript Object Notation".
// * JSON is a light-weight format for transferring data.
// * The aforementioned data transfer can be between different functions in your code.
// * Also, the data transfer can be between different applications.
// * Also, the data transfer from an API to your application.

// QUESTION:
// Why is JSON format used?

// ANSWER:
// 1. It is easy for humans to understand.
// 2. It is easy for computers to parse & generate.
// JSON formatted data is one of the most common ways to send data from an API.
// In other words, if you build a program that retrieves data from an external API ...
// ... chances are; that data will be in JSON format.
// In short; JSON data is dealt with a lot in modern programming applications.

// QUESTION:
// Which data types are not allowed in JSON data?

const myJsonObj2 = {
  myString: [`some string`],
  myNumber: [`some number`],
  myNull: [null],
  myBoolean: [false],
  // myUndefined: [undefined], The "undefined" data type is not allowed in JSON data.
  myArray: [`some array`],
  // myFunction: [`some function`], The "Function" data type is not allowed in JSON data.
  myObject: [`some object`],
};

// QUESTION:
// Why is the "undefined" data type not allowed in JSON?

// ANSWER:
// The "undefined" data type is not allowed in JSON because if you want a property ...
// ... in an object to be undefined, it is better practice to completely omit that property ...
// ... from the object; instead of defining it and setting it equal to "undefined".
// ... If you completely omit a property from an object ...
// ... retrieving that property will get the value, "undefined".

// FOR EXAMPLE:
const myJsonObj3 = {};

console.log(myJsonObj3["myNumber"]); // logs "undefined"

// QUESTION:
// Why are functions not allowed in JSON data?

// ANSWER:
// Functions are not allowed in JSON data because JSON is ONLY a data description language.
// In other words; JSON's only purpose is to pass data.
// JSON is not a programming language and therefore it is not used for computing logic.

// TASK:
// * Replace the [`placeholder text`] from "myJsonObj2" with the correct data type in JSON format.
// * Name this revised JSON object "myJsonObj3".

const myJsonObj3 = {
  myString: "Hello, World!", // Strings must be wrapped in double quotes and NOT single quotes.
  myNumber: 23.123, // You can pass in any numbers; even numbers with decimals.
  myNull: null, // Simply pass in the value of null.
  myBoolean: true, // Booleans can be either true or false.
  myArray: [20, 30, "orange"], // All the values of the array must be in proper JSON format.
  myObject: { name: "Hooman", age: 34 }, // All the values of the array must be in proper JSON format.
};

// IMPORTANT:
// In JSON data, every property on an object is a string.
// As a result; me we must wrap all property names in double quotes.

// FOR EXAMPLE:
// prettier-ignore
const myJsonObj4 = {
  "myString": "Hello, World!",
  "myNumber": 23.123,
  "myNull": null,
  "myBoolean": true,
  "myArray": [20, 30, "orange"],
  "myObject": { "name": "Hooman", "age": 34 },
};
