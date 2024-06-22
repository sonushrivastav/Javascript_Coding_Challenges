function swapArrayHalves(arr){
    if(arr.length %2 !== 0){
        throw new Error("Array length must be even")

    }

    const midpoint = arr.length/2

    const firstHalf = arr.slice(0, midpoint)
    const secondHalf = arr.slice(midpoint)

    const swappArr = secondHalf.concat(firstHalf)
    return swappArr
}

module.exports = swapArrayHalves