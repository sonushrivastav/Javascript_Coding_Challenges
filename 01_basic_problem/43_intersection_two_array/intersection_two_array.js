function intersectionArray(arr1,arr2){
   const set1 = new Set(arr1)
   const set2 = new Set(arr2)

   let intersectRes = []
    for(let arr of set2){
        if(set1.has(arr)){
            intersectRes.push(arr)
        }
    }
    return intersectRes
}

module.exports = intersectionArray