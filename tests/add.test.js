//describe block
    //test block
        //expect


const { add } = require("../add")

describe("Add Functionality", () => {
    test("adds 9 and 3 to output 12", () => {
        expect(add(9, 3)).toBe(12)
    })

    test("adds 10 and 12 to output 22", () => {
        expect(add(10, 12)).toBe(22)
    })

    test("adds -5 and 10 to output 5", () => {
        expect(add(-5, 10)).toBe(5)
    })

    //Floats
    test("adds 0.1 and 0.2 to output 0.3", () => {
        expect(add(0.1, 0.2)).not.toBe(0.3)
        expect(add(0.1, 0.2)).toBeCloseTo(0.3) // checks up to 2 precision value by default
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 15) // second argument is the precision value we can pass
        expect(add(0.1, 0.2)).not.toBeCloseTo(0.3, 16)
    })
})