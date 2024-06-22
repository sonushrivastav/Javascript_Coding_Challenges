const getCurrentDate = require("./get_current_date")

const specifiedDate = new Date()
const result = getCurrentDate(specifiedDate)
console.log(result);