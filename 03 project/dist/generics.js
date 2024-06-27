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
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
const b = anotherFunction("", 1.1);
//extending interface
function anotherFunction2(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
const c = anotherFunction2("hello", { name: "ankit", age: 20 });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
