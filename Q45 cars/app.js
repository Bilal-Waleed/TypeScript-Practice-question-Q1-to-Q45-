var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define a function called createCar that stores information about a car in an Object
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Merge additional options into the car Object
    options.forEach(function (option) {
        car = __assign(__assign({}, car), option);
    });
    return car;
}
// Call the createCar function with the required information and additional key-value pairs
var car = createCar('Toyota', 'Camry', { color: 'red' }, { year: 2022 });
// Print the Object to make sure all the information was stored correctly
console.log(car);
