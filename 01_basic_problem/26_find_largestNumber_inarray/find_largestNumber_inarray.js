function largestNumberinArray(arr){
    // return Math.max(...arr)

    let largest = 0

    for(let i=0; i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}



module.exports = largestNumberinArray