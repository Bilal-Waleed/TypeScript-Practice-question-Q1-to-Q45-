var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True, because 'car' has the value 'subaru'
// Test 2
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False, because 'car' does not have the value 'toyota'
// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford'); // True, because 'car' is not equal to 'ford'
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True, because 'car' has the value 'subaru' and the same type (string)
// Test 5
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False, because 'car' has the value 'subaru', but the comparison is case-sensitive
// Test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False, because 'car' has the value 'subaru'
// Test 7
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford'); // True, because 'car' is not equal to 'ford'
// Test 8
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // False, because the length of 'car' is not greater than 5
// Test 9
console.log("Is car.length < 10? I predict True.");
console.log(car.length < 10); // True, because the length of 'car' is less than 10
// Test 10
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su')); // True, because 'car' starts with the characters 'su'
