const sortArrayObjectByValue = require("./sort_arrayObject_byValues")

const arrObj = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 32, city: 'Chicago' }
]

const result = sortArrayObjectByValue(arrObj,"name")
console.log(result);