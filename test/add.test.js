const add = require("../src/add/add.js");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
