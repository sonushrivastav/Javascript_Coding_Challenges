function sumOfDigit(num){
   let sum = 0
   while(num >0){
    sum += num % 10
    num = Math.floor(num / 10)
   }

   return sum
}

module.exports = sumOfDigit