"use strict";
/*
let greet = () => {
   console.log("hello, world");
}
*/
let greet;
//greet = "hello";
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
