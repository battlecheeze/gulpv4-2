// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi';

//isLoggedIn = true;
//isLoggedIn = Boolean(25);

// arrays
// initialise empty string array to avoid error "Cannot read property 'push' of undefined
let ninjas: string[] = [];
// ninjas [10,20];
//ninjas = [String(10), String(23)];
//
ninjas.push('christian');

// union types
//
let mixed: (string|number|boolean)[] = [];

mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;
//uid = false;
// objects

let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
   name: string,
   age: number,
   beltColour: string
}

ninjaTwo = { name: 'Mario', age: 20, beltColour: 'black', /*skills: []*/ };
