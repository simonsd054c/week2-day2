const { CalcError } = require("./CalcError")

function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new CalcError("Inputs must be number", "Enter numbers only")
    }
    if(b === 0) {
        throw new CalcError("Denominator cannot be zero", "Enter denominator as any number other than zero")
    }
    return a/b;
}

module.exports = {
    divide
}