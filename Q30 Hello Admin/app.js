var usernames = ['admin', "zenat", "baba", "saqib"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("\nHello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", \nthank you for logging in again."));
    }
}
