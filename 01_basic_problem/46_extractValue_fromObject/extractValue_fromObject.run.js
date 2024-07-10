const extractValues = require("./extractValue_fromObject")

const objArr = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 32, city: 'Chicago' }
]

const result = extractValues(objArr,"age")
console.log(result);