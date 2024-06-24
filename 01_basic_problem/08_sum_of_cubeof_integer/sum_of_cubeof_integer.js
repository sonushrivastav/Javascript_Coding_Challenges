function sumOfCubeOfAllInteger(num){
   let sum = 0

   for(let i=0; i<= num ;i++){
    sum += i*i*i
   }
   return sum
}

module.exports = sumOfCubeOfAllInteger