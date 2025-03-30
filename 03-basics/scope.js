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
one()
addone(8);//this would nt generate an errorv 
function addone(num){
    return num+1;
}
//add(8)//this would generate an error
const add=function(num){//add is expression
    return num+4;
} 

console.log(add)//refrence
console.log(add(5))//execution