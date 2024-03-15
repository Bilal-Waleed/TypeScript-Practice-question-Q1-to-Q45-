// Initial guest list
let guestList: string[] = [`Zenat`, `Baba`, `Saqib`, `Jiya`];
// Function to print invitation message
function printInvitation(guest: string) {
    console.log(`\nAsslam o Alikum Sir/Madam ${guest},\nYou are invited to dinner. Please join us!\nThank You`);
}
// Function to print apology message
function printApology(guest: string) {
    console.log(`\nSir/Madam ${guest},\nSorry, but we can't invite you in dinner.`);
}
// Invite initial guests
console.log(`\nInitial Guest List:`);
for (let guest of guestList) {
    printInvitation(guest);
}
// Inform about the smaller dinner table
console.log(`\nWe find a smaaller Dinning table, so we invite only 2 Guest`);
// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop() as string;
    printApology(removedGuest);
}
// Print invitation for remaining guests
console.log(`\nRemaining Guests:`);
for (let guest of guestList) {
    printInvitation(guest);
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the empty list
console.log(`\nEmpty Guest List:`);
console.log(guestList);
