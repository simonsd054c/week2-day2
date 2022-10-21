const animalArray = [
    "dog",
    "cat",
    "tiger",
    "lion"
]

const animalSubArray = [
    "dog",
    "lion"
]

describe("Testing Animals to contain some values", () => {
    test("animal array has dog", () => {
        expect(animalArray).toContain("dog")
    })

    test("the animal array doesn't have elephant", () => {
        expect(animalArray).not.toContain("elephant")
    })

    test("animal array to contain anialSubArray", () => {
        expect(animalArray).toEqual(expect.arrayContaining(animalSubArray))
    })
})