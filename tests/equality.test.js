describe("Test equality", () => {
    test("toBe matcher", () => {
        expect(2).toBe(2)

        expect(2).not.toBe("2") // toBe uses Object.is

        // ===
        // Object.is

        expect(NaN).toBe(NaN)
        expect(+0).not.toBe(-0)

        let animal1 = {
            name: "Dog",
            sound: "Woof"
        }

        let animal2 = {
            name: "Dog",
            sound: "Woof"
        }

        expect(animal1).not.toBe(animal2)


    })

    test("toEqual matcher", () => {
        let animal1 = {
            name: "Dog",
            sound: "Woof"
        }

        let animal2 = {
            name: "Dog",
            sound: "Woof"
        }

        expect(animal1).toEqual(animal2)
    })
})