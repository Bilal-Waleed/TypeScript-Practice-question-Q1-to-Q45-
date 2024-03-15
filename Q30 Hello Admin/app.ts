let usernames: string[] = ['admin', `zenat` , `baba` , `saqib` ];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("\nHello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, \nthank you for logging in again.`);
    }
}
