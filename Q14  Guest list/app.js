// let Guest_list: string[] =[`Zenat`, `Baba`, `Jiya`, `Saqib`];
// for(let i=0; i<Guest_list.length; i++) {
//     console.log( `\n\nAssalam o Alikum Sir/Madam ` + Guest_list[i] +`,\nWe want to invite u on dinner tomorrow.\n\nThank You`)
// }
// Guest List
var guestList = ["Zenat", "Saqib", "Baba", "Jiya"];
// Invite each guest to dinner
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("\n\nAssalam o Alikum Sir/Madam ".concat(guest, ", \nWe want to invited u on dinner.\n\nThank You"));
}
