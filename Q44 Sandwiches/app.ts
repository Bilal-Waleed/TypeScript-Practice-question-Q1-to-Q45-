// Define a function called makeSandwich that accepts an array of sandwich items
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("You ordered a plain sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => console.log("- " + item));
    }
    console.log(); // Empty line for clarity
}

// Call the makeSandwich function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss", "Mayo");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich(); // Plain sandwich
