// Define a function called createCar that stores information about a car in an Object
function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { [key: string]: any; manufacturer: string; modelName: string } {
    let car: { [key: string]: any; manufacturer: string; modelName: string } = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    
    // Merge additional options into the car Object
    options.forEach(option => {
        car = { ...car, ...option };
    });

    return car;
}

// Call the createCar function with the required information and additional key-value pairs
let car = createCar('Toyota', 'Camry', { color: 'red' }, { year: 2022 });

// Print the Object to make sure all the information was stored correctly
console.log(car);
