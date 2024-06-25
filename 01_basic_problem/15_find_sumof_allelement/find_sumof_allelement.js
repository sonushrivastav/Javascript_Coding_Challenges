function findSumAllElementArray(arr){
//   return arr.reduce((sum,acc)=> sum + acc,0)
    let sum = 0
  for(let i=0; i<arr.length;i++){
    sum += arr[i]
  }
  return sum
}

module.exports = findSumAllElementArray