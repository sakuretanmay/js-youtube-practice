// String Conversion
let num = 123;
let numStr = String(num);
console.log(numStr);              // Output: "123" - Converts number to string
console.log(typeof numStr);       // Output: "string" - Verifies the type is now string

let numToString = num.toString();
console.log(numToString);         // Output: "123" - Another method to convert number to string
console.log(typeof numToString);  // Output: "string" - Verifies the type is now string


// Number Conversion
let str = "456";
let strToNum = Number(str);
console.log(strToNum);            // Output: 456 - Converts string to number
console.log(typeof strToNum);     // Output: "number" - Verifies the type is now number

let parsedInt = parseInt("456px");
console.log(parsedInt);           // Output: 456 - Parses string and converts to integer
console.log(typeof parsedInt);    // Output: "number" - Verifies the type is now number

let parsedFloat = parseFloat("3.14abc");
console.log(parsedFloat);         // Output: 3.14 - Parses string and converts to float
console.log(typeof parsedFloat);  // Output: "number" - Verifies the type is now number


// Boolean Conversion
let booleanTrue = Boolean(1);
console.log(booleanTrue);         // Output: true - Non-zero number is coerced to true
console.log(typeof booleanTrue);  // Output: "boolean" - Verifies the type is now boolean

let booleanFalse = Boolean(0);
console.log(booleanFalse);        // Output: false - Zero is coerced to false
console.log(typeof booleanFalse); // Output: "boolean" - Verifies the type is now boolean

let booleanEmptyStr = Boolean("");
console.log(booleanEmptyStr);     // Output: false - Empty string is coerced to false
console.log(typeof booleanEmptyStr); // Output: "boolean" - Verifies the type is now boolean

let booleanNonEmptyStr = Boolean("hello");
console.log(booleanNonEmptyStr);  // Output: true - Non-empty string is coerced to true
console.log(typeof booleanNonEmptyStr); // Output: "boolean" - Verifies the type is now boolean


// Null and Undefined Conversion
let nullToString = String(null);
console.log(nullToString);         // Output: "null" - null is converted to string "null"
console.log(typeof nullToString);  // Output: "string" - Verifies the type is now string

let undefinedToNum = Number(undefined);
console.log(undefinedToNum);      // Output: NaN - undefined is converted to NaN
console.log(typeof undefinedToNum); // Output: "number" - Verifies the type is now number

let nullToNum = Number(null);
console.log(nullToNum);           // Output: 0 - null is converted to 0
console.log(typeof nullToNum);    // Output: "number" - Verifies the type is now number
