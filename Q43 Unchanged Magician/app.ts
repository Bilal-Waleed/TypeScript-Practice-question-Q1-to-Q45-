// Define a function called show_magicians that prints the names of magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Define a function called make_great that modifies the array of magicians by adding "the Great" to each name
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

// Array of magician's names
let magicians: string[] = [`Zenat` , `Baba` , `Saqib` , `Abdullah`];

// Make a copy of the array of magicians
let unchanged_magicians: string[] = [...magicians];

// Modify the array of magicians by adding "the Great" to each name
magicians = make_great(magicians);

// Call the show_magicians function to print the modified list of magicians
show_magicians(magicians);

// Call the show_magicians function to print the original list of magicians
console.log("\nOriginal Magicians:");
show_magicians(unchanged_magicians);
