"use strict";
function sendEmail(recipient) {
    console.log("Sending email to ".concat(recipient.email));
}
sendEmail({
    name: "John Smith",
    email: "john.smith@gmail.com"
});
