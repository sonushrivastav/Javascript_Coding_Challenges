function testVariable(variable){
   if(typeof variable === "function"){
      console.log(`the variable is of function type`);
   }else{
     console.log(`the variable is not function`);
   }
}

const count = true
const x = function(){
    console.log(`hello`);
}

testVariable(count)
testVariable(x)