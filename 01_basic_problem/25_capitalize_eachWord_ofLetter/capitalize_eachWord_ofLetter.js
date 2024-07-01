function capitalizeFirstWordofLetter(str){
//    return str.replace(/\b\w/g, char=>char.toUpperCase)
   const words = str.split(" ")

   const capitalizeWords = words.map((word)=>{
    if(word.length > 0){
        return word[0].toUpperCase() + word.slice(1)
    }else{
        return word
    }
   })
   return capitalizeWords.join(" ")
}

module.exports = capitalizeFirstWordofLetter