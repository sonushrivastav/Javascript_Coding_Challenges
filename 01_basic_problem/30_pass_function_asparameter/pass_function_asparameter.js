function greet(){
    return 'Hello'
}

function UName(user,func){
  const msg  = func()
  console.log(`${msg} ${user}`);
}

UName("John",greet)
UName("Jack",greet)