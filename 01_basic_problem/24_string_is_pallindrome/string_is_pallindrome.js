function isPallindromeString(str){
//    const reversed = str.split("").reverse().join('')
//    return str === reversed ? 'isPallindromeStrig':"notPallindrome"

   let start = 0
   let end = str.length -1

   while(start < end) {
     if(str[start] !== str[end]){
        return 'notPallindrome'
     }
     start++
        end--
   }
   return 'isPallindrome'
}

module.exports = isPallindromeString