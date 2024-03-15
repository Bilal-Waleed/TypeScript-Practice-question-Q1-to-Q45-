function make_great(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Array of magician's names
var magicians = ["Zenat", "Saqib", "Baba", "Abdullah"];
// Make great magicians and show them
show_magicians(make_great(magicians));
