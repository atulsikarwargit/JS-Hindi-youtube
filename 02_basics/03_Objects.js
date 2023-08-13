// //singletone

// //object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name : "Atul",
//     "full name": "Atul sikarwar",
//     age : 23,
//     [mySym] : "myKey1",
//     location: "Jaipur",
//     email: "atulsikarwar@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday", "Saturday"]
//  }
// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // console.log(JsUser[mySym]);
// // console.log(JsUser);

// // JsUser.email = "atul@chatgpt.com"
// // //Object.freeze(JsUser)
// // JsUser.email = "atul@amazon.com"
// // console.log(JsUser);


// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// //console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//singleton-- jb koi object constructor s create hote to bo singleton hota h 
//Object.creat--yahi bola jata h constructor method

//Object Literal 

const mySym = Symbol("Key1")
 const JsUser = {
    name : "Hitesh",
    "fullname" : "Atul Sikarwar",
    [mySym] : "Mykey1",
    age : 23,
    city : "Jaipur",
    email :  "atul@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday",    "Saturday"]
 }

// console.log(JsUser.lastLoginDays);
// console.log(JsUser.city);
// console.log(JsUser["email"]);
// console.log(typeof JsUser.mySym);

// JsUser.email = "atul@amazon.com"
// console.log(JsUser);
// Object.freeze(JsUser)
// JsUser.city = "Agra"
// console.log(JsUser);

JsUser.greeting = function(){
   console.log("hello JS JsUser");
}
 JsUser.greetingTwo = function(){
   console.log(`Hello JS user ${this.name}`);
 }

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

