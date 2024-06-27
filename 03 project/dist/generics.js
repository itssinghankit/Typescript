"use strict";
//suppose we want the parameter and return type of function should be same
function myFunc1(arg) {
    return arg;
}
function myFunc2(arg) { }
//generics
function myFunc3(arg) {
    return arg;
}
//calling
// <Type> is not required for primitive types
const a = myFunc3({ name: "abc", age: 20 });
//generics with array
function myFunc4(arg) {
    return arg[0];
}
//in arrow function format
const myFunc5 = (arg) => {
    return arg[0];
};
