describe("Test values", () => {
    test("test truthy", () => {
        expect(true).toBeTruthy()
        expect(2).toBeTruthy()
        expect("not empty string").toBeTruthy()
    })

    test("test falsy", () => {
        expect(false).toBeFalsy()
        //falsy values in js
        //0
        //null
        //undefined
        //false
        //""
        expect(null).toBeFalsy()
        expect(0).toBeFalsy()
    })

    test("test null", () => {
        expect(null).toBeNull()
        expect("string").not.toBeNull()
    })

    test("test undefined", () => {
        expect(undefined).toBeUndefined()
        expect([1, 2]).not.toBeUndefined()

        expect([1, 2]).toBeDefined()
    })
})