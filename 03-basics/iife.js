(function chai(co){
    console.log("db connected")
})();//always use semi coln
(function chai(co){
    console.log("db connected")
})("nmnm");
//immediately invoked function expression
// ✅ Without IIFE (Global Variables Overwrite Each Other)
//  Variables inside IIFE do not pollute the global scope










// function makeTea(typeofTea){
    
//     return `makeTea:${typeofTea}`
// }
// function processTeaOrder(teafunction){
  
//     return teafunction("teaFunction")
// }
// let order=processTeaOrder(makeTea);

// console.log(order);