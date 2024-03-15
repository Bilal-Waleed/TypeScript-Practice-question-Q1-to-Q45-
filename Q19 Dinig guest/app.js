// Defining the list of guests
var guests = ["Zenat", "Saqib", "Baba"];
// Printing invitation messages to each guest
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", \nyou are invited to dinner. Please join us for an evening of great conversation.\n"));
});
// Printing the total number of guests invited to dinner
console.log("You are inviting ".concat(guests.length, " people to dinner."));
