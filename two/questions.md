What is a type annotation, and what effect does it have on your code?

How does an object type differ from an object literal?

Will the following code compile? Why/why not?

var x = {name: "Smith"};
...
var client: {name: string, email?: string} = x;
Why might the type of the parameter num be a union? Is this code robust? Why/why not?

function isDivisibleBy(num: number | string, divisor: number) {
    return !(num % divisor);
}
In a file named books.ts code and test an alias/aliases to suit the following data:

var books = [
    {
        title: "The Gruffalo",
        author: {
            fname: "Julia",
            lname: "Donaldson"
        },
        genre: "Childrens"
    },
    {
        title: "The Iliad",
        author: "Homer",
        genre: "Epic"
    },
    {
        title: "Brave New World",
        author: {
            fname: "Aldous",
            lname: "Huxley"
        },
        genre: "Fiction"
    },
    {
        title: "Beowulf",
        genre: "Epic"
    }
];
Explain the as keyword.

What is a literal type, and what purpose do literal types serve?

Will the following code compile? Why/why not? Is the code robust? Why/why not?

var username: string | undefined;
...
console.log(username!.toLowerCase());
As a general rule, do you think strict null checks should be enabled? Why/why not?

What is the difference between the any and unknown types?