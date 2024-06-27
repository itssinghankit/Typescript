const User = {
    name :"Ankit",
    email : "ankit@gmail.com",
    isActive : true
}

function returnObject():{name:string,price:number}{
    return {name:"ankit",price:0}
    //cant do this
    //return {"ankit",0}
}

function createUser({name:string, isPaid:boolean}){
     
}

//An argument matching this binding pattern was not provided.
// createUser()

createUser({name: "ankit", isPaid: true})

//Object literal may only specify known properties, and 'email' does not exist in type '{ name: any; isPaid: any; }'.
// createUser({name: "ankit", isPaid: true,email :""})

let newUser={name:"Ankit", isPaid: true, email:"ankit@gmail.com"}

//now it is acceptable
createUser(newUser)