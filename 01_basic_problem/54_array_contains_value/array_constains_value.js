// Q: Write a #JavaScript Program to Check if An Array Contains a Specified Value.

function containsValue(arr,value){
   return arr.includes(value)
}

const arr = [1,2,3,4,5,6]
const valuetoCheck1 = 3
const valuetoCheck2 = 6

const result = containsValue(arr,valuetoCheck1)
console.log(`Array contains ${valuetoCheck1}`,result);