let a=0;
const b=4;
for( a=0;a<9;a+=2){
    console.log(a)
}
do{
    console.log(a++);
}while(a<100)
    const arr=[10,12,19,10]
    for(const a of arr){
        console.log(a)
    }
    const map=new Map();
    map.set("a","A")
    map.set("b","B")
    map.set("c","C")
    map.set("d","D")
    for (const [key,value] of map) {
        console.log(key+" "+value)
    }
    const j={
        a:"k",
        b:'o'
    }
    for(const key in j){
       console.log(key+" "+j[key])
    }
    // for (const key of j) {//object is not iterable thatswhy we cant use it in for of we use for in for it 
    //     console.log(key)
    // }
    // const coding=["js","guk","l"];
    const boy=(val,i,ar)=>{
           console.log(`${val}   ${i}  ${ar}`)
          
     
    }
    coding.forEach(boy)