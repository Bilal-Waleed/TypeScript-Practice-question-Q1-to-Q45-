// Define an object representing a car
let car1: { make: string, model: string, year: number, color: string } = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Silver"
};

let car2: { make: string, model: string, year: number, color: string } = {
    make: "Honda",
    model: "Civic",
    year: 2018,
    color: "Black"
};

let car3: { make: string, model: string, year: number, color: string } = {
    make: "Ford",
    model: "Mustang",
    year: 2022,
    color: "Red"
};

// Print information about each car
console.log("\nInformation about Cars:\n");
console.log("Car 1:");
console.log(`Make: ${car1.make}`);
console.log(`Model: ${car1.model}`);
console.log(`Year: ${car1.year}`);
console.log(`Color: ${car1.color}`);

console.log("\nCar 2:");
console.log(`Make: ${car2.make}`);
console.log(`Model: ${car2.model}`);
console.log(`Year: ${car2.year}`);
console.log(`Color: ${car2.color}`);

console.log("\nCar 3:");
console.log(`Make: ${car3.make}`);
console.log(`Model: ${car3.model}`);
console.log(`Year: ${car3.year}`);
console.log(`Color: ${car3.color}`);
