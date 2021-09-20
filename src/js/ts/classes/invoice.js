// classes
export class Invoice {
    // constructor function
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //method function
    format() {
        return `${this.client} owes P${this.amount} for ${this.details}`;
    }
}
