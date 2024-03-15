// Initial guest list
let guestList: string[] = [`Zenat`, `Saqib` , `Baba` , `Jiya`];

// Function to print invitation message
function printInvitation(guest: string) {
    console.log(`\nAsslam o Alikum Sir/Madam  ${guest},\nYou are invited to dinner. Please join us!\nThank You\n\n`);
}
// Invite initial guests
console.log("\nInitial Guest List:\n");
for (let guest of guestList) {
    printInvitation(guest);
}
// Modify guest list
guestList[3] = "Ayesha "; 
// Invite updated guests
console.log("\nUpdated Guest List:\n");
for (let guest of guestList) {
    printInvitation(guest);
}
// Identify guest who can't make it
let unableToAttend = guestList[3]; 
console.log(`Sir/Madam ${unableToAttend} can't make it to the dinner.`);