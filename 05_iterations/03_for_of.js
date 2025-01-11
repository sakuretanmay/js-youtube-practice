const numbers = [11 ,92 ,32 ,14 ,45 ,56];

for (const num of numbers) {
    console.log( `values in array ${num}`);
}

const gretting = "Good Morning";

for (const greet of gretting) {
        // console.log( `values in string ${greet}` );
}

//Maps+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The Map object holds key-value pairs and remembers the original insertion order of the keys

const myMap = new Map();

myMap.set('IN', "India")
myMap.set('USA', "United States of America")
myMap.set('Fr', "France")
myMap.set('IN', "India")

// for (const element of myMap) {
//     console.log(element)
// }

for (const [key,value] of myMap) {
    // console.log(key, ":-" , value)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for-of in object
// we cannot directly iterate over an object using a for...of loop in JavaScript. The for-of loop is designed to work with iterable objects like arrays, strings, Maps, Sets, or any object implementing the iterable protocol.

const myObj = {
    game1: "FOOTBALL",
    game2: "CRICKET"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }