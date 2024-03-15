// Initial guest list
var guestList = ["Zenat", "Saqib", "Baba", "Jiya"];
// Function to print invitation message
function printInvitation(guest) {
    console.log("\nAsslam o Alikum Sir/Madam  ".concat(guest, ",\nYou are invited to dinner. Please join us!\nThank You\n\n"));
}
// Invite initial guests
console.log("\nInitial Guest List:\n");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    printInvitation(guest);
}
// Modify guest list
guestList[3] = "Ayesha ";
// Invite updated guests
console.log("\nUpdated Guest List:\n");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    printInvitation(guest);
}
// Identify guest who can't make it
var unableToAttend = guestList[3];
console.log("Sir/Madam ".concat(unableToAttend, " can't make it to the dinner."));
