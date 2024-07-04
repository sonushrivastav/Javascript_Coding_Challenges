function arrayAreEqual(arr1,arr2){
   //approch1
   if (arr1.length !== arr2.length ) return false
   for(let i=0;i<arr1.length;i++){
    if(arr1[i] !==arr2[i]) return false
   }
   return true

   //approahc2
   const set1 = new Set(arr1)
   for(let arr of arr2){
    if(set1.has(arr)) return true
   }
   return false

   //approach3
   const set1 = new Set(arr1)
   const commonElem = arr2.filter(item=> set1.has(item))
   return commonElem
}

module.exports = arrayAreEqual