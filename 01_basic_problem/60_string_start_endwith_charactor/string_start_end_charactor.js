// Q: Write a #JavaScript Program to Check Whether a String Starts and Ends With Certain Characters.

function stringStartEndWithChar(str,start,end){
   return str.startsWith(start) && str.endsWith(end)
}

const mainStr = "hello world"
const startChar = "h"
const endChar = "d"

const result = stringStartEndWithChar(mainStr, startChar, endChar)
console.log(result);