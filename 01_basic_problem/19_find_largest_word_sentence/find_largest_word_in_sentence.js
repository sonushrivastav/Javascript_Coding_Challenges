function findLargestWordSentence(str){
   let words = str.split(" ")
   let largest = ''

   for(let i=0; i<words.length;i++){
     if(words[i].length > largest.length){
        largest = words[i]
     }
   }
   return largest
}

module.exports = findLargestWordSentence