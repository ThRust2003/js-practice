let a="b";
var c="d";
if(true){
  
    var c="c";
    let a="a";
    const b="b";
}
console.log(` ${c} `)
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}


//hoisting
one()
addone(8);//this wouldnt generate an errorv due to hoisting hoisting move the definition to top var also support hoisting
          // 🔹 var Hoisting Behavior:
          // When you declare a variable with var, only the declaration is hoisted, not the assignment:
          //➡️ Function declarations are fully hoisted, meaning both the function name and body are moved to the top.
function addone(num){
    return num+1;
}
//add(8)//this would generate an error
const add=function(num){//add is expression
    return num+4;
} 

console.log(add)//refrence
console.log(add(5))//execution