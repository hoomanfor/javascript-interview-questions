// QUESTION:
// What will "list2" contain when it is logged to the console?

const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2); // logs [1, 2, 3, 4, 5, 6, 7, 8]
// "list2" appears to have all 8 numbers in it when it is logged out.
// It appears as if "list2" is mimicking/mirroring whatever data is in "list1".
// This is the result of passing data by "reference" versus ...
// ... passing data by "value".
// In JavaScript, when we assign a variable to a piece of data ...
// ... we are always passing that data by "value" or passing that data by "reference".

// The following is an example of passing data by "value":
const myNum = 10;
// i.e. the variable "myNum" is equal to the value, 10.
const myString = "Hello, World!";
// i.e. the variable "myString" is equal to the value, "Hello, World!".
const myString2 = myString;
// i.e. the variable "myString2" is being set to the value, "Hello, World!".

// If the data type that we are passing is an object ...
// ... FYI: Arrays are considered Objects in JavaScript ...
// ... then that data is being passed by "reference".

// QUESTION:
// What does it mean to pass data by "reference"?

// The following example will explain what it means to pass data by "reference":
// Set "list3" equal to an Array.
// This Array is being passed by "reference".
// FYI: Objects and Arrays are passed by "reference" in JavaScript.
let list3 = [1, 2, 3, 4, 5];
// Next, we are setting a variable called "list4" equal to "list3".
let list4 = list3;
// Some people might mistakenly think that "list4" is being set equal to a NEW array that ...
// ... looks exactly the same as "list3".
// However, this is incorrect.
// "list4" is actually being set equal the same exact Array that "list3" is being set equal to.
// We can say that "list3" and "list4" are both referencing the same underlying Array.
// Now, when we add three more elements to "list3" ...
list3.push(6, 7, 8);
// ... it effects the value of "list4" because "list4" is referencing the same Array.
// This is why when we add more elements to "list3", they appear in "list4" as well.
// Because "list3" and "list4" are referencing the same underlying Array in memory.
// You can think of it as both variables (i.e. "list3" & "list4") are ...
// ... both pointing themselves to same piece of data.

// At this point; "list3" and "list4" are referencing the same Array.
// What if... instead of pushing more elements into the Array ...
// ... what if... we set "list3" = [10, 20, 30] instead?
list3 = [10, 20, 30];
// What would we get if we logged out "list3"?
console.log(list3); // logs [10, 20, 30]
console.log(list4); // logs [1, 2, 3, 4, 5, 6, 7, 8]

// Changing the value of a variable like setting "list3" equal to a new Array, [10, 20, 30] ...
// ... will never changes the underlying Object.
// It simply points the variable (i.e. "list3") to a new Object/Array/String or whatever you point it at.
// However, changing a property on an Object or an Array does change the underlying Object or Array.
// As a result; any variables referencing that underlying Object or Array will reflect the change.

// QUESTION:
// How can we set "list6" equal to an Array that has the same data as "list5" ...
// ... without actually referencing the same Array that "list5" does?

// If you have created a correct solution to this problem, you should be able to ...
// ... update "list5" without it affecting the data that is in "list6".
const list5 = [1, 2, 3, 4, 5];
const list6 = list5;

list5.push(6, 7, 8);

console.log(list6); // logs [1, 2, 3, 4, 5, 6, 7, 8]

// SOLUTION:
// To solve this question, we must make a copy of "list5" and assign it to "list6".
// That way we'll have two Arrays of the same value but they are completely separate.
// As a result; updating one will NOT affect the other.
// I will demonstrate this "make a copy" technique in the following example.
// We can use a couple of different Array methods to create a copy:
const list7 = [1, 2, 3, 4, 5];
// OPTION 1: The Array "slice()" method with no parameters passed in.
// Using this method like this will copy all of the elements in "list7" and ...
// ... return them to us in a new Array, which we store as "list8".
const list8 = list7.slice();
// Now, if we push some new elements into "list7" ...
list7.push(6, 7, 8);
// ... and we log out "list7" ...
console.log("list7: " + list7); // logs 1,2,3,4,5,6,7,8
// ... and we log out "list8" ...
console.log("list8: " + list8); // logs 1,2,3,4,5

// OPTION 2: The Array "concat()" method and pass an empty Array into it.
const list9 = [1, 2, 3, 4, 5];
const list10 = list9.concat([]);
list9.push(6, 7, 8);
console.log("list9: " + list9); // logs 1,2,3,4,5,6,7,8
console.log("list10: " + list10); // logs 1,2,3,4,5

// OPTION 3:
// You could set "list10" to an empty Array.
// Next, use a "for loop" to push every element from "list9" into "list10".
// However; that would be a lot more code AND not as clean.
