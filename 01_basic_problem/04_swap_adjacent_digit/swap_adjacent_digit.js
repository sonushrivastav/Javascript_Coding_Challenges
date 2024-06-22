function swapAdjacentDigits(num){
   const numStr = num.toString();
   
   if(numStr.length %2 !== 0){
    return false
   }

   let swapArr = []
   for(let i=0;i<numStr.length;i+=2){
    swapArr.push(numStr[i+1],numStr[i])
   }

   let swapStr = swapArr.join("")
   let swapNum = parseInt(swapStr)

   return swapNum
}

module.exports = swapAdjacentDigits;