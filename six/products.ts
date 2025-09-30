// a product type for which all properties are optional
// a product type for which all properties are required
// a product type for which all properties are read only and required
// a product type that contains id, name, image, and price only
// a product type that excludes id and reviews
// a review type that contains reviewer, date, text, and stars
type Review = {
    reviewer: string,
    date: Date,
    text: string,
    stars: 0 | 1 | 2 | 3 | 4 | 5
}

type Product = {
    id: number,
    name: string,
    image: string,
    description?: string
    price: number,
    categories?: string[],
    reviews?: Array<Review>
}

type Optional = Partial<Product>

type NoOptional = Required<Product>

type ReadonlyNoOptional = Readonly<NoOptional>

type Has = 'id' | 'name' | 'image' | 'price'

type ContainsRequired = Pick<Product, Has>

type HasNot = 'id' | 'reviews'

type exclude = Omit<Product, HasNot>

type ReviewsType = Product['reviews']; // Array<Review> | undefined
type InternalReviewType = NonNullable<ReviewsType>[number];
