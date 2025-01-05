// String Creation
let singleQuote = "Hello";
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`;
let stringObject = new String("Hello Object");

// String Properties
console.log(singleQuote.length); // Output: 5

// Access Characters
console.log(singleQuote[0]); // Output: 'H'
console.log(doubleQuote.charAt(1)); // Output: 'o'

// Change Case
console.log(singleQuote.toUpperCase()); // Output: 'HELLO'
console.log(doubleQuote.toLowerCase()); // Output: 'world'

// Substring Extraction
let str = "JavaScript";
console.log(str.substring(0, 4)); // Output: 'Java'
console.log(str.slice(-3)); // Output: 'ipt'

// Search and Replace
console.log(str.indexOf("Script")); // Output: 4
console.log(str.includes("Java")); // Output: true
console.log(str.replace("Java", "Type")); // Output: 'TypeScript'

// Trim Whitespace
let strWithSpaces = "  Hello!  ";
console.log(strWithSpaces.trim()); // Output: 'Hello!'

// Split a String
let csv = "red,green,blue";
console.log(csv.split(",")); // Output: ['red', 'green', 'blue']

// Concatenate Strings
let greeting = "Hello, ";
let name = "Tanmay";
console.log(greeting.concat(name)); // Output: 'Hello, Tanmay'

// Template Literals
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: 'My name is Tanmay and I am 25 years old.'

// Special Characters
let specialStr = 'He said, "JavaScript is awesome!"\nLine1\nLine2';

console.log(specialStr);
// Output:
// He said, "JavaScript is awesome!"
// Line1
// Line2