let greetings: String = "hello world";

//cant reassign a value of different type
// greetings= 6

let myNum = 6;

//cant use string methods on number
// myNum.toUpperCase()

greetings.toUpperCase();

console.log(greetings);

//basic types
let a: string = "ankit";
let b: number = 10;
let c: boolean = true;

let userId: string;

//dont write type if you are assigning a value
let userId2 = "ankit";

let num = 10;
num = 20;

//in this case automatic inference is not running so we need to specify the type
// let hero;

let hero: string;

function gethero() {
  return "hero";
}

//here type is Any if dont specify type
// hero=gethero()

hero = gethero();

/* Any is not a type that you should use in your code. It is a type that TypeScript uses to represent any JavaScript value.
 */
