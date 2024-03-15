// initial guest list 
var guestList = ["Baba", "Zenat", "Saqib", "Abdullah", "Jiya"];
// Print the invitation message 
function printInvitation(guest) {
    console.log("\nAsslam o Alikum ".concat(guest, ", \nWe want to invite u on dinner,Please join us!\nThank You"));
}
// add new member to the bigning of the array
guestList.unshift("Ayesha");
//add one new guest in the middle of the aaray
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Hafsa");
//add new guest  to the end of the array
guestList.push("Ali");
//print the new set of invitation 
console.log("\nExtending Guest list:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    printInvitation(guest);
}
//inform about the bigger dinnig table 
console.log("\nI found a Bigger Dinning table so i invite u all guys:");
