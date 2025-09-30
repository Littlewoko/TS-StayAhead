In a file named movie.ts code and test a type alias/interface for movie objects. Each movie has a title, genre, and year, and should not be modified after instantiation.

In a file named reports.ts code and test an index signature to suit the following data:

var reports = {
    "Jimmy Smith": "Jimmy has worked hard this year and is secure in both reading and writing.",
    12771: "Sally is easily distracted but is secure in both reading and writing.",
    "Nick Watson": "Nick is quiet and unassuming. He reads well but his writing requires more work.",
    "Vanessa Thrip": "Vanessa is very disruptive in class and occupies too much of the teacher's time.",
    59327: "Harry is a good boy but is struggling with both reading and writing.",
    ...
}
Add to movie.ts a type alias/interface named Reviewable that describes an array of reviews (a review comprises a user, date, text, and 0-5 star rating). Then combine the Movie and Reviewable types to create a new ReviewableMovie type.

Differentiate between a type alias and an interface.

In a file named validation.ts code and test a generic type alias/interface that describes an object with one method - validate, and one property - errors. The validate method should return a boolean and the errors property should be an optional array of error messages.

What does it mean to say a ReadonlyArray guarantees constancy but not immutability?

Products might lend themselves to a tuple type. What would a product tuple type look like assuming each product has a description, category (Furniture, Home Decor, Kitchen, Bedding & Bath), price, and in stock flag? Why might one choose a tuple type over a regular object type?