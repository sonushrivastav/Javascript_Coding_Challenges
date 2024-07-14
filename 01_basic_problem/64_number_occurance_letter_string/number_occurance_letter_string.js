// Q: Write a #JavaScript Program to Check the Number of Occurrences of a Character in the String.

function countCharOccurance(str,char){
   let count = 0
   for(let i=0;i<str.length;i++){
    if(str[i]==char){
        count++
    }
   }
   return count
}

let expString = "Hey dear what's up"
let character = "a"
const result = countCharOccurance(expString,character)
console.log(result);