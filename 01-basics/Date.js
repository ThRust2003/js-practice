const d=new Date();
const hindi=d.toLocaleString('hi-IN',
    {
        weekday:'long',
        year:"numeric",
        month:"long",
        day:"numeric"
    }
)
console.log(hindi)
// const date=new Date(2024,6,17,5,30)
// console.log(date.toLocaleString())
// const ts=Date.now();
// console.log(ts);