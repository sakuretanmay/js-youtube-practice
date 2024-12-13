// Loose equality: type conversion occurs
console.log('5' == 5); // true

// Strict equality: no type conversion, types must match
console.log('5' === 5); // false

// Greater than comparison
console.log(10 > 5); // true

// Logical AND: both conditions must be true
console.log((5 > 2) && (10 > 5)); // true

// Logical OR: at least one condition is true
console.log((5 > 10) || (10 > 5)); // true

// Logical NOT: inverts the result
console.log(!(5 > 10)); // true