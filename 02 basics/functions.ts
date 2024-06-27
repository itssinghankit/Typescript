//Parameter 'num' implicitly has an 'any' type, but a better type may be inferred from usage
//what if num is boolean
function addTwo(num){
    return num+2
}

function updatedAddTwo(num:number){
    return num+2
}

//similarly for string

function getUpper(val){
    return val.toUpperCase()
}

function updatedGetUpper(val:string){
    return val.toUpperCase()
}

function signupUser(name,email,pasword){}

function updatedSignupUser(name:string,email:string,isPaid:number){}

// Argument of type 'number' is not assignable to parameter of type 'string
// updatedSignupUser(1,2,3)

updatedSignupUser('1','2',3)

//default function parameter
function loginUser(name:string,email:string,password:string="12345"){

}

loginUser('a','b')

var signin= function(name,email,isPaid){
    if(isPaid==void 0){
        isPaid=true
    }
}