let current_users: string[] = ['john', 'mary', 'alex', 'sarah', 'david'];
let new_users: string[] = ['John', 'jane', 'alex', 'mike', 'emily'];

for (let new_user of new_users) {
    let usernameExists: boolean = false;

    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }

    if (usernameExists) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
