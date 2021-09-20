import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes

export class Invoice implements HasFormatter {
   client: string;
   details: string;
   amount: number;

   // constructor function
   constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
   }
   
   //method function
   format() {
      return `${this.client} owes P${this.amount} for ${this.details}`;
   }
}
