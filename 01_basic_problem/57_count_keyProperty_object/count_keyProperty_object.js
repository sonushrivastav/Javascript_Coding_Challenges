// Q: Write a #JavaScript Program to Count the Number of Keys/Properties in an Object.

function countKeyProperty(obj){
    return Object.keys(obj).length;  // Using Object.keys() to get all the keys in the object and then using length property to get the count.
}

const exmpObj = {
    name:"Alice",
    age:28,
    hobbies:["reading","games","coding"]
}

console.log(countKeyProperty(exmpObj)); // Output: 3