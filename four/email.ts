function sendEmail<T extends {email: string}>(recipient: T) {
    console.log(`Sending email to ${recipient.email}`);
}

sendEmail({
    name: "John Smith",
    email: "john.smith@gmail.com"
});