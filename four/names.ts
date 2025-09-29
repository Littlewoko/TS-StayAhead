type NamesAccumulator = {
    names: string[],
    (name: string): void
}

function namesAccumulator(): NamesAccumulator {
    const names: string[] = [];
    const accumulate = ((name: string) => {
        names.push(name);
        console.log(names.join(", "));
    }) as NamesAccumulator;

    return accumulate;
}

const acc = namesAccumulator();
acc("one");
acc("two");
acc("three");