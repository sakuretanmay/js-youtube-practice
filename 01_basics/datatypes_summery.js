// Primitive Data Types
let myName = "Tanmay";
console.log(typeof myName); // "string"

let age = 25;
console.log(typeof age); // "number"

let isDeveloper = true;
console.log(typeof isDeveloper); // "boolean"

let job; // undefined
console.log(typeof job); // "undefined"

let salary = null; // null
console.log(typeof salary); // "object" (historical bug)

let uniqueId = Symbol("id");
console.log(typeof uniqueId); // "symbol"

let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Object Data Types
let person = {
  name: "Tanmay",
  age: 25,
};
console.log(typeof person); // "object"

let fruits = ["apple", "banana", "cherry"]; // array (type is still "object")
console.log(typeof fruits);                 // "object"

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); // "function"

let today = new Date();         // Date object
console.log(typeof today);      // "object"


//////////////////////////////////////////////////////////////////////////////////////////Stack(Primitive) and Heap(Non-Primitive) memory

let myGitName = "sakureTanmay";
let anotherGitName = myGitName;

anotherGitName = "tanmaySakure";
console.log(myGitName);
console.log(anotherGitName);


let userOne ={
  name : "user",
  email: "user@gmail.com"
}

let userTwo = userOne;

userTwo.email ="user2@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
