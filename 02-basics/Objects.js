const mySym=Symbol("key1")
//object literal
const JsUser={
    name:"hitesh",
    "full name":"hitesh choudhary", 
    age:18,
    location:"jaipur",
    email: "hitesh@gmail.com",
    [mySym]:"hgjg",


}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
// Object.freeze(JsUser);
JsUser.email="kjbhjhjvhv@gmail.com"
console.log(JsUser)
JsUser.greeting=function(){
    console.log("hello Js User")

}
console.log(JsUser.greeting)//just a refrence used when u dont wanna execute it but instead just wanna use refrence
console.log(JsUser.greeting())//when you wanna execute it plus it also return return value which is undefined here
