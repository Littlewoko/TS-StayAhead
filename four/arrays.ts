function everyNthElement<T>(arr: T[], nth: number) {
    var newArr: T[] = [];

    if (nth <= 0) return newArr;
    
    for (var i = 0; i < arr.length; i += nth) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
var everySecondName: string[] = everyNthElement(names, 2);