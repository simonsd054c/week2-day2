// We will try to make a calculator with only add and divide
// and try to incorporate npm, callbacks, error handling, 
// custom errors and unit testing

const { add } = require("./add")
const { divide } = require("./divide")

function calculate(a, b, cb) { // 9, 3, add
    try {
        console.log("Calculate", a, b)
        let result = cb(a, b) // add(9, 3) = 12 // our add can throw error
        console.log(result) // 12
        return result
    } catch(err) {
        console.log("Error: ", err.message)
        console.log("Name: ", err.name)
        console.log("Solution: ", err.solution)
    }
    
}

let number1 = 9;
let number2 = 0;

// calculate(number1, number2, add) // 9, 3, add

calculate(number1, number2, divide)

module.exports = {
    calculate
}