function rotateArray(arr,k){
   const n = arr.length
   k = k % n
   return arr.slice(n-k).concat(arr.slice(0,n-k))
}

module.exports = rotateArray