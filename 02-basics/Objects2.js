const user={}
// const user=new Object()
user.id="123abc"
user.name="djb cjh"
user.isLoggedin=false
const regularUser={
    email:"some@gmail.com",
    name:{
         Fullname:{
            firstname:"Rohan",
            lastname:"Yadav"
         }
    }

}
console.log(regularUser.name.Fullname.firstname)


const obj ={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj,obj2);
console.log(obj3);
console.log(obj);//target is obj where obj 2 get appended

const obj4={1:"a",2:"b"}
const obj5={3:"c",4:"d"}
const obj6=Object.assign({},obj4,obj5);//target is {} where obj 4, obj 5 get appended

const obj7={...obj4,...obj5}

console.log(obj6);
console.log(obj7);

console.log(obj4);
console.log(Object.keys(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('isLogged'))

const course={
  coursename: 'js in hindi',
  price:"900",
  couseTeacher:"Rohan"
 }
 const arr=new Array(1,4,8)
 const[a,b]=arr;
 console.log(`a=${a}  b=${b}`  )
// const {price:p}=course;
// console.log(p)
// const {price}=course;
// console.log(price)