// Q: Write a #JavaScript Program to Remove a Property from an Object.

function removePropfromObj(obj,prop){
    if(obj.hasOwnProperty(prop)){
        delete obj[prop];
        return true
    }else{
        return false
    }
}

let exmplObj ={
    name:"james",
    age:10,
    work:"engineer"
}

const removeProp = "age"

const result = removePropfromObj(exmplObj,removeProp)
console.log(result);
console.log(exmplObj);