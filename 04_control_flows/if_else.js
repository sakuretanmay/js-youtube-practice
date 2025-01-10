let age = 20;
let hasID = true;
let score = 85;

// Simple if
if (age >= 18) {
    console.log("You are an adult.");
}

// if-else
if (hasID) {
    console.log("ID is valid.");
} else {
    console.log("ID is required.");
}

// if-else if-else
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Nested if
if (age >= 18) {
    if (hasID) {
        console.log("Access granted.");
    } else {
        console.log("Access denied. ID required.");
    }
} else {
    console.log("Access denied. You must be at least 18.");
}
