function processEach(arr: any[], func: (arg: any) => void) {
    for (var el of arr) {
        func(el);
    }
}