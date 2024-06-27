//the methods can be defined in both ways
//interface definition
interface Person{
     name:string,
     age:number,
     speak(sentence:string):void,
     bark:(sentence:string)=>void
}

//interface implementaion
let person:Person={
    name:"ankit",
    age:20,
    speak(secondName){ //no need to define the type of sentence as it is already defined in the interface
        console.log(secondName )
    },
    bark:(sentence="woof")=>{ //can also use arrow function
        console.log(sentence)
    }
}

//interface using - abstraction here
person.speak("my name is ankit")
person.age = 32

//interface reopening - adding new fields to same interface
interface Person{
    googleId?:string //here we defined it null so no need to change "person" for adding googleId field in it
}

person.googleId="hello"

//extending interface - adding fields of one interface to another interface
interface Admin extends Person{
    role: "admin" | "ta" | "learner"
}

let admin:Admin={
    name:"Ankit",
    age:20,
    bark(sentence) {
        console.log(sentence)
    },
    speak(sentence) {
        console.log()
    },
    role:"admin",
    googleId:"2345654323"
}