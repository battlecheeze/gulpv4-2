import {HasFormatter} from '../interfaces/HasFormatter.js';

// classes

export class Payment implements HasFormatter {
   constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
   ){}

   
   //method function
   format() {
      return `${this.recipient} is owed P${this.amount} for ${this.details}`;
   }
}
