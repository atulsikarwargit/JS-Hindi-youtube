//const tinderUser = new Object()  // singletone object aise declare hota h 
const tinderUser  = {} //non singleton object

tinderUser.id =  "1234zyz"
tinderUser.name = "Samminzondy"
tinderUser.isLoggedIn = true

//console.log(tinderUser);

const  regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname : {
            firstname: "atul",
            lastname: "sikarwar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "z", 4: "y" }
const  obj4 =  { 5 :"c" , 6 : "g"}

//const obj3 =  { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 =  {...obj1, ...obj2} // yahi vala  hm use  krenge aage jada 
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    },
    {

    },
    {

    }

]

users[1].email
console.log(tinderUser);










