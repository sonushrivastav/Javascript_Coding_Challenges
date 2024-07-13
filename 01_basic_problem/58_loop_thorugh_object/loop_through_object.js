// Q: Write a #JavaScript Program to Loop Through an Object.

function loopThroughObject(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(`Key:${key}, Value:${obj[key]}`);
    }
  }
}

const exmpObj = {
    name:"Alice",
    age:45,
    address:"123, SanFrancisco",
}

console.log(loopThroughObject(exmpObj));