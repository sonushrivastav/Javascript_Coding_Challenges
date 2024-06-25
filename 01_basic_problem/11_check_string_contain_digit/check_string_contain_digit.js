function containOnlyDigits(str){
//    return /^\d+$/.test(str)  // Regular expression

  for(let i=0; i<str.length;i++){
    const char = str.charAt(i)
    if(char < "0" || char > "9"){
      return false
    }
  }
  return true
}

module.exports = containOnlyDigits