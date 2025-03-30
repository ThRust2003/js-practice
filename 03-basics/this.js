  const user={
    username:"rohan",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}` )
        console.log(this)
    }

  }
  user.welcomemessage()
  user.username="r"
  user.welcomemessage()
  user.username="rohan Yadav"
  user.welcomemessage()
  console.log(this)//this here refers to empty object which is empty here in  browser the global object is window
  // // //   this inside an object method always refers to the current state of the object at the time the method is called.
//   Local Scope (Inside the function)

//   It first checks if username is defined inside welcomemessage.
  
//   In this case, username is not defined inside the function, so JavaScript moves to the next scope.
  
//   Object Scope (Inside the object)
  
//   JavaScript does not automatically check object properties (user.username).
  
//   Instead, you need to explicitly use this.username to reference the object property.
  
//   Global Scope
  
//   If JavaScript doesn't find username inside welcomemessage, it checks the global scope.
  
//   Since username is not declared globally, it throws: