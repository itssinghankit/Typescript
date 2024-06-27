let score:number | string = 33
score="sfsf"

//union of Type
type Admin ={
    username:string
}
let unionType:Admin| string={username:"Ankit"}

//Type Guard
//typeof

function getDbId(id:number | string){
    console.log(`DB id is ${id}`)
}
getDbId(33)
getDbId("33")

// function getDbId2(id:number | string){
//    id.toUpperCase() //error because of number
// }

function getDbId3(id:number | string){
 if(typeof id ==="string"){
    id.toUpperCase()
 }
}

//array of different types using union
const data:(string|number)[]=[1,2,"3","4"]

// error - either string or array of number
// const data2: string | number[]=[1,2,"3"] 

//either array of string or array of number
const data2: string[] |  number[]=["1","2"]

let person : "Ankit" | "pushkar"
person="pushkar"
// person="rahul" //error

