interface TakePhoto {
  burst: number;
  cameraMode: string;
  filter: string;
}
interface ClickPhoto {
  click(): void;
}
//class implements interface
class Instagram implements TakePhoto {
  constructor(
    public burst: number,
    public cameraMode: string,
    public filter: string
  ) {}
}

//can add more features along with this
class Youtube implements TakePhoto {
  constructor(
    public burst: number,
    public cameraMode: string,
    public filter: string,
    public additionalFeatuure: number //additional feature
  ) {}
}

//class implements interfaces and overrides methods
class Facebook implements TakePhoto, ClickPhoto{
    constructor(
        public burst: number,
        public cameraMode: string,
        public filter: string
        ) {}
    //method overring
    click(){
        console.log("tu khich meri photo!!")
    }
}