// Q: Write a #JavaScript Program to Check if a String Starts With Another String.


function startsWith(str,subStr){
  return str.startsWith(subStr)
}

const mainStr = "hello world"
const subStr1= "hello"
const subStr2= "worlds"

console.log(`Does ${mainStr} start with ${subStr1}`,startsWith(mainStr,subStr1));