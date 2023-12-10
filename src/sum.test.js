const sum = require("./sum")

test("add 2 + 1 to be equal 3", () => {
    expect(sum(2, 1)).toBe(3)
})