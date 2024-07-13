// Q: Write a #JavaScript Program to Remove Specific Item From an Array.

function removeItemSpecified(arr,item){
    const index = arr.indexOf(item)
    if(index !== -1){
        arr.splice(index,1)
    }
    return arr
}

const array = [1,2,3,4,5,6]
const itemToRemove= 4

const resultArray= removeItemSpecified(array,itemToRemove)
console.log(resultArray);