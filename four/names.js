function namesAccumulator() {
    var names = [];
    var accumulate = (function (name) {
        names.push(name);
        console.log(names.join(", "));
    });
    return accumulate;
}
var acc = namesAccumulator();
acc("one");
acc("two");
acc("three");
