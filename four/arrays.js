"use strict";
function everyNthElement(arr, nth) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += nth) {
        newArr.push(arr[i]);
    }
    return newArr;
}
var names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
var everySecondName = everyNthElement(names, 2);
