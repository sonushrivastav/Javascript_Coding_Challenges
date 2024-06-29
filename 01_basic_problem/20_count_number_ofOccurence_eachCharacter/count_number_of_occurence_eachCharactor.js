function countOccurences(str){
  let count = {}

//   for(let i=0; i<str.length; i++){
//     let char = str.charAt(i)
//     if(count[char]){
//       count[char]++
//     } else {
//       count[char] = 1
//     }
//   }

for(let char of str){    
    count[char] = (count[char] || 0) + 1
}

 
 // find the charactor with the highest occurences
 let maxChar = ""
 let maxCount = 0
 for(let char in count){
    if(count[char] > maxCount){
        maxCount = count[char]
        maxChar = char
    }
 }


  return {count,maxChar,maxCount}
}

module.exports = countOccurences