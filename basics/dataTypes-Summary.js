// #Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const StrinType = "Satya";   //typeof returns String
const NumberType = -1;         //typeof returns number  
const BooleanType = true;      //typeof returns Boolean
const NullType = null;         //typeof returns object
const UndefinedType = undefined;  //typeof returns undefined
const id  = Symbol('123');       //typeof returns Symbol
const anotherId = Symbol('123')

console.log(typeof BooleanType);

//Reference(Non Primitve)

//Array, Objects, Functions

const ObjectType = {                         //typeof returns object
    username : "Satya",
    Aage: 50
}
console.log(typeof ObjectType)

const ArrObjectType = [1,"Satya",12.0]      //typeof returns object

function abc (){
console.log("Function")                     //typeof returns object function
}

console.log(typeof abc);


// Javascript is a dynamically typed language because here we do  not need to define type of the variables or data.