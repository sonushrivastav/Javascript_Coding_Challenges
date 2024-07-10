const insertObj = require("./appendObject_array")

const array = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
const newObject = { name: 'Mike', age: 32 };
const result = insertObj(array,newObject)
console.log(result);