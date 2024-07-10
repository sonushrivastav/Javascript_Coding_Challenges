function mergeArrRemoveDuplicate(arr1,arr2){
   const mergArr = arr1.concat(arr2);
   let uniqueArr = []

   for(let i of mergArr){
      if(uniqueArr.indexOf(i) === -1){
         uniqueArr.push(i)
      }
   }
   return uniqueArr
}

module.exports = mergeArrRemoveDuplicate