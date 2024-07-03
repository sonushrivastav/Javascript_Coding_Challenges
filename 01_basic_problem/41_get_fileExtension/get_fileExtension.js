function getfileExtension(filename){
  return filename.slice((filename.lastIndexOf(".") -1 >>> 0) + 2) // using string manipluation

  return filename.split(".").pop() // using regular epression methods
}

console.log(getfileExtension('img19939.png')) 