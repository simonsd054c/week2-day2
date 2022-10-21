function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
}

describe("Test exception", () => {
    test("compileAndroidCode throws Error", () => {
        expect(() => compileAndroidCode()).toThrow()
    })

    test("compileAndroidCode throws 'Error' class", () => {
        expect(() => compileAndroidCode()).toThrow(Error)
    })

    test("compileAndroidCode throws error with specific string", () => {
        expect(() => compileAndroidCode()).toThrow("wrong JDK!")

        expect(() => compileAndroidCode()).toThrow(/wrong JDK/)
    })

})