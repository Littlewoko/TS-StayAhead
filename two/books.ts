
type Author = {
    fname: string,
    lname: string,
}

type Book = {   
    title: string,
    author?: Author | string,
    genre: string
}

var books: Book[] = [
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