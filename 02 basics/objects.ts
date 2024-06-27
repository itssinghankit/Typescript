const User = {
  name: "Ankit",
  email: "ankit@gmail.com",
  isActive: true,
};

function returnObject(): { name: string; price: number } {
  return { name: "ankit", price: 0 };
  //cant do this
  //return {"ankit",0}
}

function createUser({ name: string, isPaid: boolean }) {}

//method 2 - type alias
//for seperation , ; or next line can be used
type User = {
  name: string;
  isPaid: boolean;
};

function createUser2(user: User): User {
  return { name: "ankit", isPaid: true };
}

//An argument matching this binding pattern was not provided.
// createUser()

createUser({ name: "ankit", isPaid: true });

//Object literal may only specify known properties, and 'email' does not exist in type '{ name: any; isPaid: any; }'.
// createUser({name: "ankit", isPaid: true,email :""})

let newUser = { name: "Ankit", isPaid: true, email: "ankit@gmail.com" };

//now it is acceptable
createUser(newUser);

type MyUser ={
    readonly _id:string
    name:string
    email:string
    isActive:boolean,
    creditCardDetails?:number //optional
}

let user:MyUser={
    _id:"1",
    name:"Ankit",
    email:"ankit@gmail.com",
    isActive:true
}

user.isActive=false

//Cannot assign to '_id' because it is a read-only property.
// user._id="2" 

//type of types
type cardNumber={
    cardnumber:number
}

type cardDate ={
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:string
}