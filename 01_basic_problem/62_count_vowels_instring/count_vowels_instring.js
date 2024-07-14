// Q: Write a #JavaScript Program to Count the Number of Vowels in a String.

function countVowels(str){
   let vowels = 'aeiouAEIOU'
   let count = 0
   for(let char of str){
    if(vowels.includes(char)){
        count++
    }
   }
   return count

}

const stringExp = "Hello Worlds !~"

console.log(countVowels(stringExp));