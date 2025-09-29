function f1(p: {x: number} | {y: string}) {
    if ("x" in p) {
        return p.x;
    } else {
        return p.y;
    }
}

type Manager = {
    name: string
}

type Director = {
    name: string
}

function f2(p: Manager | Director) {
    return p.name;
}

function f3(p: string | string[]) {
    if (typeof(p) === "string") {
        console.log(p)
    } else {
        p.forEach(ps => console.log(ps));
    }
}

function f4(p?: string) {
    if (p) {
        console.log(p)
    }
}

function f(p: 1 | 2 | 3) {}
const x = 2;
f(x);