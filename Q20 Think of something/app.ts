// Define an array of famous landmarks
let landmarks: string[] = [
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
landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
});
