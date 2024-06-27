//allowed
class TakePhoto1 {

  constructor(
    public burst: number,
    public cameraMode: string,
    public filter: string
  ) {}

}

let obj1 = new TakePhoto1(10, "portrait", "normal");

abstract class TakePhoto2 {

  constructor(
    public burst: number,
    public cameraMode: string,
    public filter: string
  ) {}

  abstract click(): void;

  //if we know the implementation of a method, we can provide it in abstract class which is not possible in interface
  seePhotos(){
    console.log("photos are visible");
  }

}

//not allowed- Cannot create an instance of an abstract class.`
let obj2 = new TakePhoto2(10, "portrait", "normal");

class SubClass2 extends TakePhoto2 {

  constructor(
    public burst: number,
    public cameraMode: string,
    public filter: string,
    public additionalFeatuure: number //additional feature
  ) {
    //calling parent class constructor
    //super must be called before accessing 'this' in the constructor of a derived class.
    super(burst, cameraMode, filter);
  }

  //must override method
  click() {
    console.log("tu khich meri photo!!");
  }

}

let obj3 = new SubClass2(10, "portrait", "normal", 20);

//why abstract class?
// We can have a method with implementation in abstract class without abstract keyword.
obj3.seePhotos();
