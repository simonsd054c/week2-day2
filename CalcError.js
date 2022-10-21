class CalcError extends Error { // Custom Error - we extend from JS 'Error' class
    constructor(message, solution) {
        super(message) // call the parent's contructor function with 'message'
        this.name = "CalcError" // give our CalcError class a name
        this.solution = solution // an extra property known as solution to use in our code
    }
}

module.exports = {
    CalcError
}