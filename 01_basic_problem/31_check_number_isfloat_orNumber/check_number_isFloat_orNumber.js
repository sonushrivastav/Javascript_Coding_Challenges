function checkNumberFloatOrNumber(num){
  if(typeof num === 'number' && !isNaN(num)){
    if(Number.isInteger(num)){
        return `${num} is integer`
    }else{
        return `${num} is  a float value`
    }
  }else{
    return `${num} is not a number`
  }
}

module.exports = checkNumberFloatOrNumber