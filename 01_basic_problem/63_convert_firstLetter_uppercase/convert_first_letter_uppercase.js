// Q: Write a #JavaScript Program to Convert the First Letter of a String into UpperCase.

function convertUppercaseFirstLetter(str){
   if(str.length === 0) return false
   return str.charAt(0).toUpperCase() + str.slice(1)    
}

const mainStr = "techWithNana"
const result = convertUppercaseFirstLetter(mainStr)
console.log(result);