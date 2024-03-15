// Tests for equality and inequality with strings
console.log("Equality Test with Strings:");
console.log("'apple' == 'apple':", 'apple' == 'apple'); // True
console.log("'apple' != 'banana':", true); // True
console.log("'apple' == 'Apple':", false); // False
console.log("'apple' != 'apple':", 'apple' != 'apple'); // False

// Tests using the lower case function
console.log("\nLowercase Test:");
console.log("'HELLO'.toLowerCase() == 'hello':", 'HELLO'.toLowerCase() == 'hello'); // True
console.log("'HeLLo'.toLowerCase() != 'hello':", 'HeLLo'.toLowerCase() != 'hello'); // False

// Numerical tests
console.log("\nNumerical Tests:");
console.log("5 > 3:", 5 > 3); // True
console.log("10 < 5:", 10 < 5); // False
console.log("7 >= 7:", 7 >= 7); // True
console.log("4 <= 2:", 4 <= 2); // False

// Tests using "and" and "or" operators
console.log("\nLogical AND and OR Tests:");
console.log("(5 > 3) && (10 < 5):", (5 > 3) && (10 < 5)); // False
console.log("(5 > 3) || (10 < 5):", (5 > 3) || (10 < 5)); // True

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("\nArray Inclusion Test:");
console.log("Is 'apple' in the array?", fruits.includes('apple')); // True
console.log("Is 'grape' in the array?", fruits.includes('grape')); // False

// Test whether an item is not in an array
console.log("\nArray Exclusion Test:");
console.log("Is 'apple' not in the array?", !fruits.includes('apple')); // False
console.log("Is 'grape' not in the array?", !fruits.includes('grape')); // True
