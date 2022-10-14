describe("something", () => {
    it("returns 1 if index is 1", () => {
        expect(fizzBuzz(1)).toBe("1")
    })
    it("returns Fizz if index is 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz")
    })
    it("returns Fizz if index is 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })
    it("returns FizzBuzz if index is 15", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
    it("returns 2 if index is 2", () => {
        expect(fizzBuzz(2)).toBe("2")
    })
    it("returns Fizz if index is 6", () => {
        expect(fizzBuzz(6)).toBe("Fizz")
    })
    it("returns Buzz if index is 10", () => {
        expect(fizzBuzz(10)).toBe("Buzz")
    })
    it("returns FizzBuzz if index is 30", () => {
        expect(fizzBuzz(30)).toBe("FizzBuzz")
    })
})


function fizzBuzz(index) {
    var dividesByFive = index % 5 == 0
    var dividesByThree = index % 3 == 0

    var str = ""
    if (dividesByThree) str += "Fizz"
    if (dividesByFive) str += "Buzz"
    return str.length == 0 ? `${index}` : str
}