// Define an array of famous landmarks
var landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Statue of Liberty",
    "Machu Picchu",
    "Pyramids of Giza",
    "Colosseum",
    "Sydney Opera House",
    "Petra",
    "Acropolis of Athens"
];
// Print the list of landmarks
console.log("\nList of Famous Landmarks:\n");
landmarks.forEach(function (landmark, index) {
    console.log("".concat(index + 1, ". ").concat(landmark));
});
