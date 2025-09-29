Under what circumstances is a function type expression warranted?

Copy the function below into a file named processor.ts and add type information as appropriate. Be sure to test it.

function processEach(arr, func) {
    for (var el of arr) {
        func(el);
    }
}
In a file named circle.ts code and test a type alias for the object given below.

var circle = {
    radius: 6,
    area: function() {
        return Math.PI * this.radius ** 2;
    },
    circumference: function() {
        return 2 * Math.PI * this.radius;
    },
    scale: function(factor) {
        this.radius *= factor;
    }
}
How does a call signature differ from a function type expression?

In a file named names.ts code and test a function based on the call signature below. The function should write to the console the name passed in and all the names passed in previously.

type NamesAccumulator = {
    names: string[],
    (name: string): void
}
What is the purpose of a generic function?

Copy the code below into a file named arrays.ts and compile it with the --strict flag. You will note that it compiles without error. Should it? There is something very odd about the last line. Can you spot it? Once you have uncovered the loophole refactor the code to close it.

function everyNthElement(arr: any[], nth: number) {
    var newArr: any[] = [];
    for (var i = 0; i < arr.length; i += nth) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
var everySecondName: string[] = everyNthElement(names, 2);
Copy the code below into a file named mailer.ts and compile it. You will note that it compiles with an error. Refactor the code such that the function will accept any object that has an email property.

function sendEmail(recipient: {email: string}) {
    console.log(`Sending email to ${recipient.email}`);
}

sendEmail({
    name: "John Smith",
    email: "john.smith@gmail.com"
});
An optional parameter...

is shorthand for what?
requires you to do what in the body of the function?
might be replaced by a what?
Copy the code below into a file named html.ts and compile it with the --strict flag. You will note that it compiles with errors. Add type information such the code compiles without error.

function createElement(tag, innerText, ...attributes) {
    var element = document.createElement(tag);
    element.innerText = innerText;
    attributes.forEach(({key, value}) => element.setAttribute(key, value));
    return element;
}
