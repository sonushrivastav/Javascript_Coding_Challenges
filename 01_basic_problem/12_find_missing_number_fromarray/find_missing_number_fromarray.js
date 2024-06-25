function findMissingNumberFromArray(arr){
    const n = arr.length + 1
    const sum = (n*(n+1))/2
    const arrSum = arr.reduce((acc,num)=> acc + num,0)
    return sum - arrSum
}

module.exports = findMissingNumberFromArray