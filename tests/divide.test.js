const { divide } = require("../divide")
const { CalcError } = require("../CalcError")

describe("Divide Functionality", () => {
    test("divide 9 by 3 to output 3", () => {
        expect(divide(9, 3)).toBe(3)
    })
})

describe("Divide throws error", () => {
    //at least one of the argument is not a number
    test("divide 9 by '3'(string) throws error", () => {
        expect(() => divide(9, "3")).toThrow()

        expect(() => divide(9, "3")).toThrow(CalcError)
    })
})