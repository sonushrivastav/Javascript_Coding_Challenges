function sum(){
    console.log(arguments);   // object {}
   if(arguments.length === 0){
    console.log(`you have not passed any arguments`);
   }else if(arguments.length === 1){
       console.log(`pass at least two aguments`);
   }else{
    let result = 0
    for(i=0;i<arguments.length;i++){
        result = result + arguments[i]
    }
    console.log(result);
   }
}

module.exports = sum