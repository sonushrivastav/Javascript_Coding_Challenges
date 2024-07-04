function splitIntoChunk(arr,chunk){
    for(let i=0;i<arr.length;i += chunk){
        let temparr 
        temparr = arr.slice(i,i+chunk)
        return temparr
    }
}

const arr = [1,2,3,4,5,6,7,]
const chunk = 5
console.log(splitIntoChunk(arr,chunk));