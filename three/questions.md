What is wrong with the following code? How might it be improved?

function decrement(num: number, by?: number) {
    return num -= by;
}
Under what circumstances is narrowing necessary?

Which type of narrowing might one use in each of the cases below?

function f1(p: {x: number} | {y: string}) {}

function f2(p: Manager | Director) {}

function f3(p: string | string[]) {}

function f4(p?: string) {}
This code will not compile. Why not? What might be done to make the code compile?

function f(p: 1 | 2 | 3) {}
var x = 2;
f(x);
In a file named email.ts code and test a type predicate named isEmailable that tests whether the given object has an email property.