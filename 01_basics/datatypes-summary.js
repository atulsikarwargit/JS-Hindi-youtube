// Primitive

// 7 types : Number, Null, String, Symbol, Boolean, BigInt, Undefined

const score = 100;
const scoreValue = 50.56

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')
console.log(id === anotherId);


// 2 things master in JS object & web events or browser events

// Reference type(Non primitive)

//Array, Objects, Functions

const heros = ['shakitmaan', 'naggraj', 'doga']

let myObj = {
    name :"javasript",
    level : "basic"
}

let myFunction = function sample  (){
    console.log("hib  world");
}


const BigInt = 5466n
console.log(typeof BigInt);