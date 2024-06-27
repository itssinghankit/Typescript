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
const myFunc5 = <T, R>(arg: T[]): T => {
  return arg[0];
};

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

const b=anotherFunction("",1.1)

//extending interface
function anotherFunction2<T, U extends MyInterface2>(valOne: T, valTwo: U): object {
    return {
      valOne,
      valTwo,
    };
  }

const c=anotherFunction2("hello",{name:"ankit",age:20})

interface Quiz{ 
    name:string 
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[]=[]

    addToCart(product:T){
        this.cart.push(product);
    }
}