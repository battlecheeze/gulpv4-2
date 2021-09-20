"use strict";
// explicit types
let character;
let age;
let isLoggedIn;
//age = 'luigi';
//isLoggedIn = true;
//isLoggedIn = Boolean(25);
// arrays
// initialise empty string array to avoid error "Cannot read property 'push' of undefined
let ninjas = [];
// ninjas [10,20];
//ninjas = [String(10), String(23)];
//
ninjas.push('christian');
// union types
//
let mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
let uid;
uid = '123';
uid = 123;
//uid = false;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'Mario', age: 20, beltColour: 'black', /*skills: []*/ };
