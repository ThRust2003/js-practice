const prices= Symbol()
const user={
    username:"rohan",
    [prices]:199
}
function handeler(anyonject){
    console.log(`username is ${anyonject.username} ${anyonject[prices]}`)
}
handeler(user);
handeler({username:"jsdhj",
    [prices]:900})
