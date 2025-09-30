Copy the code below into a file named products.ts then create and test new types using built-in utility types as follows:

a product type for which all properties are optional
a product type for which all properties are required
a product type for which all properties are read only and required
a product type that contains id, name, image, and price only
a product type that excludes id and reviews
a review type that contains reviewer, date, text, and stars
type Product = {
    id: number,
    name: string,
    image: stirng,
    description?: string
    price: number,
    categories?: string[],
    reviews?: Array<{
        reviewer: string,
        date: Date, 
        text: string,
        stars: 0 | 1 | 2 | 3 | 4 | 5
    }>
}