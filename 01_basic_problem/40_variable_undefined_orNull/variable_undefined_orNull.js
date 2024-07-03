function checkVariable(variable){
   if(typeof variable === "undefined" || variable === null){
    console.log(`the variable is undefined or null`);
   }else{
    console.log(`variable neither undefined nor null`);
   }
}

let newVariable;

checkVariable(newVariable)