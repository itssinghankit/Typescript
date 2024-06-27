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
  email: string;
  name: string;
  city: string = "gzb"; //need to give initializer
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

//in constructor field name before value is not allowed like normal functions
//new keyword is compulsary

const obj = new User("ankit@gmail.com", "ankit");
obj.city = "bns";
