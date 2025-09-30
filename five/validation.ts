type ValidationError = {
    property: string,
    message: string
}

interface Validatable {
    errors: ValidationError[]
    validate(): boolean
}

interface SomeObject extends Validatable {
    zero: number
}

const validated: SomeObject = {
    errors: [],
    zero: 0,
    validate() {
        this.errors = [];

        if(this.zero === 0) {
            return true;
        }

        this.errors.push({
            property: "zero",
            message: "zero should be... 0!"
        });

        return false
    }
}

validated.zero = 1;
console.log(validated.validate());
console.log(validated.errors);

validated.zero = 0;
console.log(validated.validate());
console.log(validated.errors);
