// Q: Write a #JavaScript Program to Sort Words in Alphabetical Order.

function sortWordAsce(str){
  const words = str.split(" ")
  return words.sort().join(" ")
}

let exmpStr = "hello world hello"
const result= sortWordAsce(exmpStr)
console.log(result);