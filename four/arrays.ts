function everyNthElement(arr: any[], nth: number) {
    if (nth <= 0) return arr;
    
    var newArr: any[] = [];
    for (var i = 0; i < arr.length; i += nth) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var names = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
var everySecondName: string[] = everyNthElement(names, 2);