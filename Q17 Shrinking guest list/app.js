// Initial guest list
var guestList = ["Zenat", "Baba", "Saqib", "Jiya"];
// Function to print invitation message
function printInvitation(guest) {
    console.log("\nAsslam o Alikum Sir/Madam ".concat(guest, ",\nYou are invited to dinner. Please join us!\nThank You"));
}
// Function to print apology message
function printApology(guest) {
    console.log("\nSir/Madam ".concat(guest, ",\nSorry, but we can't invite you in dinner."));
}
// Invite initial guests
console.log("\nInitial Guest List:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    printInvitation(guest);
}
// Inform about the smaller dinner table
console.log("\nWe find a smaaller Dinning table, so we invite only 2 Guest");
// Remove guests until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    printApology(removedGuest);
}
// Print invitation for remaining guests
console.log("\nRemaining Guests:");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    printInvitation(guest);
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the empty list
console.log("\nEmpty Guest List:");
console.log(guestList);
