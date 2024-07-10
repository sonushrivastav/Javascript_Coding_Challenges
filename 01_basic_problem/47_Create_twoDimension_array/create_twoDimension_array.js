function createTwoDimensionArray(rows,cols,initialValue=2){
   const arr = []
   for(let i=0;i<rows;i++){
    const row = []
    for(let j=0; j<cols;j++){
        row.push(initialValue)
    }
    arr.push(row)
   }
   return arr
}

module.exports = createTwoDimensionArray