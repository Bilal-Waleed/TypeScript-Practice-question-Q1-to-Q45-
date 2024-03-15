function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
let magicians: string[] = [`Zenat`, `Saqib` , `Baba` , `Abdullah`];

// Make great magicians and show them
show_magicians(make_great(magicians));
