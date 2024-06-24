function findMaxSumNumer(sum){
  let n=0
  let currentSum = 0

  while(currentSum <=sum){
    n++
    currentSum += n
  }

  return n-1
}

module.exports = findMaxSumNumer