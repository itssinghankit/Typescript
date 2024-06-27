"use strict";
//src is for typescript code and its javascript equivalent is automatically generated in dist(distribution) folder
//in terminal write tsc -w to turn on watch mode which automatically generate javascript file in dist directory
console.log("typescript is here");
//acceptable in javascript but not in typescript
// class User{
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }
class User {
    constructor(email, name) {
        this.city = "gzb"; //need to give initializer
        this.email = email;
        this.name = name;
    }
}
//in constructor field name before value is not allowed like normal functions
//new keyword is compulsary
const obj = new User("ankit@gmail.com", "ankit");
obj.city = "bns";
class User2 {
    constructor(email, name) {
        this.city = "gzb";
        this.email = email;
        this.name = name;
    }
}
//written like this in professional grade code
class User3 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "gzb";
        //no need for this keyword
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //not allowed
    //   set courseCount(courseNum):void{
    //   }
    //name of getter and setter is same
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("count should not be less than 1");
        }
        this._courseCount = courseNum;
    }
    delete() {
        //something
    }
}
let obj2 = new User3("ankit@gmail.com", "ankit");
obj2.courseCount;
obj2.courseCount = 3;
