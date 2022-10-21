const { calculate } = require("../index")

describe("Calculate Function", () => {

    let add = jest.fn() // mock function - fake function
    test("calculate calls add", () => {
        calculate(9, 3, add)
        expect(add).toBeCalled()
        expect(add).toHaveBeenCalled()

        expect(add).toHaveBeenCalledTimes(1)

        expect(add).toHaveBeenCalledWith(9, 3)
    })
})

//js.mock() - mocks all functions of a module(file)
//js.spyOn() - mocks (spy on) a function of an object