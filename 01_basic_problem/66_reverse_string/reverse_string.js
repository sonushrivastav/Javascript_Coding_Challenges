// Q: Write a #JavaScript Program to Reverse a String.

function reversString(str){
//   return str.split('').reverse().join("")

   let reversting = ''
   for(let char of str){
    reversting = char + reversting
   }

   return reversting
}

const result = reversString("#JavaScript Program")
console.log(result);