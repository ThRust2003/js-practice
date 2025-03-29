// shallow copy:object whose properties share same refrences;
// deep copy: whose properties do not share same refrences;
// shift
// Removes the first element from an array.
// ✅ Modifies the original array (mutates it).
// ✅ Returns undefined if the array is empty.
// ✅ Used to implement queues (FIFO).
// unshift 
// ✅ Adds elements at the beginning of an array.
// ✅ Modifies the original array.
// ✅ Returns the new length of the array.
// ✅ Used to implement stacks (LIFO).
const arr=new Array(1,2,3,4,4,9);
const arr2=[12,34,12,34,112,33];


 arr.push(12);
console.log(arr)
console.log(arr2)


arr.shift()
arr2.unshift(13)
console.log(arr)
console.log(typeof(arr2.join()))
console.log(arr.slice(1,4)) //doesnt include last posi + doesnt modify arr
console.log(arr.splice(1,4))//include last posi + modify arr

const array=[1,2,3,4,[1,4,7],[6,7,8,[6,8,9]]]
const flatedarray=array.flat(1)
const flatedarray2=array.flat(Infinity)

console.log(flatedarray)
console.log(flatedarray2)

arr.concat(arr2)
const arr3=new Array(1,2,3,4,4,9);
const arr4=[12,34,12,34,112,33];

const newarr=[...arr3,...arr4]
console.log(newarr)

console.log(Array.isArray("joy"))
console.log(Array.from("joy"))
  
console.log(Array.from(Object.values({ name: "joy" })));
console.log(Array.from(Object.entries({ name: "joy" })));

// const i=68686;
// const j="gjfj"
// const k="dog"
// const l={aw:12,zdf:565,jkkh:67,hjgh:"ghgj"}

// console.log(Array.of(i,j,k,l))
