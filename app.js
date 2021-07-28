const validator = require("validator");

const myEmail = "richardlimsiuchun";

const emailIsCorrect = validator.isEmail(myEmail);

console.log(emailIsCorrect);

console.log("This is an edit from another folder (1)");
