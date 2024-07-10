function sortArrayObjectByValue(arr,prop){
   return arr.sort((a,b)=>{
    if(a[prop] > b[prop]){
        return 1
    }
    else if(a[prop] < b[prop]){
        return -1
    }else{
        return 0
    }
   })
}

module.exports = sortArrayObjectByValue