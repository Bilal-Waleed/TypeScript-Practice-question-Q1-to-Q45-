// Define a function called makeSandwich that accepts an array of sandwich items
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item) { return console.log("- " + item); });
    }
    console.log(); // Empty line for clarity
}
// Call the makeSandwich function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss", "Mayo");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich(); // Plain sandwich
