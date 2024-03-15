var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function called show_magicians that prints the names of magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Define a function called make_great that modifies the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Array of magician's names
var magicians = ["Zenat", "Baba", "Saqib", "Abdullah"];
// Make a copy of the array of magicians
var unchanged_magicians = __spreadArray([], magicians, true);
// Modify the array of magicians by adding "the Great" to each name
magicians = make_great(magicians);
// Call the show_magicians function to print the modified list of magicians
show_magicians(magicians);
// Call the show_magicians function to print the original list of magicians
console.log("\nOriginal Magicians:");
show_magicians(unchanged_magicians);
