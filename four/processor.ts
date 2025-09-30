function processEach<T>(arr: T[], func: (arg: T) => void) {
    for (var el of arr) {
        func(el);
    }
}