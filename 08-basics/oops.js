// const object={
//     type:'integer',
//     name:'Rohan',
//     fun:function(){
//        console.log('hello',this.type)
//     }
// }
// console.log(object.type)
// console.log(object.fun())








// const user2=(ty,na)=>{
//     this.ty=ty;
//     this.na=na; 
//     return this
// }
// const u5=user2('ramu','kaka')
// console.log(u5)







function user(type,name){
    this.type=type;
    this.name=name; 
    return this
}
const u4=user('ramu','kaka')
console.log(u4)
const u2=user('ramu4','kaka')
console.log(u2)
// when we dont new it doesnt create new instance but 
// updates old object ponly
// now let use new
const u=new user('ramu','kaka')
console.log(u)
const u6=new user('ramu4','kaka')
console.log(u6)