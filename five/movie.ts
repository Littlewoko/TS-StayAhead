interface Book {
    readonly title: string,
    readonly genre: string,
    readonly year: number
}

interface Review {
    user: string,
    date: Date,
    text: string,
    rating: 0 | 1 | 2 | 3 | 4 | 5
}

interface ReviewableBook extends Book, Review {

}

const reviewable: ReviewableBook = {
    title: "Dracula",
    genre: "Gothic Horror",
    year: 1897,
    user: "Bradley",
    date: new Date(),
    text: "Pretty slick",
    rating: 5
}