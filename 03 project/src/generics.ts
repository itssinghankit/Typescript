//suppose we want the parameter and return type of function should be same

function myFunc1(arg: number | boolean): number | boolean {
  return arg;
}

function myFunc2(arg: any): any {}

//generics
function myFunc3<T>(arg: T): T {
  return arg;
}

interface MyInterface<T> {
  prop: T;
}

interface MyInterface2 {
  name: string;
  age: number;
}

//calling
// <Type> is not required for primitive types
const a = myFunc3<MyInterface2>({ name: "abc", age: 20 });

//generics with array
function myFunc4<T>(arg: T[]): T {
  return arg[0];
}

//in arrow function format
const myFunc5 = <T,R>(arg: T[]): T => {
  return arg[0];
}

