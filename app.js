const validator = require("validator");

const myEmail = "richardlimsiuchun";

const emailIsCorrect = validator.isEmail(myEmail);

console.log(emailIsCorrect);
