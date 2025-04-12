// fetch('https//').then().console.error().finally();
// const promise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log('async task 2');
//     resolve()
// },1000)
// }).then(function(){
//     console.log('async')
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve({username:'hello',email:'chai'})
//     },1000)
   

// }).then(function(user){
//     console.log(user)
// })

// const promise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },2000)
   
// })
// promise2.then(function(){
//     console.log('async')
// })
// const promise3=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true;
//         console.log("hi");
//         resolve({name:'rohan',gender:'male'})
//         if(error==true)
//          reject("got ann error bitc")
//     },2000)
// })
// promise3.then((user)=>{
//     console.log(user)
//     return user.name}
// ).then((user)=>{console.log(user)})
// .catch(function(err){
//     console.log(err)
// }).finally(()=>{
//     console.log('the prmise is either resolved or rejected')
// })
const promise3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            console.log("hi");
        resolve({name:'rohan',gender:'male'})
        }
        
        else
         reject("got ann error bitc")
    },2000)
})
async function ans(){
    
    try {
        const a=await promise3
        console.log(promise3)
    } catch (error) {
        console.log(error)
    }
 
}
ans()
fetch().then((res)=>(res.json)).then((data)=>{console.log(data)}).catch(()=>console.log(error))
//thenable//chainable
//res.json is used to convert string to json//fetch is working before any other await async how?