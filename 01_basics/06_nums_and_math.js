// +++++++++++++++++++++++ Numbers +++++++++++++++++++++++

// Declaring a simple number variable
const score = 400;
console.log(score); // Output: 400

// Creating a number object using the Number constructor
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Converting the number object to a string
console.log(balance.toString()); // Output: "100"

// Getting the length of the string representation of the number
console.log(balance.toString().length); // Output: 3

// Formatting the number to two decimal places
console.log(balance.toFixed(2)); // Output: "100.00"

// Working with the `toPrecision` method to limit significant digits
const otherNumber = 123.89423;
console.log(otherNumber.toPrecision(4)); // Output: "123.9" (4 significant digits)
console.log(otherNumber.toPrecision(2)); // Output: "1.2e+2" (exponential notation for 2 significant digits)

// Formatting a large number with locale-based commas
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); // Output: "1,00,000" (Indian numbering format)

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++

// Exploring the `Math` object in JavaScript
console.log(Math); // Displays the Math object with all its methods

// Getting the absolute value of a number
console.log(Math.abs(-4)); // Output: 4

// Rounding to the nearest integer
console.log(Math.round(4.7)); // Output: 5

// Rounding up to the nearest integer
console.log(Math.ceil(4.2)); // Output: 5

// Rounding down to the nearest integer
console.log(Math.floor(4.9)); // Output: 4

// Finding the smallest value among given numbers
console.log(Math.min(2, 5, 7, 4)); // Output: 2

// Finding the largest value among given numbers
console.log(Math.max(2, 5, 7, 4)); // Output: 7

// Generating a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: Random number between 0 and 1

// Generating a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10

// Generating a random number within a range (10 to 20 inclusive)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Output: Random integer between 10 and 20
