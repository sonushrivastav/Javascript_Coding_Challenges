function rangeOfNumberCharactor(startRange,endRange){
  let range = []
  if(typeof startRange && typeof endRange === "string"){
    let start = startRange.charCodeAt(0) // convert letters into ascii value 
    let end = endRange.charCodeAt(0) // convert letters into ascii value 
    for(let i=start;i<=end;i++){
        range.push(String.fromCharCode(i)) // convert asciii to letter 
    }
    return range
  }else{
     if(typeof startRange && typeof endRange === "number"){
        for(let i=startRange;i<=endRange;i++){
            range.push(i)
        }
     }
     return range
  }
}

module.exports = rangeOfNumberCharactor