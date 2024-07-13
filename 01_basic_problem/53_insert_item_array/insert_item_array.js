function insertItem(array,item,index){
  if(index > array.length){
    console.log("index out of bounds");
    return array
  }

  array.splice(index,0,item)
  return array  
}

const array = [1,2,4,5]
const item = 3
const index = 2

const resultArr = insertItem(array,item,index)
console.log(resultArr);