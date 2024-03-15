function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size.toUpperCase(), " and the message printed on it is: \"").concat(message, "\""));
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt('medium');
// Make a shirt of any size with a different message
make_shirt('small', 'Keep Calm and Code On');
