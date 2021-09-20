// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //method function
    format() {
        return `${this.recipient} is owed P${this.amount} for ${this.details}`;
    }
}
