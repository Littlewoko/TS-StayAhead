1. Type annotation explicitly defines what data type a variable/ function should use
2. An object type defines the name and variable types within an object. An object literal is an actual object.
3. Yes, email is optional.
4. To handle large numbers/ highly precise numbers? The code is not robust as there is no type checking for the case where num is string.
5. done
6. Type coersion. Using as will coerce one type into another type, if possible, allowing us to overcome some type checking hurdles.
For example if something is string | null, we can coerce it into just string after a null check.
7. Literal types are more narrow than standard types. Good for enums and such.
8. Yes. Compiles into uninitialied variable/ undefined. Fails to run though.
9. Yes, the point of using typescript is to catch bugs early. Tightening the reigns at compile time is the best way to do this.
10. Any turns type checking off. Unknown is read only.