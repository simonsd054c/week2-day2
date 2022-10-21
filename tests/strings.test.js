describe("test strings", () => {
    test("hello matches hello", () => {
        expect("hello").toMatch("hello")
    })

    test("hello world matches hello", () => {
        expect("hello world").toMatch("hello")

        expect("hello world").toMatch(/llo/)
    })
})