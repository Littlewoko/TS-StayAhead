1. by is optional. There should be a check to see if by is present and either throw an exception, or simply return num

function decrement(num: number, by?: number) {
    if (by) {
        return num -= by;
    } else {
        return num;
    }
}

2. When using union types with different type interfaces, so that we can ensure we are interfacing with the correct type.

3. look in code

4. make it const

5. hmm