//Argument of type 'string' is not assignable to parameter of type 'never'.
// const superHeros=[]
// superHeros.push("spiderman")

const superHeros: string[] = [];
superHeros.push("spiderman");

const heroPower: Array<string> = [];
heroPower.push("web slinging");

//cant use User as variable name here as it is already defined in other file
type UserType = {
  name: string;
  isActive: boolean;
};

//array of defined Type
//basically it is array of objects
const allUser: UserType[] = [];

allUser.push({ name: "Ankit", isActive: false });

//array of array of number

const arrayArrayNumber: number[][] = [];

arrayArrayNumber.push([1, 2, 3, 4], [1, 2]);
