// Q: Write a #JavaScript Program to Check if a Key Exists in an Object.

function keyExistObj(obj,key){
    return obj.hasOwnProperty(key);
}

let exmpObj={
    name:"John",
    age:40,
    skills:"dance"
}

console.log(keyExistObj(exmpObj,"age"));