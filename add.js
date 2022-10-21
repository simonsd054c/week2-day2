const { CalcError } = require("./CalcError")

function add(a, b) {
    // Handle if a or b is not a number
    if(typeof a !== "number" || typeof b !== "number"){
        throw new CalcError('Inputs must be number', 'Enter numbers only')
    }
    return a + b;
}

module.exports = {
    add
}