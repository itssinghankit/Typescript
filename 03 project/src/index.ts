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

class User2 {
  public email: string;
  private name: string;
  readonly city: string = "gzb";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

//written like this in professional grade code
class User3 {
  private _courseCount = 1;

  protected views = 0;

  readonly city: string = "gzb";
  constructor(public email: string, private name: string) {
    //no need for this keyword
  }

  //getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //not allowed
  //   set courseCount(courseNum):void{

  //   }

  //name of getter and setter is same
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("count should not be less than 1");
    }
    this._courseCount = courseNum;
  }

  private delete(){
    //something
  }
}

let obj2=new User3("ankit@gmail.com","ankit")
obj2.courseCount
obj2.courseCount=3

//inheritance
class SubClass extends User3{
    isFamily:boolean=false

    changeViews(){
        //views is protected so can be accessed
        this.views++
    }
    
}

